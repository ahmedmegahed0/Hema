import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';

// duplicate once for seamless infinite loop
const row1 = [...weddingData.gallery, ...weddingData.gallery];
const row2 = [...weddingData.gallery, ...weddingData.gallery];

const FilmFrame = ({ img, size = 'md' }) => {
  const dims =
    size === 'lg'
      ? { width: '320px', height: '260px' }
      : { width: '230px', height: '190px' };

  return (
    <div
      className="flex-none relative overflow-hidden group cursor-pointer"
      style={{
        ...dims,
        borderRadius: '4px',
        border: '3px solid #FFFFFF',
        outline: '1px solid rgba(201,168,76,0.4)',
        flexShrink: 0,
      }}
    >
      <img
        src={img.placeholder}
        alt={img.alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        style={{ filter: 'sepia(0.1) contrast(1.05)' }}
        loading="lazy"
      />
      {/* vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.45) 100%)',
        }}
      />
      {/* gold shimmer on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'rgba(201,168,76,0.07)' }}
      />
      {/* caption on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 py-2 px-3 text-xs text-center font-cairo opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium"
        style={{
          background: 'linear-gradient(0deg, rgba(255,255,255,0.95), transparent)',
          color: '#8B6914',
        }}
      >
        {img.alt}
      </div>
    </div>
  );
};

/* ── perforations strip ── */
const Perforations = () => (
  <div
    className="flex items-center gap-3 px-2 py-1"
    style={{ background: '#EBE5D9', overflow: 'hidden' }}
  >
    {Array.from({ length: 80 }).map((_, i) => (
      <div
        key={i}
        className="flex-none rounded-sm"
        style={{
          width: '22px',
          height: '12px',
          background: '#FDFBF7',
          border: '1px solid rgba(201,168,76,0.2)',
          flexShrink: 0,
        }}
      />
    ))}
  </div>
);

const MemoryFilm = () => {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ background: '#F2ECD9' }}
    >
      {/* ── header ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 relative z-10"
      >
        <p
          className="font-cairo text-sm uppercase tracking-widest mb-2"
          style={{ color: '#8B6914', fontWeight: 700 }}
        >
          ✦ شريط الذكريات ✦
        </p>
        <h2
          className="font-amiri"
          style={{
            fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
            fontFamily: "'Amiri', serif",
            fontWeight: 300,
            background: 'linear-gradient(135deg, #C9A84C, #F0D98C, #C9A84C)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          ذكرياتنا على شريط السينما
        </h2>
      </motion.div>

      {/* ── film strip ── */}
      <div className="relative" style={{ overflow: 'hidden' }}>
        <Perforations />

        {/* ROW 1 — moves RIGHT → LEFT */}
        <div
          style={{ background: '#EBE5D9', overflow: 'hidden', padding: '12px 0' }}
        >
          <motion.div
            className="flex gap-4 items-center"
            style={{ width: 'max-content', willChange: 'transform' }}
            animate={{ x: [0, '-50%'] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 30 }}
          >
            {row1.map((img, i) => (
              <FilmFrame key={`r1-${i}`} img={img} size={i % 3 === 0 ? 'lg' : 'md'} />
            ))}
          </motion.div>
        </div>

        {/* ROW 2 — moves LEFT → RIGHT (opposite) */}
        <div
          style={{ background: '#EBE5D9', overflow: 'hidden', padding: '12px 0' }}
        >
          <motion.div
            className="flex gap-4 items-center"
            style={{ width: 'max-content', willChange: 'transform' }}
            animate={{ x: ['-50%', 0] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 36 }}
          >
            {row2.map((img, i) => (
              <FilmFrame key={`r2-${i}`} img={img} size={i % 4 === 1 ? 'lg' : 'md'} />
            ))}
          </motion.div>
        </div>

        <Perforations />

        {/* side fade gradients */}
        <div
          className="absolute inset-y-0 right-0 w-20 pointer-events-none z-10"
          style={{ background: 'linear-gradient(270deg, #F2ECD9, transparent)' }}
        />
        <div
          className="absolute inset-y-0 left-0 w-20 pointer-events-none z-10"
          style={{ background: 'linear-gradient(90deg, #F2ECD9, transparent)' }}
        />
      </div>
    </section>
  );
};

export default MemoryFilm;
