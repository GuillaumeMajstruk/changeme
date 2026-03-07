import { create } from 'zustand';

interface MapState {
  center: [number, number] | null;
  zoom: number;
  setCenter: (center: [number, number] | null) => void;
  setZoom: (zoom: number) => void;
}

export const useMapStore = create<MapState>((set) => ({
  center: null,
  zoom: 15,
  setCenter: (center) => set({ center }),
  setZoom: (zoom) => set({ zoom }),
}));
