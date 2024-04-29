import { create } from "zustand";
import { flights } from "@/items/settingsItems";

interface Store {
  volume: number;
  setVolume: (volume: number) => void;
  flight: string;
  setFlight: (flight: string) => void;
}

const useStore = create<Store>((set) => ({
  volume: 30,
  setVolume: (volume: number) => set({ volume }),
  flight: flights[0].value,
  setFlight: (flight: string) => set({ flight }),
}));

export default useStore;
