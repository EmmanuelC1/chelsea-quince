'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import es from '@/translations/es';
import en from '@/translations/en';

type Locale = 'es' | 'en';
type Translations = typeof es;

interface LangContextType {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('es');

  const toggleLocale = () => {
    setLocale(prev => (prev === 'es' ? 'en' : 'es'));
  };

  const t = locale === 'es' ? es : en;

  return (
    <LangContext.Provider value={{ locale, t, toggleLocale }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) throw new Error('useLang must be used inside LangProvider');
  return context;
}
