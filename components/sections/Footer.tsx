'use client';

export default function Footer() {
  return (
    <footer
      style={{
        background: '#060810',
        padding: '1.25rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.55rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(191,215,246,0.18)',
          margin: 0,
          textAlign: 'center',
        }}
      >
        © 2026 Designed & built by Emmanuel Castillo
      </p>
    </footer>
  );
}
