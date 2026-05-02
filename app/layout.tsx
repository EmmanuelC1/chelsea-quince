import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, Great_Vibes } from 'next/font/google';
import { LangProvider } from '@/context/LangContext';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Chelsea Castillo — Quinceañera · 2 de Mayo 2026',
  description:
    'Celebrating fifteen beautiful years of love, family, and dreams.',
  openGraph: {
    title: 'Chelsea Castillo — Quinceañera',
    description: 'May 2nd, 2026 · Join us in celebrating this special evening.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${cormorant.variable} ${inter.variable} ${greatVibes.variable}`}
    >
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
