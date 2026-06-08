'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useLanguageStore, usePortalStore } from '@stores';
import { TRANSLATIONS } from '@constants';
import { supabase } from '@/lib/supabaseClient';
import { isMobile } from 'react-device-detect';

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const containerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const language = useLanguageStore((state) => state.language);
  const isActive = usePortalStore((state) => !!state.activePortalId);
  const t = TRANSLATIONS[language].contact;

  const positionClass = isMobile ? 'top-2 left-2' : 'top-6 left-6';

  // Animate button visibility based on 3D portal activity
  useGSAP(() => {
    gsap.to(buttonRef.current, {
      opacity: isActive ? 0 : 1,
      pointerEvents: isActive ? 'none' : 'auto',
      duration: 1,
      delay: isActive ? 0 : 1,
    });
  }, [isActive]);

  // Animate modal entry/exit
  useGSAP(() => {
    if (isOpen) {
      gsap.to(containerRef.current, { opacity: 1, display: 'flex', duration: 0.3 });
      gsap.fromTo(modalRef.current, 
        { scale: 0.9, y: 20, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.4, ease: 'back.out(1.2)' }
      );
    } else {
      gsap.to(containerRef.current, { opacity: 0, display: 'none', duration: 0.2 });
    }
  }, [isOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSending(true);
    setStatus('idle');

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([{ name, email, message }]);

      if (error) throw error;

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error('Error saving to Supabase:', err);
      setStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {/* Floating trigger button */}
      <button
        ref={buttonRef}
        onClick={() => {
          setIsOpen(true);
          setStatus('idle');
        }}
        className={`fixed ${positionClass} z-40 font-sans text-xs tracking-widest text-white font-bold bg-neutral-950/40 border border-white/10 rounded-full px-4 py-2 hover:bg-neutral-900/70 hover:border-white/30 backdrop-blur-md transition-all duration-300 cursor-pointer shadow-lg`}
        style={{ opacity: 0, pointerEvents: 'none' }}
      >
        {t.button}
      </button>

      {/* Backdrop overlay */}
      <div
        ref={containerRef}
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
        style={{ display: 'none', opacity: 0 }}
      >
        {/* Modal content */}
        <div
          ref={modalRef}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-neutral-950/90 border border-white/10 rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl backdrop-blur-md overflow-hidden select-text"
        >
          {/* Subtle glowing decorative background */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full filter blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full filter blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h2 className="text-2xl font-serif font-normal text-white mb-6 pr-6">
            {t.title}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5 font-semibold">
                {t.nameLabel}
              </label>
              <input
                type="text"
                required
                disabled={isSending}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.namePlaceholder}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all placeholder:text-slate-600 disabled:opacity-50"
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5 font-semibold">
                {t.emailLabel}
              </label>
              <input
                type="email"
                required
                disabled={isSending}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.emailPlaceholder}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all placeholder:text-slate-600 disabled:opacity-50"
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5 font-semibold">
                {t.messageLabel}
              </label>
              <textarea
                required
                rows={4}
                disabled={isSending}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.messagePlaceholder}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all placeholder:text-slate-600 resize-none disabled:opacity-50"
              />
            </div>

            {status === 'success' && (
              <div className="p-3 bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 rounded-lg text-xs leading-relaxed">
                ✓ {t.success}
              </div>
            )}

            {status === 'error' && (
              <div className="p-3 bg-red-950/40 border border-red-500/20 text-red-400 rounded-lg text-xs leading-relaxed">
                ⚠ {t.error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSending || !name || !email || !message}
              className="w-full py-3 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:bg-neutral-800 disabled:text-slate-600 text-white text-sm font-semibold transition-all duration-300 shadow-lg shadow-indigo-900/30 hover:shadow-indigo-900/50 active:scale-98 cursor-pointer"
            >
              {isSending ? t.sending : t.sendButton}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
