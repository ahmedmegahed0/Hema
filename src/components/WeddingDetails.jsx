import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';

const DetailCard = ({ icon, label, value, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.8, delay }}
    whileHover={{ scale: 1.02, y: -4 }}
    className="flex flex-col items-center text-center p-8 sm:p-10 rounded-2xl relative group"
    style={{
      background: 'rgba(15,10,4,0.8)',
      border: '1px solid rgba(201,168,76,0.25)',
      backdropFilter: 'blur(20px)',
      transition: 'all 0.4s ease',
      minHeight: '220px',
    }}
  >
    {/* Hover glow */}
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)' }} />

    {/* Corner accents on hover */}
    <div className="absolute top-3 right-3 w-5 h-5 opacity-0 group-hover:opacity-50 transition-opacity duration-400"
      style={{ borderTop: '1px solid #C9A84C', borderRight: '1px solid #C9A84C' }} />
    <div className="absolute bottom-3 left-3 w-5 h-5 opacity-0 group-hover:opacity-50 transition-opacity duration-400"
      style={{ borderBottom: '1px solid #C9A84C', borderLeft: '1px solid #C9A84C' }} />

    {/* Icon */}
    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5 text-2xl relative flex-shrink-0"
      style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)' }}>
      {icon}
    </div>

    <span className="text-xs uppercase tracking-[0.2em] mb-3 block" style={{ color: 'rgba(201,168,76,0.6)' }}>{label}</span>
    <div className="text-lg sm:text-xl md:text-2xl leading-snug font-light"
      style={{ fontFamily: "'Cormorant Garamond', serif", color: '#F0D98C' }}>
      {value}
    </div>
  </motion.div>
);

const WeddingDetails = () => {
  const cards = [
    { icon: '📅', label: 'Date',     value: weddingData.event.dateFormatted, delay: 0 },
    { icon: '🕗', label: 'Time',     value: weddingData.event.time,          delay: 0.12 },
    { icon: '📍', label: 'Venue',    value: weddingData.event.venue,         delay: 0.24 },
    { icon: '🌿', label: 'Henna Day',value: `${weddingData.hennaEvent.dateFormatted} — ${weddingData.hennaEvent.venue}`, delay: 0.36 },
  ];

  return (
    <section
      id="details"
      className="relative py-28 sm:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #080808 0%, #070503 50%, #080808 100%)' }}
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
          <p className="text-xs uppercase tracking-[0.3em] mb-5" style={{ color: 'rgba(201,168,76,0.7)' }}>
            ✦ You Are Invited ✦
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
            The Night of a Lifetime
          </h2>
          <div className="section-divider" />
          <p className="mt-6 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: 'rgba(247,231,206,0.6)', fontStyle: 'italic', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
            We joyfully invite you to celebrate with us on this most special evening
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
          <p className="mb-10 max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: 'rgba(247,231,206,0.7)', fontStyle: 'italic', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
            "Your presence is the most beautiful gift we could wish for on this extraordinary evening."
          </p>
          <motion.a
            href={weddingData.event.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-gold text-sm sm:text-base px-8 py-4 rounded-full inline-block"
          >
            Open Venue on Maps 📍
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
