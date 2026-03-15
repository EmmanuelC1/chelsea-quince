'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useLang } from '@/context/LangContext';
import { memories, Memory } from '@/data/memories';

function sr(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

const restingTransforms = memories.map((_, i) => ({
  rotation: (sr(i * 3) - 0.5) * 26,
  offsetX: (sr(i * 7) - 0.5) * 22,
  offsetY: (sr(i * 11) - 0.5) * 10,
}));

// ─── Polaroid ─────────────────────────────────────────────────────────────────

interface PolaroidProps {
  memory: Memory;
  locale: 'es' | 'en';
  size?: 'featured' | 'stack';
  rotation?: number;
  flippable?: boolean;
}

function Polaroid({
  memory,
  locale,
  size = 'featured',
  rotation = 0,
  flippable = false,
}: PolaroidProps) {
  const [flipped, setFlipped] = useState(false);
  const isFeatured = size === 'featured';
  const w = isFeatured
    ? 'clamp(200px, 56vw, 270px)'
    : 'clamp(110px, 26vw, 138px)';

  // Reset flip state when memory changes
  useEffect(() => {
    setFlipped(false);
  }, [memory.id]);

  return (
    <div
      onClick={() => flippable && setFlipped(f => !f)}
      style={{
        width: w,
        cursor: flippable ? 'pointer' : 'default',
        perspective: '900px',
        flexShrink: 0,
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
    >
      <div
        style={{
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.55s cubic-bezier(0.34,1.4,0.64,1)',
          transform: `rotate(${rotation}deg) ${flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}`,
        }}
      >
        {/* ── FRONT ── */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            background: '#FFFEF5',
            // Taller bottom padding on featured to fit caption
            padding: isFeatured ? '10px 10px 12px' : '5px 5px 8px',
            boxShadow: isFeatured
              ? '0 14px 44px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.08)'
              : '0 3px 12px rgba(0,0,0,0.15)',
            borderRadius: '2px',
          }}
        >
          {/* Photo */}
          <div
            style={{
              width: '100%',
              aspectRatio: '1/1',
              background: memory.image
                ? `url(${memory.image}) center/cover`
                : `linear-gradient(135deg, ${memory.placeholderColor}, ${memory.placeholderColor}bb)`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            {!memory.image && (
              <>
                <span
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: isFeatured ? 'clamp(2rem,8vw,3rem)' : '1.1rem',
                    fontWeight: 300,
                    color: 'rgba(26,26,46,0.35)',
                    lineHeight: 1,
                  }}
                >
                  {String(memory.id).padStart(2, '0')}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: isFeatured ? '0.6rem' : '0.4rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'rgba(26,26,46,0.28)',
                    marginTop: '0.2rem',
                  }}
                >
                  {memory.year}
                </span>
              </>
            )}
          </div>

          {/* Caption inside polaroid — only on featured */}
          {isFeatured && (
            <div
              style={{
                padding: '8px 6px 4px',
                textAlign: 'center',
                minHeight: '52px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '3px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(0.78rem, 2.2vw, 0.92rem)',
                  fontStyle: 'italic',
                  color: 'rgba(26,26,46,0.65)',
                  lineHeight: 1.45,
                  margin: 0,
                }}
              >
                {memory.caption[locale]}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.5rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(122,174,222,0.8)',
                  margin: 0,
                }}
              >
                {locale === 'es'
                  ? `${memory.age} años · ${memory.year}`
                  : `Age ${memory.age} · ${memory.year}`}
              </p>
            </div>
          )}

          {/* Stack label — small age only */}
          {!isFeatured && (
            <div
              style={{
                marginTop: '4px',
                textAlign: 'center',
                fontFamily: 'var(--font-cormorant)',
                fontSize: '0.48rem',
                fontStyle: 'italic',
                color: 'rgba(26,26,46,0.35)',
              }}
            >
              {locale === 'es' ? `${memory.age} años` : `Age ${memory.age}`}
            </div>
          )}
        </div>

        {/* ── BACK — featured only ── */}
        {flippable && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              background: '#FFFEF5',
              padding: '20px 18px',
              boxShadow: '0 14px 44px rgba(0,0,0,0.18)',
              borderRadius: '2px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.65rem',
            }}
          >
            <div
              style={{
                width: '28px',
                height: '1px',
                background: 'rgba(191,215,246,0.7)',
              }}
            />
            <p
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(0.95rem,3vw,1.1rem)',
                fontStyle: 'italic',
                color: 'rgba(26,26,46,0.72)',
                textAlign: 'center',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {memory.caption[locale]}
            </p>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.58rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(26,26,46,0.3)',
              }}
            >
              {memory.year}
            </div>
            <div
              style={{
                width: '28px',
                height: '1px',
                background: 'rgba(191,215,246,0.7)',
              }}
            />
            {/* Tap hint on back */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.48rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(122,174,222,0.5)',
                marginTop: '0.25rem',
              }}
            >
              {locale === 'es' ? 'Toca para voltear' : 'Tap to flip back'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Stack ────────────────────────────────────────────────────────────────────

function PolaroidStack({
  count,
  locale,
}: {
  count: number;
  locale: 'es' | 'en';
}) {
  if (count === 0) return null;

  return (
    <div
      style={{
        position: 'relative',
        width: '150px',
        height: '175px',
        flexShrink: 0,
      }}
    >
      {memories.slice(0, count).map((memory, i) => {
        const { rotation, offsetX, offsetY } = restingTransforms[i];
        const isTop = i === count - 1;

        return (
          <div
            key={memory.id}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              zIndex: i + 1,
              transform: `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px)) rotate(${rotation}deg)`,
              animation: isTop
                ? 'landOnStack 0.5s cubic-bezier(0.34,1.2,0.64,1) forwards'
                : 'none',
              transformOrigin: 'center bottom',
            }}
          >
            {/* Stack cards are NOT flippable — interaction is on the featured card */}
            <Polaroid
              memory={memory}
              locale={locale}
              size="stack"
              flippable={false}
            />
          </div>
        );
      })}
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function MemoryTimeline() {
  const { t, locale } = useLang();
  const triggerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [stackCount, setStackCount] = useState(0);
  const [phase, setPhase] = useState<'featured' | 'transitioning'>('featured');
  const [isAllStacked, setIsAllStacked] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const prevIndexRef = useRef(0);

  const handleProgress = useCallback((progress: number) => {
    const total = memories.length;

    if (progress >= 0.97) {
      setStackCount(total);
      setActiveIndex(total - 1);
      setIsAllStacked(true);
      setPhase('featured');
      return;
    }

    setIsAllStacked(false);
    const scaled = progress * total;
    const index = Math.min(Math.floor(scaled), total - 1);
    const withinCard = scaled - index;

    if (index !== prevIndexRef.current) {
      setStackCount(index);
      prevIndexRef.current = index;
    }

    setActiveIndex(index);
    setPhase(withinCard > 0.78 ? 'transitioning' : 'featured');
  }, []);

  useEffect(() => {
    let st: any = null;

    async function init() {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      await new Promise<void>(r => requestAnimationFrame(() => r()));
      if (!triggerRef.current) return;
      setIsReady(true);

      st = ScrollTrigger.create({
        trigger: triggerRef.current,
        start: 'top top',
        end: `+=${memories.length * 120}vh`,
        pin: true,
        pinSpacing: true,
        onUpdate: self => handleProgress(self.progress),
      });
    }

    init();
    return () => st?.kill();
  }, [handleProgress]);

  const currentMemory = memories[activeIndex];

  return (
    <section
      id="story"
      style={{
        background: 'linear-gradient(180deg, var(--color-bg) 0%, #eef2f7 100%)',
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: 'center', padding: '5rem 1.5rem 1rem' }}>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.65rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'var(--color-primary-deep)',
            marginBottom: '0.75rem',
          }}
        >
          {t.story.subheading}
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2.2rem, 7vw, 4rem)',
            fontWeight: 300,
            color: 'var(--color-text)',
            lineHeight: 1.15,
          }}
        >
          {t.story.heading}
        </h2>
      </div>

      {/* Pinned viewport */}
      <div
        ref={triggerRef}
        style={{
          height: '100vh',
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Progress dots */}
        {isReady && (
          <div
            style={{
              position: 'absolute',
              right: '1.25rem',
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              zIndex: 20,
            }}
          >
            {memories.map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === activeIndex && !isAllStacked ? '6px' : '4px',
                  height: i === activeIndex && !isAllStacked ? '6px' : '4px',
                  borderRadius: '50%',
                  background:
                    i < stackCount || isAllStacked
                      ? 'var(--color-primary-deep)'
                      : i === activeIndex
                        ? '#7AAEDE'
                        : 'rgba(122,174,222,0.25)',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>
        )}

        {/* Memory counter */}
        {isReady && (
          <div
            style={{
              position: 'absolute',
              left: '1.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 20,
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.8rem,5vw,3rem)',
                fontWeight: 300,
                color: 'rgba(122,174,222,0.5)',
                lineHeight: 1,
                transition: 'all 0.4s ease',
                marginBottom: 6,
              }}
            >
              {String(activeIndex + 1).padStart(2, '0')}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.5rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(26,26,46,0.3)',
              }}
            >
              / 15
            </div>
          </div>
        )}

        {/* Content */}
        {isReady && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.75rem',
              padding: '0 3.5rem',
              width: '100%',
              maxWidth: '420px',
            }}
          >
            {/* Featured card */}
            {!isAllStacked && (
              <div
                key={`featured-${activeIndex}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.65rem',
                  animation:
                    phase === 'transitioning'
                      ? 'sendToStack 0.4s var(--ease-smooth) forwards'
                      : 'featuredIn 0.5s var(--ease-smooth) forwards',
                }}
              >
                <Polaroid
                  memory={currentMemory}
                  locale={locale}
                  size="featured"
                  rotation={((activeIndex % 5) - 2) * 1.2}
                  flippable
                />

                {/* Tap hint below featured card */}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.52rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'rgba(122,174,222,0.55)',
                    textAlign: 'center',
                    marginTop: '0.75rem',
                  }}
                >
                  {t.story.tapHint}
                </p>
              </div>
            )}

            {/* All stacked state */}
            {isAllStacked && (
              <div
                style={{
                  textAlign: 'center',
                  animation: 'featuredIn 0.7s var(--ease-smooth) forwards',
                  marginBottom: '0.5rem',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(1.8rem, 6vw, 2.8rem)',
                    fontWeight: 300,
                    color: 'var(--color-text)',
                    lineHeight: 1.2,
                    marginBottom: '0.5rem',
                  }}
                >
                  {t.story.stackHeading}
                </h3>
              </div>
            )}

            {/* Growing stack */}
            {stackCount > 0 && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <PolaroidStack
                  count={isAllStacked ? memories.length : stackCount}
                  locale={locale}
                />
              </div>
            )}
          </div>
        )}

        {/* Bottom fade */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '80px',
            background: 'linear-gradient(0deg, #eef2f7 0%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>
    </section>
  );
}
