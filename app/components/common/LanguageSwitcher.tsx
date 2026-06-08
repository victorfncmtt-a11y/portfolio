'use client';

import { useGSAP } from "@gsap/react";
import { usePortalStore, useLanguageStore } from "@stores";
import gsap from "gsap";
import { useRef } from "react";
import { isMobile } from "react-device-detect";

const LanguageSwitcher = () => {
  const switcherRef = useRef<HTMLDivElement>(null);
  const { language, toggleLanguage } = useLanguageStore();
  const isActive = usePortalStore((state) => state.activePortalId);
  const positionClass = isMobile ? 'top-2 right-12' : 'top-6 right-18';

  useGSAP(() => {
    gsap.to(switcherRef.current, {
      opacity: isActive ? 0 : 1,
      duration: 1,
      delay: isActive ? 0 : 1,
    });
  }, [isActive]);

  return (
    <div className={`fixed ${positionClass}`} ref={switcherRef} style={{ opacity: 0, zIndex: 2 }}>
      <button 
        className="hover:cursor-pointer font-sans text-xs tracking-wider text-white bg-transparent border-0 opacity-70 hover:opacity-100 transition-opacity font-bold"
        onClick={toggleLanguage}
      >
        {language.toUpperCase()}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
