import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Language = 'en' | 'pt';

interface LanguageStore {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set, get) => ({
      language: 'en',
      toggleLanguage: () => {
        const nextLang = get().language === 'en' ? 'pt' : 'en';
        set({ language: nextLang });
      },
      setLanguage: (lang) => set({ language: lang }),
    }),
    {
      name: "language-storage",
      partialize: (state) => ({ language: state.language }),
    }
  )
);
