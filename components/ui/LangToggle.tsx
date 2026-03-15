'use client';

import { useLang } from '@/context/LangContext';

export default function LangToggle() {
  const { locale, toggleLocale } = useLang();

  return (
    <button
      onClick={toggleLocale}
      aria-label="Toggle language"
      className="
        fixed top-5 right-5 z-50
        flex items-center gap-1.5
        px-3 py-1.5
        text-xs font-medium tracking-widest uppercase
        rounded-full
        border border-white/30
        bg-white/10 backdrop-blur-md
        text-white/80
        hover:bg-white/20 hover:text-white
        transition-all duration-300
      "
    >
      <span className={locale === 'es' ? 'text-white' : 'text-white/40'}>
        ES
      </span>
      <span className="text-white/30">|</span>
      <span className={locale === 'en' ? 'text-white' : 'text-white/40'}>
        EN
      </span>
    </button>
  );
}
