import { create } from 'zustand';

interface ScrollStore {
  scrollProgress: number;
  setScrollProgress: (progress: number) => void;
  mainScrollEl: HTMLElement | null;
  setMainScrollEl: (el: HTMLElement | null) => void;
  workScrollEl: HTMLElement | null;
  setWorkScrollEl: (el: HTMLElement | null) => void;
}

export const useScrollStore = create<ScrollStore>((set) => ({
  scrollProgress: 0,
  setScrollProgress: (progress) => set(() => ({ scrollProgress: progress })),
  mainScrollEl: null,
  setMainScrollEl: (el) => set({ mainScrollEl: el }),
  workScrollEl: null,
  setWorkScrollEl: (el) => set({ workScrollEl: el }),
}));