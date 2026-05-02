'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/context/LangContext';
import { honorChambelan, courtCouples, CourtMember } from '@/data/court';

// ─── Helpers ──────────────────────────────────────────────────────────────────

function DiamondDivider() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
        justifyContent: 'center',
        margin: '0.25rem 0',
      }}
    >
      <div
        style={{
          height: '1px',
          width: '32px',
          background:
            'linear-gradient(90deg, transparent, rgba(191,215,246,0.4))',
        }}
      />
      <div
        style={{
          width: '5px',
          height: '5px',
          background: 'rgba(191,215,246,0.6)',
          transform: 'rotate(45deg)',
          flexShrink: 0,
        }}
      />
      <div
        style={{
          height: '1px',
          width: '32px',
          background:
            'linear-gradient(90deg, rgba(191,215,246,0.4), transparent)',
        }}
      />
    </div>
  );
}

function MemberAvatar({
  member,
  size = 72,
}: {
  member: CourtMember;
  size?: number;
}) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle at 35% 35%, ${member.placeholderColor}, ${member.placeholderColor}88)`,
        border: '1.5px solid rgba(191,215,246,0.45)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        boxShadow: '0 4px 20px rgba(0,0,0,0.35)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {member.image ? (
        <Image
          src={member.image}
          alt={`${member.firstName} ${member.lastName}`}
          fill
          sizes={`${size}px`}
          style={{ objectFit: 'cover', objectPosition: 'center 55%' }}
        />
      ) : (
        <span
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: size * 0.42,
            fontWeight: 400,
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          {member.firstName.charAt(0).toUpperCase()}
        </span>
      )}
    </div>
  );
}

function RoleLabel({ role, t }: { role: CourtMember['role']; t: any }) {
  const label =
    role === 'honor'
      ? t.court.honorChambelan
      : role === 'dama'
        ? t.court.dama
        : t.court.chambelan;
  return (
    <span
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.5rem',
        letterSpacing: '0.28em',
        textTransform: 'uppercase',
        color: 'rgba(191,215,246,0.55)',
      }}
    >
      {label}
    </span>
  );
}

// ─── Shimmer card wrapper ─────────────────────────────────────────────────────

function ShimmerCard({
  children,
  onClick,
  style,
  liftAmount = 4,
}: {
  children: React.ReactNode;
  onClick: () => void;
  style?: React.CSSProperties;
  liftAmount?: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setTimeout(() => setHovered(false), 400)}
      style={{
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transform: hovered
          ? `translateY(-${liftAmount}px) scale(1.015)`
          : 'translateY(0) scale(1)',
        transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1)',
        ...style,
      }}
    >
      {/* Shimmer sweep */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(105deg, transparent 30%, rgba(191,215,246,0.13) 50%, transparent 70%)',
          transform: hovered ? 'translateX(100%)' : 'translateX(-100%)',
          transition: hovered ? 'transform 0.55s ease' : 'none',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />
      {children}
    </div>
  );
}

// ─── Honor card ───────────────────────────────────────────────────────────────

function HonorCard({
  member,
  onTap,
  t,
}: {
  member: CourtMember;
  onTap: (m: CourtMember) => void;
  t: any;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ width: '100%', maxWidth: '320px' }}
    >
      <ShimmerCard
        onClick={() => onTap(member)}
        style={{
          background: 'rgba(255,255,255,0.06)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(191,215,246,0.22)',
          borderRadius: '16px',
          padding: '2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.85rem',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: '1.1rem',
            color: 'rgba(191,215,246,0.5)',
            marginBottom: '-0.4rem',
          }}
        >
          ✦
        </div>
        <MemberAvatar member={member} size={88} />
        <div style={{ textAlign: 'center' }}>
          <RoleLabel role={member.role} t={t} />
          <h3
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1.6rem, 5vw, 2rem)',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.92)',
              lineHeight: 1.2,
              marginTop: '0.3rem',
            }}
          >
            {member.firstName}
            {member.lastName && (
              <span
                style={{ display: 'block', fontSize: '0.75em', opacity: 0.7 }}
              >
                {member.lastName}
              </span>
            )}
          </h3>
        </div>
        <DiamondDivider />
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.52rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(191,215,246,0.35)',
          }}
        >
          {t.court.dedicationLabel}
        </p>
      </ShimmerCard>
    </motion.div>
  );
}

// ─── Couple pair ──────────────────────────────────────────────────────────────

function CouplePair({
  chambelan,
  dama,
  index,
  onTap,
  t,
}: {
  chambelan: CourtMember;
  dama: CourtMember;
  index: number;
  onTap: (m: CourtMember) => void;
  t: any;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.85,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{
        display: 'flex',
        gap: '0.75rem',
        width: '100%',
        position: 'relative',
      }}
    >
      {[chambelan, dama].map(member => (
        <ShimmerCard
          key={member.id}
          onClick={() => onTap(member)}
          liftAmount={3}
          style={{
            flex: 1,
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(191,215,246,0.13)',
            borderRadius: '12px',
            padding: '1.25rem 0.75rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.6rem',
          }}
        >
          <MemberAvatar member={member} size={56} />
          <div style={{ textAlign: 'center' }}>
            <RoleLabel role={member.role} t={t} />
            <h4
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.1rem, 3.5vw, 1.35rem)',
                fontWeight: 400,
                color: 'rgba(255,255,255,0.88)',
                lineHeight: 1.2,
                marginTop: '0.25rem',
              }}
            >
              {member.firstName}
              {member.lastName && (
                <span
                  style={{ display: 'block', fontSize: '0.78em', opacity: 0.6 }}
                >
                  {member.lastName}
                </span>
              )}
            </h4>
          </div>
        </ShimmerCard>
      ))}

      {/* Couple connector dot */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '22px',
          height: '22px',
          borderRadius: '50%',
          background: 'rgba(10,15,30,0.95)',
          border: '1px solid rgba(191,215,246,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 3,
          pointerEvents: 'none',
        }}
      >
        <span style={{ fontSize: '0.42rem', color: 'rgba(191,215,246,0.5)' }}>
          ✦
        </span>
      </div>
    </motion.div>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────

function MemberModal({
  member,
  onClose,
  t,
  locale,
}: {
  member: CourtMember;
  onClose: () => void;
  t: any;
  locale: 'es' | 'en';
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handler);
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [onClose]);

  const roleLabel =
    member.role === 'honor'
      ? t.court.honorChambelan
      : member.role === 'dama'
        ? t.court.dama
        : t.court.chambelan;

  return (
    <>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(8,12,24,0.88)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          zIndex: 100,
        }}
      />

      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 101,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          pointerEvents: 'none',
        }}
      >
        <motion.div
          key="card"
          initial={{ opacity: 0, scale: 0.82, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{
            type: 'spring',
            stiffness: 240,
            damping: 22,
            mass: 0.8,
          }}
          onClick={e => e.stopPropagation()}
          style={{
            position: 'relative',
            pointerEvents: 'auto',
            width: '100%',
            maxWidth: '340px',
            background:
              'linear-gradient(160deg, rgba(20,30,55,0.98) 0%, rgba(12,18,35,0.98) 100%)',
            border: '1px solid rgba(191,215,246,0.22)',
            borderRadius: '20px',
            padding: '2.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(191,215,246,0.15)',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'rgba(255,255,255,0.45)',
              fontSize: '0.72rem',
            }}
          >
            ✕
          </button>

          <div
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '1.3rem',
              color: 'rgba(191,215,246,0.4)',
            }}
          >
            ✦
          </div>

          {/* Larger avatar in modal */}
          <MemberAvatar member={member} size={100} />

          <div
            style={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.3rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.5rem',
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: 'rgba(191,215,246,0.5)',
              }}
            >
              {roleLabel}
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.9rem, 6vw, 2.3rem)',
                fontWeight: 400,
                color: 'rgba(255,255,255,0.95)',
                lineHeight: 1.15,
              }}
            >
              {member.firstName}
              {member.lastName && ` ${member.lastName}`}
            </h3>
          </div>

          <DiamondDivider />

          {member.dedication && (
            <p
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '1.05rem',
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.58)',
                textAlign: 'center',
                lineHeight: 1.7,
              }}
            >
              {member.dedication[locale]}
            </p>
          )}

          <DiamondDivider />

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.48rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(191,215,246,0.25)',
            }}
          >
            {t.court.closeLabel} · esc
          </p>
        </motion.div>
      </div>
    </>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function CourtSection() {
  const { t, locale } = useLang();
  const [selectedMember, setSelectedMember] = useState<CourtMember | null>(
    null,
  );

  return (
    <section
      id="court"
      style={{
        background:
          'linear-gradient(160deg, #0a0f1e 0%, #111827 50%, #0d1526 100%)',
        padding: 'clamp(4rem, 10vw, 7rem) 0 clamp(5rem, 12vw, 8rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '400px',
          background:
            'radial-gradient(ellipse, rgba(191,215,246,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '480px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.75rem',
        }}
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ textAlign: 'center', marginBottom: '1.25rem' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.62rem',
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              color: 'rgba(191,215,246,0.5)',
              marginBottom: '0.75rem',
            }}
          >
            {t.court.subheading}
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2.4rem, 7vw, 3.8rem)',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.92)',
              lineHeight: 1.15,
            }}
          >
            {t.court.heading}
          </h2>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.1,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{
              height: '1px',
              width: '80px',
              margin: '1.25rem auto 0',
              background:
                'linear-gradient(90deg, transparent, rgba(191,215,246,0.55), transparent)',
              transformOrigin: 'center',
            }}
          />
        </motion.div>

        {/* Honor chambelán */}
        <HonorCard member={honorChambelan} onTap={setSelectedMember} t={t} />

        {/* Section divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            width: '100%',
            margin: '0.5rem 0',
          }}
        >
          <div
            style={{
              flex: 1,
              height: '1px',
              background: 'rgba(191,215,246,0.1)',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.5rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'rgba(191,215,246,0.22)',
              whiteSpace: 'nowrap',
            }}
          >
            {locale === 'es' ? 'La Corte' : 'The Court'}
          </span>
          <div
            style={{
              flex: 1,
              height: '1px',
              background: 'rgba(191,215,246,0.1)',
            }}
          />
        </motion.div>

        {/* Couples */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            width: '100%',
          }}
        >
          {courtCouples.map((couple, i) => (
            <CouplePair
              key={couple.id}
              chambelan={couple.chambelan}
              dama={couple.dama}
              index={i}
              onTap={setSelectedMember}
              t={t}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence mode="wait">
        {selectedMember && (
          <MemberModal
            key={selectedMember.id}
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
            t={t}
            locale={locale}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
