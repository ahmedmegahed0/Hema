import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { weddingData } from '../data/weddingData';

const TimelineMilestone = ({ item, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12 }}
      className="flex items-start gap-6 sm:gap-10"
    >
      {/* Icon dot */}
      <div className="flex flex-col items-center flex-shrink-0 pt-1">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.12 + 0.2, type: 'spring' }}
          className="w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0"
          style={{
            background: 'linear-gradient(135deg, #C9A84C, #F0D98C)',
            boxShadow: '0 0 20px rgba(201,168,76,0.4)',
          }}
        >
          {item.emoji}
        </motion.div>
        {index < weddingData.story.milestones.length - 1 && (
          <div className="w-px flex-1 mt-3 min-h-[40px]"
            style={{ background: 'linear-gradient(180deg, rgba(201,168,76,0.4), transparent)' }}
          />
        )}
      </div>

      {/* Card */}
      <div
        className="flex-1 p-6 sm:p-8 rounded-2xl mb-6"
        style={{
          background: 'rgba(20,15,8,0.7)',
          border: '1px solid rgba(201,168,76,0.2)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div className="flex items-center gap-3 mb-3">
          <h3 className="text-xl sm:text-2xl" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#C9A84C', fontWeight: 600 }}>
            {item.title}
          </h3>
          <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(201,168,76,0.1)', color: 'rgba(201,168,76,0.6)', border: '1px solid rgba(201,168,76,0.2)' }}>
            {item.date}
          </span>
        </div>
        <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'rgba(247,231,206,0.7)' }}>
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

const Story = () => {
  return (
    <section
      id="story"
      className="relative py-28 sm:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #080808 0%, #0C0A05 50%, #080808 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="text-center mb-20 sm:mb-28"
        >
          <p className="text-xs uppercase tracking-[0.3em] mb-5" style={{ color: 'rgba(201,168,76,0.7)' }}>
            ✦ Our Journey ✦
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
            {weddingData.story.title}
          </h2>
          <div className="section-divider" />
          <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mt-6"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: 'rgba(247,231,206,0.6)', fontStyle: 'italic', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}>
            {weddingData.story.subtitle}
          </p>
        </motion.div>

        {/* Couple Photo + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 sm:gap-20 mb-24 sm:mb-32 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(201,168,76,0.3)', boxShadow: '0 0 60px rgba(201,168,76,0.1)' }}
            >
              <img src={weddingData.story.image}
                alt="The Couple" className="w-full h-80 sm:h-[450px] object-cover object-top" loading="lazy" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, rgba(8,6,2,0.6) 0%, transparent 50%)' }} />
            </div>
            {/* Corner accents */}
            <div className="absolute -top-3 -left-3 w-10 h-10 opacity-60"
              style={{ borderTop: '2px solid #C9A84C', borderLeft: '2px solid #C9A84C', borderTopLeftRadius: '6px' }} />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 opacity-60"
              style={{ borderBottom: '2px solid #C9A84C', borderRight: '2px solid #C9A84C', borderBottomRightRadius: '6px' }} />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1 }}
            className="py-4"
          >
            <div className="text-6xl sm:text-7xl mb-4 leading-none" style={{ fontFamily: "'Cormorant Garamond', serif", color: 'rgba(201,168,76,0.15)' }}>"</div>
            <p className="text-lg sm:text-xl md:text-2xl leading-loose mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: 'rgba(247,231,206,0.8)', fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)' }}>
              {weddingData.story.description}
            </p>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
              <span className="text-2xl animate-float" style={{ color: '#C9A84C' }}>♦</span>
            </div>
            <p className="text-2xl sm:text-3xl" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#C9A84C', fontStyle: 'italic' }}>
              — {weddingData.coupleNames}
            </p>
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default Story;
