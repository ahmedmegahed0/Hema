import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import FloralCorner from './FloralCorner';

const DetailCard = ({ icon, label, value, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.8, delay }}
    whileHover={{ scale: 1.02, y: -4 }}
    className="flex flex-col items-center text-center p-8 sm:p-10 rounded-2xl relative group overflow-hidden"
    style={{
      background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(245,240,230,0.95) 100%)',
      border: '1px solid rgba(201,168,76,0.4)',
      boxShadow: '0 10px 40px -10px rgba(0,0,0,0.05)',
      backdropFilter: 'blur(20px)',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      minHeight: '260px',
    }}
  >
    {/* Inner decorative frame line */}
    <div className="absolute inset-3 rounded-xl border border-dashed border-[#C9A84C]/20 pointer-events-none transition-all duration-500 group-hover:border-[#C9A84C]/40 group-hover:scale-[0.98]" />

    {/* Hover glow */}
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
      style={{ background: 'radial-gradient(circle at 50% 0%, rgba(201,168,76,0.15) 0%, transparent 70%)' }} />

    {/* Floral corners */}
    <FloralCorner position="top-right" className="opacity-40 group-hover:opacity-100 transition-opacity duration-700" />
    <FloralCorner position="bottom-left" className="opacity-40 group-hover:opacity-100 transition-opacity duration-700" />
    <FloralCorner position="top-left" className="opacity-20 group-hover:opacity-60 transition-opacity duration-700" />
    <FloralCorner position="bottom-right" className="opacity-20 group-hover:opacity-60 transition-opacity duration-700" />

    {/* Content Wrapper */}
    <div className="relative z-10 flex flex-col items-center w-full h-full justify-center mt-2">
        {/* Icon Seal */}
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-2xl relative flex-shrink-0 group-hover:scale-110 transition-transform duration-500"
          style={{ 
            background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))', 
            border: '1px solid rgba(201,168,76,0.4)',
            boxShadow: '0 0 20px rgba(201,168,76,0.1), inset 0 0 10px rgba(201,168,76,0.1)'
          }}>
          <div className="absolute inset-1 rounded-full border border-dotted border-[#C9A84C]/40 animate-[spin_20s_linear_infinite]" />
          {icon}
        </div>

        <span className="text-sm uppercase tracking-[0.25em] mb-3 block" style={{ color: '#8B6914', fontWeight: '700' }}>{label}</span>
        
        {/* Tiny divider */}
        <div className="w-8 h-px mb-4 bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />

        <div className="text-xl sm:text-2xl md:text-3xl leading-snug font-medium"
          style={{ fontFamily: "'Amiri', serif", color: '#2C2C2C' }}>
          {value}
        </div>
    </div>
  </motion.div>
);

const WeddingDetails = () => {
  const cards = [
    { icon: '📅', label: 'الفرح',     value: weddingData.event.dateFormatted, delay: 0 },
    { icon: '🕗', label: 'الساعة',     value: weddingData.event.time,          delay: 0.12 },
    { icon: '📍', label: 'المكان',    value: weddingData.event.venue,         delay: 0.24 },
    { icon: '🌿', label: 'يوم الحنة',value: `${weddingData.hennaEvent.dateFormatted} — ${weddingData.hennaEvent.venue}`, delay: 0.36 },
  ];

  return (
    <section
      id="details"
      className="relative py-28 sm:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #E8DFCA 0%, #F2ECD9 50%, #E8DFCA 100%)' }}
    >
      {/* Top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)' }} />

      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="text-center mb-20 sm:mb-24"
        >
          <p className="text-sm uppercase tracking-[0.3em] mb-5" style={{ color: '#8B6914', fontWeight: 700 }}>
            ✦ مستنيينكم تنورونا ✦
          </p>
          <h2
            className="mb-5"
            style={{
              fontFamily: "'Amiri', serif",
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: 300,
              background: 'linear-gradient(135deg, #C9A84C, #F0D98C, #C9A84C)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            ليلة العمر
          </h2>
          <div className="section-divider" />
          <p className="mt-6 max-w-xl mx-auto leading-relaxed font-medium"
            style={{ fontFamily: "'Amiri', serif", color: '#2C2C2C', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 3vw, 1.4rem)' }}>
            بكل حب وفرحة، بنعزمكم تشاركونا أجمل ليلة في حياتنا وتكملوا فرحتنا
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {cards.map((card, i) => <DetailCard key={i} {...card} />)}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-12">
          <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3))' }} />
          <span className="text-2xl" style={{ color: 'rgba(201,168,76,0.4)' }}>✦</span>
          <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.3), transparent)' }} />
        </div>

        {/* Quote + map button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="mb-10 max-w-lg mx-auto leading-relaxed font-medium"
            style={{ fontFamily: "'Amiri', serif", color: '#2C2C2C', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 3vw, 1.4rem)' }}>
            "وجودكم معانا هو أحلى هدية ممكن نتمناها في الليلة دي."
          </p>
          <motion.a
            href={weddingData.event.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-gold text-base sm:text-lg px-10 py-5 rounded-full inline-block font-bold tracking-wider"
          >
            افتح اللوكيشن على الخريطة 📍
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)' }} />
    </section>
  );
};

export default WeddingDetails;
