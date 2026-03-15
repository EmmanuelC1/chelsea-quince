'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  opacitySpeed: number;
  color: string;
}

export default function SparkleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const colors = [
      'rgba(191, 215, 246,', // primary blue
      'rgba(192, 192, 192,', // silver
      'rgba(232, 213, 183,', // warm gold
      'rgba(255, 255, 255,', // white
    ];

    let particles: Particle[] = [];
    let animationId: number;
    let width = 0;
    let height = 0;

    function resize() {
      width = canvas!.width = window.innerWidth;
      height = canvas!.height = window.innerHeight;
    }

    function createParticle(): Particle {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3 - 0.1,
        opacity: Math.random(),
        opacitySpeed: Math.random() * 0.008 + 0.002,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    }

    function init() {
      particles = Array.from({ length: 80 }, createParticle);
    }

    function drawStar(
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      opacity: number,
      color: string,
    ) {
      ctx.save();
      ctx.translate(x, y);

      // Cross shape sparkle
      ctx.beginPath();
      ctx.strokeStyle = `${color}${opacity})`;
      ctx.lineWidth = size * 0.4;
      ctx.lineCap = 'round';

      ctx.moveTo(-size, 0);
      ctx.lineTo(size, 0);
      ctx.stroke();

      ctx.moveTo(0, -size);
      ctx.lineTo(0, size);
      ctx.stroke();

      // Diagonal cross (smaller)
      const d = size * 0.6;
      ctx.lineWidth = size * 0.25;
      ctx.moveTo(-d, -d);
      ctx.lineTo(d, d);
      ctx.stroke();

      ctx.moveTo(d, -d);
      ctx.lineTo(-d, d);
      ctx.stroke();

      ctx.restore();
    }

    function animate() {
      ctx!.clearRect(0, 0, width, height);

      particles.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += p.opacitySpeed;

        // Reverse opacity direction at bounds
        if (p.opacity >= 1 || p.opacity <= 0) {
          p.opacitySpeed *= -1;
        }

        // Reset if drifted off screen
        if (p.x < -10 || p.x > width + 10 || p.y < -10 || p.y > height + 10) {
          particles[i] = createParticle();
          particles[i].x = Math.random() * width;
          particles[i].y = Math.random() * height;
        }

        drawStar(
          ctx!,
          p.x,
          p.y,
          p.size,
          Math.max(0, Math.min(1, p.opacity)),
          p.color,
        );
      });

      animationId = requestAnimationFrame(animate);
    }

    resize();
    init();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="sparkle-canvas" aria-hidden="true" />
  );
}
