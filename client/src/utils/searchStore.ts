import { create } from "zustand";

interface SearchStore {
    search: string|null;
    setSearch: (search: string|null) => void;
}

const useSearchStore = create<SearchStore>((set) => ({
    search: null,
    setSearch: (search) => set({ search })
}));

export default useSearchStore;