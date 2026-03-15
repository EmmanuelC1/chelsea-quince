'use client';

import { useState } from 'react';
import { Memory } from '@/data/memories';

interface PolaroidCardProps {
  memory: Memory;
  locale: 'es' | 'en';
  style?: React.CSSProperties;
  onClick?: () => void;
  isStack?: boolean;
  stackIndex?: number;
}

export default function PolaroidCard({
  memory,
  locale,
  style,
  onClick,
  isStack = false,
  stackIndex = 0,
}: PolaroidCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (isStack) {
      setIsFlipped(prev => !prev);
    }
    onClick?.();
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: isStack
          ? 'clamp(140px, 35vw, 180px)'
          : 'clamp(200px, 55vw, 280px)',
        cursor: isStack ? 'pointer' : 'default',
        perspective: '1000px',
        ...style,
      }}
    >
      {/* Flip container */}
      <div
        style={{
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* FRONT */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            background: '#FFFEF5',
            padding: '10px 10px 36px 10px',
            boxShadow: isStack
              ? `0 ${4 + stackIndex * 2}px ${12 + stackIndex * 4}px rgba(0,0,0,${0.12 + stackIndex * 0.03})`
              : '0 8px 32px rgba(0,0,0,0.18)',
            borderRadius: '2px',
          }}
        >
          {/* Photo area */}
          <div
            style={{
              width: '100%',
              aspectRatio: '1 / 1',
              background: memory.image
                ? `url(${memory.image}) center/cover`
                : `linear-gradient(135deg, ${memory.placeholderColor} 0%, ${memory.placeholderColor}cc 100%)`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.25rem',
              overflow: 'hidden',
            }}
          >
            {!memory.image && (
              <>
                <span
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: isStack ? '1.5rem' : '2.2rem',
                    fontWeight: 300,
                    color: 'rgba(26,26,46,0.4)',
                    lineHeight: 1,
                  }}
                >
                  {String(memory.id).padStart(2, '0')}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: isStack ? '0.55rem' : '0.65rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'rgba(26,26,46,0.3)',
                  }}
                >
                  {memory.year}
                </span>
              </>
            )}
          </div>

          {/* Polaroid label */}
          <div
            style={{
              marginTop: '6px',
              textAlign: 'center',
              fontFamily: 'var(--font-cormorant)',
              fontSize: isStack ? '0.7rem' : '0.85rem',
              fontStyle: 'italic',
              color: 'rgba(26,26,46,0.45)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {locale === 'es' ? `${memory.age} años` : `Age ${memory.age}`}
          </div>
        </div>

        {/* BACK */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: '#FFFEF5',
            padding: '16px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
            borderRadius: '2px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
          }}
        >
          <div
            style={{
              width: '24px',
              height: '1px',
              background: 'rgba(191,215,246,0.6)',
              marginBottom: '0.5rem',
            }}
          />
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '0.9rem',
              fontStyle: 'italic',
              color: 'rgba(26,26,46,0.7)',
              textAlign: 'center',
              lineHeight: 1.5,
            }}
          >
            {memory.caption[locale]}
          </p>
          <div
            style={{
              marginTop: '0.5rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(26,26,46,0.3)',
            }}
          >
            {memory.year}
          </div>
          <div
            style={{
              width: '24px',
              height: '1px',
              background: 'rgba(191,215,246,0.6)',
              marginTop: '0.25rem',
            }}
          />
        </div>
      </div>
    </div>
  );
}
