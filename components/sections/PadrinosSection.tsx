'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LangContext';
import { padrinosData, PadrinoCategory } from '@/data/padrinos';

// ─── Helpers ──────────────────────────────────────────────────────────────────

function DiamondDivider() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        justifyContent: 'center',
        margin: '0.1rem 0',
      }}
    >
      <div
        style={{
          height: '1px',
          width: '24px',
          background:
            'linear-gradient(90deg, transparent, rgba(122,174,222,0.35))',
        }}
      />
      <div
        style={{
          width: '4px',
          height: '4px',
          background: 'rgba(122,174,222,0.45)',
          transform: 'rotate(45deg)',
          flexShrink: 0,
        }}
      />
      <div
        style={{
          height: '1px',
          width: '24px',
          background:
            'linear-gradient(90deg, rgba(122,174,222,0.35), transparent)',
        }}
      />
    </div>
  );
}

function formatName(p: { firstName: string; lastName?: string }) {
  return p.lastName ? `${p.firstName} ${p.lastName}` : p.firstName;
}

// ─── Category card ────────────────────────────────────────────────────────────
// All cards are full width. Single sponsor = large centered name.
// Multiple sponsors = inline flow separated by · dots.

function CategoryCard({
  category,
  index,
  locale,
}: {
  category: PadrinoCategory;
  index: number;
  locale: 'es' | 'en';
}) {
  const names = category.padrinos.map(formatName);
  const isSingle = names.length === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-24px' }}
      transition={{
        duration: 0.7,
        delay: (index % 8) * 0.06,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{
        background: 'rgba(255,255,255,0.72)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(191,215,246,0.5)',
        borderRadius: '14px',
        padding: '1.25rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.6rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top shimmer accent line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '25%',
          right: '25%',
          height: '1px',
          background:
            'linear-gradient(90deg, transparent, rgba(191,215,246,0.8), transparent)',
        }}
      />

      {/* Signature mark */}
      <span
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: '0.8rem',
          color: 'rgba(122,174,222,0.55)',
          lineHeight: 1,
        }}
      >
        ✦
      </span>

      {/* Category label + divider */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.52rem',
            letterSpacing: '0.26em',
            textTransform: 'uppercase',
            color: 'var(--color-primary-deep)',
            margin: 0,
          }}
        >
          {category.category[locale]}
        </p>
        <DiamondDivider />
      </div>

      {/* Names */}
      {isSingle ? (
        // Solo sponsor — large centered name
        <p
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(1.15rem, 3.5vw, 1.4rem)',
            fontWeight: 400,
            color: 'var(--color-text)',
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          {names[0]}
        </p>
      ) : (
        // Multiple sponsors — inline flow with · separators
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'baseline',
          }}
        >
          {names.map((name, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                fontWeight: 400,
                color: 'var(--color-text)',
                lineHeight: 1.7,
              }}
            >
              {name}
              {i < names.length - 1 && (
                <span
                  style={{
                    color: 'rgba(122,174,222,0.6)',
                    margin: '0 0.45rem',
                  }}
                >
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function PadrinosSection() {
  const { t, locale } = useLang();

  return (
    <section
      id="padrinos"
      style={{
        background: 'linear-gradient(180deg, #f8fafd 0%, var(--color-bg) 100%)',
        padding: 'clamp(4rem, 10vw, 7rem) 0 clamp(5rem, 12vw, 8rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dot grid texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(rgba(191,215,246,0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '560px',
          margin: '0 auto',
          padding: '0 1.5rem',
          position: 'relative',
        }}
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ textAlign: 'center', marginBottom: '1rem' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.62rem',
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              color: 'var(--color-primary-deep)',
              marginBottom: '0.75rem',
              opacity: 0.8,
            }}
          >
            {t.padrinos.subheading}
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2.4rem, 7vw, 3.8rem)',
              fontWeight: 300,
              color: 'var(--color-text)',
              lineHeight: 1.15,
            }}
          >
            {t.padrinos.heading}
          </h2>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.1,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{
              height: '1px',
              width: '80px',
              margin: '1.25rem auto 0',
              background:
                'linear-gradient(90deg, transparent, rgba(122,174,222,0.6), transparent)',
              transformOrigin: 'center',
            }}
          />
        </motion.div>

        {/* Gratitude message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(1rem, 2.8vw, 1.15rem)',
            fontStyle: 'italic',
            color: 'var(--color-text-muted)',
            textAlign: 'center',
            lineHeight: 1.75,
            maxWidth: '440px',
            margin: '0 auto 2.5rem',
          }}
        >
          {t.padrinos.gratitude}
        </motion.p>

        {/* Cards — single column, all full width */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
        >
          {padrinosData.map((category, i) => (
            <CategoryCard
              key={category.id}
              category={category}
              index={i}
              locale={locale}
            />
          ))}
        </div>

        {/* Bottom signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          style={{
            textAlign: 'center',
            marginTop: '3rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              width: '100%',
              maxWidth: '300px',
            }}
          >
            <div
              style={{
                flex: 1,
                height: '1px',
                background: 'rgba(122,174,222,0.25)',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '0.9rem',
                color: 'rgba(122,174,222,0.5)',
              }}
            >
              ✦
            </span>
            <div
              style={{
                flex: 1,
                height: '1px',
                background: 'rgba(122,174,222,0.25)',
              }}
            />
          </div>
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              fontStyle: 'italic',
              color: 'var(--color-text-muted)',
              opacity: 0.7,
            }}
          >
            {locale === 'es'
              ? 'Con todo nuestro amor y gratitud — La Familia Castillo'
              : 'With all our love and gratitude — The Castillo Family'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
