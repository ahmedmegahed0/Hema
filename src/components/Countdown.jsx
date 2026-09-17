import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../data/weddingData';

const CountdownUnit = ({ value, label, prevValue }) => {
  const changed = value !== prevValue;

  return (
    <motion.div
      className="flex flex-col items-center gap-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Ornamental ring */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
        {/* Spinning dashed outer ring */}
        <svg className="absolute inset-0 w-full h-full animate-spin-slow opacity-30" viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="56" fill="none" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="4 8" />
        </svg>
        {/* Static inner ring with dots */}
        <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 128 128"
          style={{ transform: 'rotate(45deg)' }}>
          <circle cx="64" cy="64" r="48" fill="none" stroke="#C9A84C" strokeWidth="0.8" />
          <circle cx="64" cy="16" r="3" fill="#C9A84C" />
          <circle cx="64" cy="112" r="3" fill="#C9A84C" />
          <circle cx="16" cy="64" r="3" fill="#C9A84C" />
          <circle cx="112" cy="64" r="3" fill="#C9A84C" />
        </svg>
        {/* Number */}
        <div
          className="absolute inset-0 rounded-full flex items-center justify-center"
          style={{
            background: 'radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, rgba(10,8,3,0.9) 80%)',
            border: '1px solid rgba(201,168,76,0.4)',
            boxShadow: changed
              ? '0 0 30px rgba(201,168,76,0.5)'
              : '0 0 15px rgba(201,168,76,0.2)',
            transition: 'box-shadow 0.3s ease',
          }}
        >
          <AnimatePresence mode="popLayout">
            <motion.span
              key={value}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
                fontWeight: 300,
                color: '#F0D98C',
                filter: 'drop-shadow(0 0 10px rgba(201,168,76,0.6))',
                lineHeight: 1,
              }}
            >
              {String(value).padStart(2, '0')}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* Label */}
      <span className="text-xs sm:text-sm uppercase tracking-[0.2em]" style={{ color: 'rgba(201,168,76,0.7)' }}>
        {label}
      </span>
    </motion.div>
  );
};

const Countdown = () => {
  const calc = () => {
    const diff = Math.max(0, weddingData.event.date - new Date());
    return {
      days:    Math.floor(diff / 86400000),
      hours:   Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };

  const [time, setTime] = useState(calc());
  const prev = useRef(time);

  useEffect(() => {
    const id = setInterval(() => { prev.current = time; setTime(calc()); }, 1000);
    return () => clearInterval(id);
  }, [time]);

  const units = [
    { value: time.days,    prev: prev.current.days,    label: 'Days' },
    { value: time.hours,   prev: prev.current.hours,   label: 'Hours' },
    { value: time.minutes, prev: prev.current.minutes, label: 'Minutes' },
    { value: time.seconds, prev: prev.current.seconds, label: 'Seconds' },
  ];

  return (
    <section
      id="countdown"
      className="relative py-28 sm:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #080808 0%, #0A0704 50%, #080808 100%)' }}
    >
      {/* Large decorative bg rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ opacity: 0.03 }}>
        <svg viewBox="0 0 800 800" width="100%" height="100%" style={{ maxWidth: '800px' }}>
          <circle cx="400" cy="400" r="350" fill="none" stroke="#C9A84C" strokeWidth="1" strokeDasharray="10 15" />
          <circle cx="400" cy="400" r="280" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
          <circle cx="400" cy="400" r="200" fill="none" stroke="#C9A84C" strokeWidth="1" strokeDasharray="5 10" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="text-center mb-20 sm:mb-24"
        >
          <p className="text-xs uppercase tracking-[0.3em] mb-5" style={{ color: 'rgba(201,168,76,0.7)' }}>
            ✦ Counting Down ✦
          </p>
          <h2
            className="mb-5"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: 300,
              background: 'linear-gradient(135deg, #C9A84C, #F0D98C, #C9A84C)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            The Countdown
          </h2>
          <div className="section-divider" />
          <p className="mt-6" style={{ fontFamily: "'Cormorant Garamond', serif", color: 'rgba(247,231,206,0.6)', fontStyle: 'italic', fontSize: '1.1rem' }}>
            Until the most beautiful evening begins
          </p>
        </motion.div>

        {/* Digits */}
        <div className="flex items-center justify-center gap-8 sm:gap-12 md:gap-16 flex-wrap">
          {units.map((u, i) => (
            <React.Fragment key={u.label}>
              <CountdownUnit value={u.value} prevValue={u.prev} label={u.label} />
              {i < units.length - 1 && (
                <motion.span
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-2xl sm:text-3xl hidden sm:block self-start mt-10"
                  style={{ color: 'rgba(201,168,76,0.4)' }}
                >
                  :
                </motion.span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Date reminder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div
            className="inline-flex flex-wrap items-center justify-center gap-4 px-8 py-4 rounded-full"
            style={{ border: '1px solid rgba(201,168,76,0.2)', background: 'rgba(201,168,76,0.04)' }}
          >
            <span className="text-sm" style={{ color: 'rgba(201,168,76,0.7)' }}>
              📅 {weddingData.event.dateFormatted}
            </span>
            <span style={{ color: 'rgba(201,168,76,0.3)' }}>|</span>
            <span className="text-sm" style={{ color: 'rgba(201,168,76,0.7)' }}>
              🕗 {weddingData.event.time}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;
