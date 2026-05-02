'use client';

import { useLang } from '@/context/LangContext';

export default function LangToggle() {
  const { locale, toggleLocale } = useLang();

  return (
    <button
      onClick={toggleLocale}
      aria-label="Toggle language"
      style={{
        position: 'fixed',
        top: '1.25rem',
        right: '1.25rem',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        padding: '0.45rem 1rem',
        borderRadius: '100px',
        // Dark-tinted glass — readable on both light and dark sections
        background: 'rgba(10, 15, 30, 0.55)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(191, 215, 246, 0.2)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
        cursor: 'pointer',
        transition: 'background 0.25s ease, border-color 0.25s ease',
        fontFamily: 'var(--font-body)',
        fontSize: '0.6rem',
        letterSpacing: '0.22em',
        textTransform: 'uppercase' as const,
        minWidth: '72px',
        justifyContent: 'center',
        overflow: 'visible',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLButtonElement).style.background =
          'rgba(10, 15, 30, 0.75)';
        (e.currentTarget as HTMLButtonElement).style.borderColor =
          'rgba(191, 215, 246, 0.4)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.background =
          'rgba(10, 15, 30, 0.55)';
        (e.currentTarget as HTMLButtonElement).style.borderColor =
          'rgba(191, 215, 246, 0.2)';
      }}
    >
      <span
        style={{
          color:
            locale === 'es' ? 'var(--color-primary)' : 'rgba(191,215,246,0.35)',
          transition: 'color 0.25s ease',
        }}
      >
        ES
      </span>
      <span
        style={{
          color: 'rgba(191,215,246,0.25)',
          fontSize: '0.55rem',
        }}
      >
        |
      </span>
      <span
        style={{
          color:
            locale === 'en' ? 'var(--color-primary)' : 'rgba(191,215,246,0.35)',
          transition: 'color 0.25s ease',
        }}
      >
        EN
      </span>
    </button>
  );
}
