import {create} from 'zustand';
import Employee from '../types/employee';

interface DisplayStore {
    employee: Employee | null;
    isPopupOpen: boolean;
    openPopup: (employee: Employee) => void;
    closePopup: () => void;
}

const useDisplayStore = create<DisplayStore>((set) => ({
    employee: null,
    isPopupOpen: false,
    openPopup: (employee) => {
        set({ employee, isPopupOpen: true });
    },
    closePopup: () => {
        set({ isPopupOpen: false });
    },
}));

export default useDisplayStore;