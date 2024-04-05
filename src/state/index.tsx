import { create } from "zustand";

interface Store {
  volume: number;
  setVolume: (volume: number) => void;
}

const useStore = create<Store>((set) => ({
  volume: 30,
  setVolume: (volume: number) => set({ volume }),
}));

export default useStore;
