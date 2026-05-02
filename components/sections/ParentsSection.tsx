'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LangContext';
import Image from 'next/image';

// ─── Shared animation config ──────────────────────────────────────────────────
const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 1.0, ease: EASE, delay },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 1.2, ease: EASE, delay },
});

// ─── Diamond Divider ──────────────────────────────────────────────────────────
function DiamondDivider() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        margin: '0 auto',
        width: 'fit-content',
      }}
    >
      <div
        style={{
          width: 60,
          height: 1,
          background:
            'linear-gradient(to right, transparent, rgba(122,174,222,0.4))',
        }}
      />
      <div
        style={{
          width: 5,
          height: 5,
          background: 'var(--color-primary-deep)',
          transform: 'rotate(45deg)',
          opacity: 0.45,
        }}
      />
      <div
        style={{
          width: 60,
          height: 1,
          background:
            'linear-gradient(to left, transparent, rgba(122,174,222,0.4))',
        }}
      />
    </div>
  );
}

// ─── Parent name display ──────────────────────────────────────────────────────
function ParentNames() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.2rem',
      }}
    >
      {/* ── Photo placeholder — uncomment when photo is available ── */}
      <div
        style={{
          position: 'relative',
          width: 'clamp(200px, 55vw, 320px)',
          height: 'clamp(140px, 38vw, 220px)',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid rgba(191,215,246,0.35)',
          marginBottom: '1.5rem',
        }}
      >
        <Image
          src="/images/chelsea-parents.jpg"
          alt="Oreste and Maria Castillo"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 50%' }}
        />
      </div>
      {/* ── End photo placeholder ── */}
      <p
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(1.5rem, 5vw, 2.2rem)',
          fontWeight: 300,
          color: 'var(--color-text)',
          letterSpacing: '0.04em',
          lineHeight: 1.15,
          margin: 0,
          textAlign: 'center',
        }}
      >
        Oreste Castillo
      </p>
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.55rem',
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: 'rgba(122,174,222,0.5)',
        }}
      >
        &
      </span>
      <p
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(1.5rem, 5vw, 2.2rem)',
          fontWeight: 300,
          color: 'var(--color-text)',
          letterSpacing: '0.04em',
          lineHeight: 1.15,
          margin: 0,
          textAlign: 'center',
        }}
      >
        Maria Castillo
      </p>
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function ParentsSection() {
  const { locale } = useLang();

  const tribute = {
    es: {
      label: 'Con Profundo Amor',
      heading: 'Los Padres',
      body: 'Detrás de cada sueño cumplido hay dos personas que nunca dejaron de creer.\nOreste y Maria lo dieron todo — su tiempo, su amor, su corazón entero.\nEsta noche es tan suya como de Chelsea.',
      note: 'De parte de Chelsea y sus hijos, gracias.',
    },
    en: {
      label: 'With Deepest Love',
      heading: 'The Parents',
      body: 'Behind every dream fulfilled are two people who never stopped believing.\nOreste and Maria gave everything — their time, their love, their whole hearts.\nThis night belongs to them as much as it belongs to Chelsea.',
      note: 'On behalf of Chelsea and their sons, thank you.',
    },
  };

  const copy = tribute[locale];
  const bodyLines = copy.body.split('\n');

  return (
    <section
      id="parents"
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #eef2f7 0%, #f8fafd 100%)',
        padding: 'clamp(5rem, 10vh, 8rem) 1.5rem',
        overflow: 'hidden',
      }}
    >
      {/* Dot grid texture — matches Padrinos */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(rgba(191,215,246,0.12) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }}
      />

      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60vw',
          height: '50vh',
          background:
            'radial-gradient(ellipse at center, rgba(191,215,246,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Top fade from CourtSection (dark) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 100,
          background:
            'linear-gradient(to bottom, #eef2f7 0%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 520,
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(1.6rem, 4vh, 2.4rem)',
        }}
      >
        {/* Section label */}
        <motion.p
          {...fadeUp(0)}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.62rem',
            letterSpacing: '0.38em',
            textTransform: 'uppercase',
            color: 'var(--color-primary-deep)',
            opacity: 0.75,
            margin: 0,
          }}
        >
          {copy.label}
        </motion.p>

        {/* Section heading */}
        <motion.h2
          {...fadeUp(0.1)}
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2.4rem, 7vw, 3.8rem)',
            fontWeight: 300,
            color: 'var(--color-text)',
            letterSpacing: '0.02em',
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          {copy.heading}
        </motion.h2>

        {/* Animated underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
          style={{
            width: 80,
            height: 1,
            background:
              'linear-gradient(to right, transparent, var(--color-primary-deep), transparent)',
            transformOrigin: 'center',
            marginTop: '-0.75rem',
            opacity: 0.5,
          }}
        />

        <motion.div {...fadeIn(0.25)} style={{ width: '100%' }}>
          <DiamondDivider />
        </motion.div>

        {/* Parent names */}
        <motion.div {...fadeUp(0.3)} style={{ width: '100%' }}>
          <ParentNames />
        </motion.div>

        {/* Divider */}
        <motion.div {...fadeIn(0.4)} style={{ width: '100%' }}>
          <DiamondDivider />
        </motion.div>

        {/* Tribute body */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.2rem',
            maxWidth: 420,
          }}
        >
          {bodyLines.map((line, i) => (
            <motion.p
              key={i}
              {...fadeUp(0.45 + i * 0.08)}
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1rem, 2.8vw, 1.2rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--color-text-muted)',
                lineHeight: 1.75,
                letterSpacing: '0.01em',
                margin: 0,
              }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Note — closing line */}
        <motion.p
          {...fadeUp(0.65)}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.68rem',
            letterSpacing: '0.12em',
            color: 'var(--color-primary-deep)',
            opacity: 0.6,
            margin: 0,
            marginTop: '0.25rem',
          }}
        >
          {copy.note}
        </motion.p>

        {/* Bottom flourish */}
        <motion.div
          {...fadeIn(0.75)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            width: '100%',
            maxWidth: 260,
            marginTop: '0.5rem',
          }}
        >
          <div
            style={{
              flex: 1,
              height: 1,
              background: 'rgba(122,174,222,0.2)',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '0.85rem',
              color: 'rgba(122,174,222,0.4)',
            }}
          >
            ✦
          </span>
          <div
            style={{
              flex: 1,
              height: 1,
              background: 'rgba(122,174,222,0.2)',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
