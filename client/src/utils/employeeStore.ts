import {create} from "zustand";
import Employee from "../types/employee";

const API_URL = 'http://localhost:3000/';

interface EmployeeStore {
    employees: Employee[];
    loading: boolean;
    error: string | null;
    fetchEmployees: (filter?: string | null) => Promise<void>;
}
  
const useEmployeeStore = create<EmployeeStore>((set) => ({
    employees: [],
    loading: false,
    error: null,
    fetchEmployees: async (filter?: string | null) => {
        set({ loading: true, error: null });
        try {
            const url = filter? `${API_URL}?term=${filter}`: API_URL;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            set({ employees: data, loading: false });
        } catch (error) {
            console.error('Error fetching data:', error);
            set({ loading: false, error: 'Failed to fetch data. Please try again later.' });
        }
    }
}));



export default useEmployeeStore;