import React, { useEffect, useRef } from 'react';

const Particles = () => {
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles (mix of orbs and petals)
    const createParticles = () => {
      particlesRef.current = [];
      const count = Math.min(60, Math.floor(window.innerWidth / 30));
      for (let i = 0; i < count; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 4 + 2, // slightly larger for orbs
          speedX: (Math.random() - 0.5) * 0.8,
          speedY: Math.random() * 1.5 + 0.2, // moving downwards slowly
          opacity: Math.random() * 0.5 + 0.1,
          opacitySpeed: (Math.random() - 0.5) * 0.005,
          hue: Math.random() * 20 + 35, // deeper golds
          type: Math.random() > 0.5 ? 'orb' : 'petal',
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 2,
        });
      }
    };
    createParticles();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += p.opacitySpeed;
        p.rotation += p.rotationSpeed;
        if (p.opacity > 0.7) p.opacitySpeed = -Math.abs(p.opacitySpeed);
        if (p.opacity < 0.1) p.opacitySpeed = Math.abs(p.opacitySpeed);
        if (p.y > canvas.height + 20) { p.y = -20; p.x = Math.random() * canvas.width; } // Reset to top
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;

        ctx.save();
        ctx.globalAlpha = p.opacity;
        
        if (p.type === 'orb') {
          // Draw soft glowing orb
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
          gradient.addColorStop(0, `hsla(${p.hue}, 60%, 45%, 0.8)`);
          gradient.addColorStop(1, `hsla(${p.hue}, 60%, 45%, 0)`);
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Draw a stylized floral petal
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = `hsla(${p.hue}, 50%, 60%, 0.4)`;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(p.size * 2, -p.size * 2, p.size * 4, p.size, 0, p.size * 3);
          ctx.bezierCurveTo(-p.size * 4, p.size, -p.size * 2, -p.size * 2, 0, 0);
          ctx.fill();
        }
        ctx.restore();
      });
      animFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particles-canvas"
      style={{ pointerEvents: 'none', position: 'fixed', zIndex: 1 }}
    />
  );
};

export default Particles;
