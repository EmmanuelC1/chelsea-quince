'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import SparkleCanvas from '@/components/ui/SparkleCanvas';
import LangToggle from '@/components/ui/LangToggle';
import { useLang } from '@/context/LangContext';

export default function HeroSection() {
  const { t } = useLang();
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Subtle parallax — image drifts up slightly on scroll (ken-burns feel)
  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const img = imageRef.current;
      const content = contentRef.current;

      if (img) {
        // Shift objectPosition via a CSS custom property
        img.style.setProperty('--parallax-y', `${scrollY * 0.18}px`);
      }
      if (content) {
        content.style.opacity = `${1 - scrollY * 0.0025}`;
        content.style.transform = `translateY(${scrollY * 0.08}px)`;
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{ background: '#0a0f1a' }}
    >
      {/* ── Full-bleed portrait ── */}
      <div
        ref={imageRef}
        className="hero-image-container"
        style={{
          position: 'absolute',
          inset: 0,
          // translateY driven by scroll via inline style
          transform: 'translateY(var(--parallax-y, 0px))',
          // Slight scale so parallax doesn't reveal edges
          scale: '1.08',
        }}
      >
        <Image
          src="/images/chelsea-hero.jpg"
          alt="Chelsea Castillo"
          fill
          priority
          style={{
            objectFit: 'cover',
            objectPosition: 'center 45%',
          }}
        />
      </div>

      {/* ── Overlay layers ── */}

      {/* 1. Soft vignette all around — frames the photo */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(
              ellipse at center,
              transparent 30%,
              rgba(8,12,24,0.55) 100%
            )
          `,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* 2. Strong gradient from bottom — text readability zone */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(
              to top,
              rgba(6,9,18,0.97) 0%,
              rgba(6,9,18,0.82) 22%,
              rgba(6,9,18,0.35) 45%,
              transparent 68%
            )
          `,
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* 3. Very subtle top darkening so LangToggle is legible */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '140px',
          background:
            'linear-gradient(to bottom, rgba(6,9,18,0.45) 0%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 3,
        }}
      />

      {/* ── Sparkles — above image, below text ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 4,
          pointerEvents: 'none',
        }}
      >
        <SparkleCanvas />
      </div>

      {/* ── Language toggle ── */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <LangToggle />
      </div>

      {/* ── Text content — bottom zone ── */}
      <div
        ref={contentRef}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 6,
          padding: 'clamp(2.5rem, 6vw, 4rem) clamp(1.5rem, 6vw, 5rem)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '0.6rem',
          maxWidth: '780px',
        }}
      >
        {/* Celebration tagline */}
        <p
          className="animate-fade-up delay-300"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.6rem, 1.6vw, 0.72rem)',
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: 'rgba(191,215,246,0.65)',
            margin: 0,
          }}
        >
          {t.hero.tagline}
        </p>

        {/* Her name — the star */}
        <h1
          className="shimmer-text animate-fade-up delay-600"
          style={{
            fontFamily: 'var(--font-script)',
            fontSize: 'clamp(3.8rem, 13vw, 8.5rem)',
            fontWeight: 400,
            // lineHeight: 0.95,
            letterSpacing: '0.02em',
            margin: '0.1rem 0 0.25rem',
            color: '#f0f4fa',
            textShadow: '0 2px 40px rgba(0,0,0,0.5)',
          }}
        >
          {t.hero.name}
        </h1>

        {/* Thin rule */}
        <div
          className="animate-fade-in delay-900"
          style={{
            width: 'clamp(40px, 8vw, 72px)',
            height: '1px',
            background:
              'linear-gradient(90deg, rgba(191,215,246,0.7), transparent)',
            margin: '0.15rem 0',
          }}
        />

        {/* Date */}
        <p
          className="animate-fade-up delay-900"
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(1rem, 2.8vw, 1.35rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'rgba(210,220,235,0.92)',
            margin: 0,
            letterSpacing: '0.04em',
          }}
        >
          {t.hero.date}
        </p>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="animate-scroll-bounce delay-1500"
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: 'clamp(1.5rem, 4vw, 3.5rem)',
          zIndex: 7,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
        }}
      >
        <div
          style={{
            width: '1px',
            height: '40px',
            background:
              'linear-gradient(180deg, transparent, rgba(191,215,246,0.45))',
          }}
        />
        <div
          style={{
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: 'rgba(191,215,246,0.45)',
          }}
        />
      </div>

      {/* ── Bottom fade to MemoryTimeline (light bg) ── */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '220px',
          background:
            'linear-gradient(to top, var(--color-bg) 0%, var(--color-bg) 8%, rgba(250,250,250,0.0) 55%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 5,
        }}
      />
    </section>
  );
}

// 'use client';

// import { useEffect, useRef } from 'react';
// import SparkleCanvas from '@/components/ui/SparkleCanvas';
// import LangToggle from '@/components/ui/LangToggle';
// import { useLang } from '@/context/LangContext';
// import Image from 'next/image';

// export default function HeroSection() {
//   const { t } = useLang();
//   const sectionRef = useRef<HTMLElement>(null);

//   // Subtle parallax on scroll
//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     function handleScroll() {
//       const scrollY = window.scrollY;
//       const portrait = section!.querySelector<HTMLElement>('.hero-portrait');
//       const content = section!.querySelector<HTMLElement>('.hero-content');

//       if (portrait) {
//         portrait.style.transform = `translateY(${scrollY * 0.25}px) scale(1.05)`;
//       }
//       if (content) {
//         content.style.transform = `translateY(${scrollY * 0.1}px)`;
//         content.style.opacity = `${1 - scrollY * 0.002}`;
//       }
//     }

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const poemLines = t.hero.poem.split('\n');

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
//       style={{
//         background:
//           'linear-gradient(160deg, #0f1624 0%, #1a2744 50%, #0f1624 100%)',
//       }}
//     >
//       {/* Sparkle particles */}
//       <SparkleCanvas />

//       {/* Language toggle */}
//       <LangToggle />

//       {/* Portrait placeholder */}
//       <div
//         className="hero-portrait absolute inset-0 flex items-center justify-center"
//         style={{ transformOrigin: 'center center' }}
//       >
//         {/* Outer glow ring */}
//         <div
//           className="animate-float"
//           style={{
//             position: 'absolute',
//             width: 'clamp(280px, 60vw, 520px)',
//             height: 'clamp(380px, 80vw, 700px)',
//             borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
//             background:
//               'radial-gradient(ellipse, rgba(191,215,246,0.15) 0%, transparent 70%)',
//             filter: 'blur(20px)',
//           }}
//         />

//         {/* Portrait frame */}
//         <div
//           style={{
//             position: 'relative',
//             width: 'clamp(240px, 55vw, 460px)',
//             height: 'clamp(340px, 75vw, 640px)',
//             borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
//             overflow: 'hidden',
//             border: '1px solid rgba(191,215,246,0.3)',
//             boxShadow:
//               '0 0 60px rgba(191,215,246,0.15), 0 0 120px rgba(191,215,246,0.05)',
//           }}
//         >
//           {/* Placeholder gradient — swap with <Image> when photo is ready */}
//           {/* <div
//             style={{
//               width: '100%',
//               height: '100%',
//               background:
//                 'linear-gradient(180deg, #1e3a5f 0%, #2d5a8e 40%, #1a2744 100%)',
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               justifyContent: 'center',
//               gap: '0.75rem',
//             }}
//           > */}
//           {/* Monogram CC */}
//           {/* <div
//               style={{
//                 fontFamily: 'var(--font-cormorant)',
//                 fontSize: 'clamp(4rem, 12vw, 8rem)',
//                 fontWeight: 300,
//                 color: 'rgba(191,215,246,0.6)',
//                 lineHeight: 1,
//                 letterSpacing: '-0.05em',
//               }}
//             >
//               CC
//             </div>
//             <div
//               style={{
//                 fontFamily: 'var(--font-cormorant)',
//                 fontSize: 'clamp(0.7rem, 2vw, 0.85rem)',
//                 color: 'rgba(191,215,246,0.35)',
//                 letterSpacing: '0.3em',
//                 textTransform: 'uppercase',
//               }}
//             >
//               Portrait
//             </div>
//           </div> */}
//           <Image
//             src="/images/chelsea-hero.JPEG"
//             alt="Chelsea Castillo"
//             fill
//             priority
//             style={{ objectFit: 'cover', objectPosition: 'center top' }}
//           />

//           {/* Inner vignette overlay */}
//           <div
//             style={{
//               position: 'absolute',
//               inset: 0,
//               background:
//                 'linear-gradient(0deg, rgba(15,22,36,0.5) 0%, transparent 40%, transparent 70%, rgba(15,22,36,0.2) 100%)',
//             }}
//           />
//         </div>
//       </div>

//       {/* Hero content */}
//       <div
//         className="hero-content relative z-10 flex flex-col items-center text-center px-6"
//         style={{ paddingTop: 'clamp(400px, 85vw, 680px)' }}
//       >
//         {/* Tagline */}
//         <p
//           className="animate-fade-up delay-300"
//           style={{
//             fontFamily: 'var(--font-body)',
//             fontSize: 'clamp(0.65rem, 1.8vw, 0.75rem)',
//             letterSpacing: '0.35em',
//             textTransform: 'uppercase',
//             color: 'rgba(191,215,246,0.7)',
//             marginBottom: '0.75rem',
//           }}
//         >
//           {t.hero.tagline}
//         </p>

//         {/* Name */}
//         <h1
//           className="shimmer-text animate-fade-up delay-600"
//           style={{
//             fontFamily: 'var(--font-cormorant)',
//             fontSize: 'clamp(3rem, 12vw, 7rem)',
//             fontWeight: 300,
//             lineHeight: 1.05,
//             letterSpacing: '-0.02em',
//             marginBottom: '0.5rem',
//           }}
//         >
//           {t.hero.name}
//         </h1>

//         {/* Date */}
//         <p
//           className="animate-fade-up delay-900"
//           style={{
//             fontFamily: 'var(--font-cormorant)',
//             fontSize: 'clamp(1rem, 3vw, 1.4rem)',
//             fontWeight: 400,
//             fontStyle: 'italic',
//             color: 'rgba(192,192,192,0.8)',
//             marginBottom: '2.5rem',
//           }}
//         >
//           {t.hero.date}
//         </p>

//         {/* Divider */}
//         <div
//           className="animate-fade-in delay-1200"
//           style={{
//             width: 'clamp(40px, 8vw, 60px)',
//             height: '1px',
//             background:
//               'linear-gradient(90deg, transparent, rgba(191,215,246,0.6), transparent)',
//             marginBottom: '2rem',
//           }}
//         />

//         {/* Poem */}
//         <div
//           className="animate-fade-up delay-1200"
//           style={{ maxWidth: '420px', marginBottom: '3rem' }}
//         >
//           {poemLines.map((line, i) => (
//             <p
//               key={i}
//               style={{
//                 fontFamily: 'var(--font-cormorant)',
//                 fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
//                 fontWeight: 400,
//                 fontStyle: 'italic',
//                 color: 'rgba(255,255,255,0.65)',
//                 lineHeight: 1.7,
//               }}
//             >
//               {line}
//             </p>
//           ))}
//         </div>

//         {/* CTA Button */}
//         <button
//           className="animate-fade-up delay-1500"
//           onClick={() => {
//             document
//               .getElementById('story')
//               ?.scrollIntoView({ behavior: 'smooth' });
//           }}
//           style={{
//             fontFamily: 'var(--font-body)',
//             fontSize: '0.7rem',
//             letterSpacing: '0.2em',
//             textTransform: 'uppercase',
//             color: 'rgba(191,215,246,0.9)',
//             background: 'transparent',
//             border: '1px solid rgba(191,215,246,0.35)',
//             borderRadius: '100px',
//             padding: '0.85rem 2.5rem',
//             cursor: 'pointer',
//             transition: 'all 0.3s ease',
//             backdropFilter: 'blur(8px)',
//           }}
//           onMouseEnter={e => {
//             (e.target as HTMLButtonElement).style.background =
//               'rgba(191,215,246,0.1)';
//             (e.target as HTMLButtonElement).style.borderColor =
//               'rgba(191,215,246,0.6)';
//           }}
//           onMouseLeave={e => {
//             (e.target as HTMLButtonElement).style.background = 'transparent';
//             (e.target as HTMLButtonElement).style.borderColor =
//               'rgba(191,215,246,0.35)';
//           }}
//         >
//           {t.hero.cta}
//         </button>

//         {/* Scroll indicator */}
//         <div
//           className="animate-scroll-bounce delay-1800"
//           style={{
//             position: 'absolute',
//             bottom: '2rem',
//             left: '50%',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             gap: '0.4rem',
//           }}
//         >
//           <div
//             style={{
//               width: '1px',
//               height: '40px',
//               background:
//                 'linear-gradient(180deg, transparent, rgba(191,215,246,0.5))',
//             }}
//           />
//           <div
//             style={{
//               width: '4px',
//               height: '4px',
//               borderRadius: '50%',
//               background: 'rgba(191,215,246,0.5)',
//             }}
//           />
//         </div>
//       </div>

//       {/* Bottom fade to next section */}
//       <div
//         style={{
//           position: 'absolute',
//           bottom: 0,
//           left: 0,
//           right: 0,
//           height: '200px',
//           background:
//             'linear-gradient(0deg, var(--color-bg) 0%, transparent 100%)',
//           pointerEvents: 'none',
//         }}
//       />
//     </section>
//   );
// }
