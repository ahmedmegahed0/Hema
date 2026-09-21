import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../data/weddingData';

const Hero = ({ onEnter }) => {
  const [phase, setPhase] = useState('loading'); // loading | ready
  const [showEnterButton, setShowEnterButton] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowEnterButton(true), 2200);
    return () => clearTimeout(t);
  }, []);

  const handleStart = () => {
    setPhase('ready');
    onEnter();
  };

  const stars = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 1.5,
  }));

  const lanterns = Array.from({ length: 6 }, (_, i) => ({ id: i, delay: i * 0.3 }));

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {phase === 'loading' && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 flex flex-col items-center justify-center z-[9999]"
            style={{ background: '#F2ECD9' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-8">
                <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 128 128">
                  <circle cx="64" cy="64" r="58" fill="none" stroke="url(#lg)" strokeWidth="1" strokeDasharray="8 6" />
                  <defs>
                    <linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#F0D98C" />
                      <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="animate-float text-4xl" style={{ color: '#C9A84C' }}>♦</span>
                </div>
              </div>
              <motion.p
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-xl sm:text-2xl mb-6 tracking-widest font-medium"
                style={{ color: '#8B6914', fontFamily: "'Amiri', serif", letterSpacing: '0.2em' }}
              >
                إبراهيم وليلى
              </motion.p>
              <div className="w-48 h-px mx-auto overflow-hidden" style={{ background: 'rgba(201,168,76,0.2)' }}>
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                  className="h-full"
                  style={{ background: 'linear-gradient(90deg, #C9A84C, #F0D98C)' }}
                />
              </div>

              <AnimatePresence>
                {showEnterButton && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-12"
                  >
                    <button
                      onClick={handleStart}
                      className="btn-gold text-base tracking-widest px-10 py-4 uppercase font-bold"
                      style={{ boxShadow: '0 0 30px rgba(201,168,76,0.3)' }}
                    >
                      يلا نبدأ
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #F2ECD9 0%, #E8DFCA 100%)' }}
      >
        {/* Stars */}
        <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 1 }}>
          {stars.map(s => (
            <motion.div
              key={s.id}
              className="absolute rounded-full"
              style={{
                left: `${s.x}%`, top: `${s.y}%`,
                width: `${s.size}px`, height: `${s.size}px`,
                background: 'rgba(201, 168, 76, 0.6)',
              }}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: s.duration, repeat: Infinity, delay: s.delay }}
            />
          ))}
        </div>

        {/* Arch */}
        <div className="absolute inset-0" style={{ zIndex: 2 }}>
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2"
            style={{ width: '60vw', height: '100vh', background: 'radial-gradient(ellipse at bottom, rgba(201,168,76,0.06) 0%, transparent 70%)' }}
          />
          <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-20"
            viewBox="0 0 800 700" style={{ width: 'min(900px,100vw)', height: 'auto' }} fill="none">
            <path d="M50 700 L50 300 Q50 50 400 50 Q750 50 750 300 L750 700" stroke="url(#ag)" strokeWidth="1.5" fill="none" />
            <path d="M150 700 L150 320 Q150 150 400 150 Q650 150 650 320 L650 700" stroke="url(#ag2)" strokeWidth="0.8" fill="none" opacity="0.5" />
            <circle cx="400" cy="50" r="12" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.6" />
            <circle cx="400" cy="50" r="5" fill="#C9A84C" opacity="0.3" />
            <defs>
              <linearGradient id="ag" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="ag2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F0D98C" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Lanterns */}
        <div className="absolute top-16 inset-x-0 flex justify-around" style={{ zIndex: 3 }}>
          {lanterns.map(l => (
            <motion.div key={l.id}
              animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
              transition={{ duration: 3 + l.id * 0.4, repeat: Infinity, ease: 'easeInOut', delay: l.delay }}
              className="flex flex-col items-center" style={{ opacity: 0.6 }}
            >
              <div className="w-px h-10 sm:h-16" style={{ background: 'rgba(201,168,76,0.3)' }} />
              <div className="w-5 h-7 sm:w-6 sm:h-9 rounded-sm"
                style={{ background: 'radial-gradient(ellipse, rgba(255,200,50,0.8) 0%, rgba(201,168,76,0.3) 100%)', boxShadow: '0 0 15px rgba(255,200,50,0.4)' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Ground glow */}
        <div className="absolute bottom-0 inset-x-0 h-40 pointer-events-none" style={{ background: 'linear-gradient(0deg, rgba(201,168,76,0.04) 0%, transparent 100%)', zIndex: 3 }} />

        {/* Main Content */}
        <AnimatePresence>
          {phase === 'ready' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="relative text-center px-6 sm:px-12 max-w-5xl mx-auto w-full"
              style={{ zIndex: 10 }}
            >
              {/* Wedding Invitation tag */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="flex items-center justify-center gap-4 mb-8"
              >
                <div className="h-px w-16 sm:w-24" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C)' }} />
                <span className="text-sm sm:text-base font-semibold tracking-[0.3em] uppercase" style={{ color: '#8B6914' }}>
                  دعوة فرحنا
                </span>
                <div className="h-px w-16 sm:w-24" style={{ background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
              </motion.div>

              {/* Names */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
                className="mb-8 relative"
              >
                <h1
                  className="leading-tight py-4"
                  style={{
                    fontFamily: "'Amiri', serif",
                    fontSize: 'clamp(4rem, 14vw, 10rem)',
                    fontWeight: 500,
                    background: 'linear-gradient(135deg, #5C4409 0%, #8B6914 25%, #C9A84C 50%, #8B6914 75%, #5C4409 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {weddingData.groom}
                  <span style={{ fontSize: '60%', opacity: 0.6, fontStyle: 'italic' }}> & </span>
                  {weddingData.bride}
                </h1>
                <div className="absolute inset-0 -z-10 blur-3xl opacity-15"
                  style={{ background: 'radial-gradient(ellipse, #C9A84C 0%, transparent 70%)' }}
                />
              </motion.div>

              {/* Date + Venue pill */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="inline-flex flex-wrap items-center justify-center gap-4 px-6 sm:px-8 py-3 mb-8 rounded-full"
                style={{ border: '1px solid rgba(201,168,76,0.4)', background: 'rgba(201,168,76,0.05)' }}
              >
                <span className="text-base font-medium" style={{ color: '#2C2C2C' }}>{weddingData.event.dateFormatted}</span>
                <span style={{ color: 'rgba(201,168,76,0.8)' }}>◆</span>
                <span className="text-base font-medium" style={{ color: '#2C2C2C' }}>{weddingData.event.venue}</span>
              </motion.div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="text-lg sm:text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed"
                style={{ fontFamily: "'Amiri', serif", color: '#1A1A1A', fontStyle: 'italic', fontWeight: 500, fontSize: 'clamp(1.2rem, 3vw, 1.6rem)' }}
              >
                "في ليلة ربنا كتب فيها بداية أجمل حكاية في حياتنا..."
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll hint */}
        <AnimatePresence>
          {phase === 'ready' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
              style={{ zIndex: 10 }}
            >
              <span className="text-xs sm:text-sm tracking-widest uppercase font-semibold" style={{ color: '#8B6914' }}>انزل تحت</span>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 8L10 13L15 8" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                </svg>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default Hero;
