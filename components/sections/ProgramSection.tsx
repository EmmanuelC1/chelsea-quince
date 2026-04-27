'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LangContext';
import { programEvents, ProgramEvent } from '@/data/timeline';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 1.0, ease: EASE },
};

function DiamondDivider() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        margin: '0 auto 2.5rem',
        width: 'fit-content',
      }}
    >
      <div
        style={{
          width: 60,
          height: 1,
          background:
            'linear-gradient(to right, transparent, rgba(191,215,246,0.5))',
        }}
      />
      <div
        style={{
          width: 5,
          height: 5,
          background: 'var(--color-primary)',
          transform: 'rotate(45deg)',
          opacity: 0.7,
        }}
      />
      <div
        style={{
          width: 60,
          height: 1,
          background:
            'linear-gradient(to left, transparent, rgba(191,215,246,0.5))',
        }}
      />
    </div>
  );
}

// ─── Individual event row ─────────────────────────────────────────────────────
function EventRow({
  event,
  index,
  isLast,
}: {
  event: ProgramEvent;
  index: number;
  isLast: boolean;
}) {
  const { locale } = useLang();
  const isLeft = index % 2 === 0; // alternates left / right on desktop
  const title = event.title[locale];
  const description = event.description[locale];

  return (
    <div
      style={{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '1fr 48px 1fr',
        alignItems: 'start',
        gap: '0 0',
        marginBottom: 0,
      }}
      className="program-row"
    >
      {/* LEFT COLUMN */}
      <motion.div
        initial={{ opacity: 0, x: -32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: EASE, delay: index * 0.07 }}
        style={{
          padding: '0 2rem 0 0',
          textAlign: 'right',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          paddingTop: '0.2rem',
        }}
      >
        {isLeft ? (
          <EventCard event={event} title={title} description={description} />
        ) : (
          <TimeStamp time={event.time} />
        )}
      </motion.div>

      {/* CENTER: icon node + connector */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: EASE, delay: index * 0.07 + 0.15 }}
          style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: event.highlight
              ? 'radial-gradient(circle, rgba(191,215,246,0.25) 0%, rgba(191,215,246,0.08) 100%)'
              : 'rgba(255,255,255,0.04)',
            border: event.highlight
              ? '1px solid rgba(191,215,246,0.5)'
              : '1px solid rgba(191,215,246,0.18)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            position: 'relative',
            zIndex: 1,
            boxShadow: event.highlight
              ? '0 0 20px rgba(191,215,246,0.15)'
              : 'none',
          }}
        >
          <span
            style={{
              color: event.highlight
                ? 'var(--color-primary)'
                : 'rgba(191,215,246,0.45)',
              fontSize: event.icon === '✦' ? '0.85rem' : '0.65rem',
              lineHeight: 1,
            }}
          >
            {event.icon}
          </span>
        </motion.div>

        {/* Connector line below node */}
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.9,
              ease: EASE,
              delay: index * 0.07 + 0.3,
            }}
            style={{
              width: 1,
              height: 72,
              background:
                'linear-gradient(to bottom, rgba(191,215,246,0.3), rgba(191,215,246,0.04))',
              transformOrigin: 'top',
              flexShrink: 0,
            }}
          />
        )}
      </div>

      {/* RIGHT COLUMN */}
      <motion.div
        initial={{ opacity: 0, x: 32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: EASE, delay: index * 0.07 }}
        style={{
          padding: '0 0 0 2rem',
          textAlign: 'left',
          paddingTop: '0.2rem',
        }}
      >
        {isLeft ? (
          <TimeStamp time={event.time} />
        ) : (
          <EventCard event={event} title={title} description={description} />
        )}
      </motion.div>
    </div>
  );
}

// ─── Time stamp display ───────────────────────────────────────────────────────
function TimeStamp({ time }: { time: string }) {
  return (
    <div style={{ paddingTop: '0.55rem' }}>
      <span
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(1.3rem, 3vw, 1.75rem)',
          fontWeight: 300,
          color: 'rgba(191,215,246,0.55)',
          letterSpacing: '0.06em',
          lineHeight: 1,
          display: 'block',
        }}
      >
        {time}
      </span>
    </div>
  );
}

// ─── Event content card ───────────────────────────────────────────────────────
function EventCard({
  event,
  title,
  description,
}: {
  event: ProgramEvent;
  title: string;
  description: string;
}) {
  return (
    <div
      style={{
        background: event.highlight
          ? 'rgba(191,215,246,0.06)'
          : 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(12px)',
        border: event.highlight
          ? '1px solid rgba(191,215,246,0.2)'
          : '1px solid rgba(255,255,255,0.06)',
        borderRadius: 14,
        padding: '1.25rem 1.5rem',
        marginBottom: '1rem',
        maxWidth: 300,
      }}
    >
      <h3
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(1.15rem, 2.5vw, 1.45rem)',
          fontWeight: event.highlight ? 500 : 400,
          color: event.highlight
            ? 'var(--color-primary)'
            : 'rgba(250,250,250,0.88)',
          letterSpacing: '0.02em',
          margin: '0 0 0.45rem',
          lineHeight: 1.2,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.8rem',
          color: 'rgba(250,250,250,0.45)',
          lineHeight: 1.6,
          margin: 0,
          letterSpacing: '0.01em',
        }}
      >
        {description}
      </p>
    </div>
  );
}

// ─── Mobile-only stacked layout ───────────────────────────────────────────────
function MobileEventRow({
  event,
  index,
  isLast,
}: {
  event: ProgramEvent;
  index: number;
  isLast: boolean;
}) {
  const { locale } = useLang();
  const title = event.title[locale];
  const description = event.description[locale];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.85, ease: EASE, delay: index * 0.08 }}
      style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'flex-start',
        position: 'relative',
      }}
    >
      {/* Left: node + line */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: event.highlight
              ? 'rgba(191,215,246,0.12)'
              : 'rgba(255,255,255,0.04)',
            border: event.highlight
              ? '1px solid rgba(191,215,246,0.4)'
              : '1px solid rgba(191,215,246,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: event.highlight
              ? '0 0 16px rgba(191,215,246,0.12)'
              : 'none',
          }}
        >
          <span
            style={{
              color: event.highlight
                ? 'var(--color-primary)'
                : 'rgba(191,215,246,0.4)',
              fontSize: '0.7rem',
            }}
          >
            {event.icon}
          </span>
        </div>
        {!isLast && (
          <div
            style={{
              width: 1,
              flexGrow: 1,
              minHeight: 48,
              background:
                'linear-gradient(to bottom, rgba(191,215,246,0.25), rgba(191,215,246,0.03))',
              marginTop: 4,
            }}
          />
        )}
      </div>

      {/* Right: time + content */}
      <div style={{ paddingBottom: isLast ? 0 : '1.5rem', flex: 1 }}>
        <span
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: '1.1rem',
            fontWeight: 300,
            color: 'rgba(191,215,246,0.5)',
            letterSpacing: '0.06em',
            display: 'block',
            marginBottom: '0.5rem',
            lineHeight: 1,
          }}
        >
          {event.time}
        </span>
        <div
          style={{
            background: event.highlight
              ? 'rgba(191,215,246,0.06)'
              : 'rgba(255,255,255,0.03)',
            border: event.highlight
              ? '1px solid rgba(191,215,246,0.18)'
              : '1px solid rgba(255,255,255,0.06)',
            borderRadius: 12,
            padding: '1rem 1.1rem',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '1.2rem',
              fontWeight: event.highlight ? 500 : 400,
              color: event.highlight
                ? 'var(--color-primary)'
                : 'rgba(250,250,250,0.88)',
              margin: '0 0 0.35rem',
              lineHeight: 1.2,
              letterSpacing: '0.02em',
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.78rem',
              color: 'rgba(250,250,250,0.43)',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function ProgramSection() {
  const { locale } = useLang();

  return (
    <section
      id="program"
      style={{
        position: 'relative',
        background:
          'linear-gradient(180deg, #0d1220 0%, #0a0f1a 50%, #0d1220 100%)',
        padding: 'clamp(5rem, 10vh, 8rem) 1.5rem',
        overflow: 'hidden',
      }}
    >
      {/* Ambient radial glow — top center */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60vw',
          height: '50vh',
          background:
            'radial-gradient(ellipse at center, rgba(122,174,222,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Ambient glow — bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: '-5%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '50vw',
          height: '40vh',
          background:
            'radial-gradient(ellipse at center, rgba(232,213,183,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Top fade from Padrinos (light) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 120,
          background:
            'linear-gradient(to bottom, #f8fafd 0%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Bottom fade to ClosingScene (dark) */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 100,
          background: 'linear-gradient(to top, #080c14 0%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Section header ── */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: 'clamp(3rem, 6vh, 5rem)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.p
          {...fadeUp}
          transition={{ duration: 1.0, ease: EASE }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.62rem',
            letterSpacing: '0.38em',
            textTransform: 'uppercase',
            color: 'rgba(191,215,246,0.5)',
            marginBottom: '1rem',
          }}
        >
          {locale === 'es' ? 'La Celebración' : 'The Celebration'}
        </motion.p>

        <motion.h2
          {...fadeUp}
          transition={{ duration: 1.0, ease: EASE, delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2.4rem, 7vw, 3.8rem)',
            fontWeight: 300,
            color: '#fafafa',
            letterSpacing: '0.02em',
            lineHeight: 1.1,
            margin: '0 0 0.5rem',
          }}
        >
          {locale === 'es' ? 'Programa' : 'Program'}
        </motion.h2>

        {/* Animated underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
          style={{
            width: 80,
            height: 1,
            background:
              'linear-gradient(to right, transparent, var(--color-primary), transparent)',
            margin: '1.25rem auto 0',
            transformOrigin: 'center',
          }}
        />

        <motion.div
          {...fadeUp}
          transition={{ duration: 1.0, ease: EASE, delay: 0.2 }}
          style={{ marginTop: '1.5rem' }}
        >
          {/* <DiamondDivider /> */}
        </motion.div>
      </div>

      {/* ── Desktop timeline (alternating) ── */}
      <div
        className="program-desktop"
        style={{
          maxWidth: 760,
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {programEvents.map((event, index) => (
          <EventRow
            key={event.id}
            event={event}
            index={index}
            isLast={index === programEvents.length - 1}
          />
        ))}
      </div>

      {/* ── Mobile timeline (stacked) ── */}
      <div
        className="program-mobile"
        style={{
          maxWidth: 480,
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {programEvents.map((event, index) => (
          <MobileEventRow
            key={event.id}
            event={event}
            index={index}
            isLast={index === programEvents.length - 1}
          />
        ))}
      </div>

      {/* ── Footer flourish ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.0, ease: EASE, delay: 0.2 }}
        style={{
          textAlign: 'center',
          marginTop: 'clamp(3rem, 6vh, 5rem)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <DiamondDivider />
        <p
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            fontStyle: 'italic',
            fontWeight: 300,
            color: 'rgba(191,215,246,0.4)',
            letterSpacing: '0.04em',
          }}
        >
          {locale === 'es'
            ? '✦ Una noche que siempre recordaremos ✦'
            : '✦ A night we will always remember ✦'}
        </p>
      </motion.div>

      {/* Responsive show/hide styles */}
      <style>{`
        .program-desktop { display: grid; }
        .program-mobile  { display: none; }

        @media (max-width: 640px) {
          .program-desktop { display: none; }
          .program-mobile  { display: block; }
        }

        @media (max-width: 640px) {
          .program-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
