'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/context/LangContext';
import Image from 'next/image';

// ─── Shared animation config ─────────────────────────────────────────────────
const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 1.1, ease: EASE, delay },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 1.4, ease: EASE, delay },
});

// ─── Diamond Divider ──────────────────────────────────────────────────────────
function DiamondDivider({ dim = false }: { dim?: boolean }) {
  const opacity = dim ? 0.25 : 0.5;
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
          background: `linear-gradient(to right, transparent, rgba(191,215,246,${opacity}))`,
        }}
      />
      <div
        style={{
          width: 5,
          height: 5,
          background: 'var(--color-primary)',
          transform: 'rotate(45deg)',
          opacity,
        }}
      />
      <div
        style={{
          width: 60,
          height: 1,
          background: `linear-gradient(to left, transparent, rgba(191,215,246,${opacity}))`,
        }}
      />
    </div>
  );
}

// ─── Floating sparkle canvas ──────────────────────────────────────────────────
// Lighter, slower version of HeroSection's SparkleCanvas — fewer particles,
// more drift, feels like embers fading out at the end of the night
function ClosingSparkles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId: number;
    let W = 0;
    let H = 0;

    const COLORS = [
      'rgba(191,215,246,', // light blue
      'rgba(232,213,183,', // warm gold
      'rgba(192,192,192,', // silver
    ];

    type Particle = {
      x: number;
      y: number;
      size: number;
      opacity: number;
      opacityDir: number;
      vx: number;
      vy: number;
      color: string;
      rotation: number;
      rotSpeed: number;
    };

    const particles: Particle[] = [];
    const COUNT = 38;

    function make(): Particle {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        size: 1.2 + Math.random() * 2.2,
        opacity: Math.random() * 0.4,
        opacityDir:
          (Math.random() > 0.5 ? 1 : -1) * (0.002 + Math.random() * 0.004),
        vx: (Math.random() - 0.5) * 0.18,
        vy: -0.08 - Math.random() * 0.18,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.015,
      };
    }

    function resize() {
      W = canvas!.offsetWidth;
      H = canvas!.offsetHeight;
      canvas!.width = W;
      canvas!.height = H;
    }

    function drawCross(
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rotation: number,
      color: string,
      opacity: number,
    ) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.strokeStyle = `${color}${opacity.toFixed(3)})`;
      ctx.lineWidth = size * 0.38;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(-size, 0);
      ctx.lineTo(size, 0);
      ctx.moveTo(0, -size);
      ctx.lineTo(0, size);
      ctx.stroke();
      ctx.restore();
    }

    function tick() {
      ctx!.clearRect(0, 0, W, H);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotSpeed;
        p.opacity += p.opacityDir;
        if (p.opacity <= 0 || p.opacity >= 0.55) p.opacityDir *= -1;
        if (p.y < -20) {
          p.y = H + 10;
          p.x = Math.random() * W;
        }
        if (p.x < -20) p.x = W + 10;
        if (p.x > W + 20) p.x = -10;
        drawCross(ctx!, p.x, p.y, p.size, p.rotation, p.color, p.opacity);
      }
      rafId = requestAnimationFrame(tick);
    }

    resize();
    for (let i = 0; i < COUNT; i++) particles.push(make());
    tick();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: 0.7,
      }}
    />
  );
}

// ─── Portrait placeholder ─────────────────────────────────────────────────────
function PortraitPlaceholder() {
  return (
    <div
      style={{
        position: 'relative',
        width: 'clamp(140px, 28vw, 200px)',
        height: 'clamp(175px, 35vw, 250px)',
        margin: '0 auto',
      }}
    >
      {/* Outer ambient glow ring */}
      <motion.div
        animate={{ opacity: [0.3, 0.55, 0.3], scale: [1, 1.04, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          inset: -18,
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse at center, rgba(191,215,246,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Portrait oval frame */}
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50% / 45%',
          background:
            'linear-gradient(160deg, rgba(122,174,222,0.18) 0%, rgba(26,39,68,0.6) 100%)',
          border: '1px solid rgba(191,215,246,0.25)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Inner shimmer sweep */}
        <motion.div
          animate={{ x: ['-120%', '220%'] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            repeatDelay: 4,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '40%',
            height: '100%',
            background:
              'linear-gradient(105deg, transparent 0%, rgba(191,215,246,0.12) 50%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* CC monogram */}
        {/* <span
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2rem, 6vw, 2.8rem)',
            fontWeight: 300,
            color: 'rgba(191,215,246,0.5)',
            letterSpacing: '0.12em',
            userSelect: 'none',
          }}
        >
          CC
        </span> */}
        <Image
          src="/images/chelsea-closing.JPG"
          alt="Chelsea Castillo"
          fill
          priority
          style={{
            objectFit: 'cover',
            objectPosition: 'top',
          }}
        />
      </div>
    </div>
  );
}

// ─── Signature line with flanking rules ──────────────────────────────────────
function SignatureLine({ text }: { text: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.2rem',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          height: 1,
          width: 'clamp(32px, 8vw, 56px)',
          background:
            'linear-gradient(to right, transparent, rgba(191,215,246,0.35))',
        }}
      />
      <span
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(0.9rem, 2.2vw, 1.05rem)',
          fontStyle: 'italic',
          fontWeight: 300,
          color: 'rgba(191,215,246,0.5)',
          letterSpacing: '0.04em',
          whiteSpace: 'nowrap',
        }}
      >
        {text}
      </span>
      <div
        style={{
          height: 1,
          width: 'clamp(32px, 8vw, 56px)',
          background:
            'linear-gradient(to left, transparent, rgba(191,215,246,0.35))',
        }}
      />
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function ClosingScene() {
  const { t, locale } = useLang();
  const c = t.closing;

  // Split message on \n for multi-line rendering
  const messageLines = c.message.split('\n');

  return (
    <section
      id="closing"
      style={{
        position: 'relative',
        background:
          'linear-gradient(180deg, #080c14 0%, #0a0f1e 40%, #060810 100%)',
        padding: 'clamp(6rem, 12vh, 10rem) 1.5rem clamp(4rem, 8vh, 6rem)',
        overflow: 'hidden',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Sparkles */}
      <ClosingSparkles />

      {/* Deep ambient glow — center */}
      <div
        style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70vw',
          height: '60vh',
          background:
            'radial-gradient(ellipse at center, rgba(122,174,222,0.09) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* Gold undertone glow — bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '50vw',
          height: '35vh',
          background:
            'radial-gradient(ellipse at center, rgba(232,213,183,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Content ── */}
      <div
        key={locale}
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: 560,
          margin: '0 auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(1.8rem, 4vh, 2.8rem)',
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
            color: 'rgba(191,215,246,0.45)',
            margin: 0,
          }}
        >
          {c.label}
        </motion.p>

        {/* Portrait */}
        <motion.div {...fadeIn(0.15)} style={{ width: '100%' }}>
          <PortraitPlaceholder />
        </motion.div>

        {/* Heading — Chelsea Castillo */}
        <motion.div {...fadeUp(0.25)}>
          <h2
            className="shimmer-text animate-fade-up delay-600"
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: 'clamp(2.6rem, 8vw, 4.2rem)',
              fontWeight: 400,
              color: '#fafafa',
              letterSpacing: '0.02em',
              margin: 0,
              // lineHeight: 1.05,
            }}
          >
            {c.heading}
          </h2>
        </motion.div>

        {/* Animated underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
          style={{
            width: 80,
            height: 1,
            background:
              'linear-gradient(to right, transparent, var(--color-primary), transparent)',
            transformOrigin: 'center',
            marginTop: '-0.5rem',
          }}
        />

        {/* Subheading */}
        <motion.p
          {...fadeUp(0.4)}
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(1.1rem, 3vw, 1.45rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'rgba(191,215,246,0.6)',
            letterSpacing: '0.06em',
            margin: 0,
          }}
        >
          ✦ {c.subheading} ✦
        </motion.p>

        {/* Diamond divider */}
        <motion.div {...fadeIn(0.45)} style={{ width: '100%' }}>
          <DiamondDivider />
        </motion.div>

        {/* Message lines */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.35rem',
          }}
        >
          {messageLines.map((line, i) => (
            <motion.p
              key={i}
              {...fadeUp(0.5 + i * 0.1)}
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.05rem, 2.8vw, 1.3rem)',
                fontWeight: 300,
                color: 'rgba(250,250,250,0.6)',
                letterSpacing: '0.02em',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Signature */}
        <motion.div
          {...fadeUp(0.65)}
          style={{ width: '100%', paddingTop: '0.5rem' }}
        >
          <SignatureLine text={c.signature} />
        </motion.div>

        {/* Year mark — subtle footer flourish */}
        <motion.div {...fadeIn(0.8)}>
          <DiamondDivider dim />
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.62rem',
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              color: 'rgba(191,215,246,0.2)',
              margin: '1.2rem 0 0',
            }}
          >
            {c.year}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
