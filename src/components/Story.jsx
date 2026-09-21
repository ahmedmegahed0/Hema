import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import FloralCorner from './FloralCorner';


const Story = () => {
  return (
    <section
      id="story"
      className="relative py-28 sm:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #E8DFCA 0%, #F2ECD9 50%, #E8DFCA 100%)' }}
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
          <p className="text-sm uppercase tracking-[0.3em] mb-5" style={{ color: '#8B6914', fontWeight: 600 }}>
            ✦ حكايتنا ✦
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
            {weddingData.story.title}
          </h2>
          <div className="section-divider" />
          <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mt-6 font-medium"
            style={{ fontFamily: "'Amiri', serif", color: '#2C2C2C', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 3vw, 1.4rem)' }}>
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
              <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, rgba(253,251,247,0.4) 0%, transparent 50%)' }} />
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
            <div className="text-6xl sm:text-7xl mb-4 leading-none" style={{ fontFamily: "'Amiri', serif", color: 'rgba(201,168,76,0.3)' }}>"</div>
            <p className="text-xl sm:text-2xl md:text-3xl leading-loose mb-8 font-medium"
              style={{ fontFamily: "'Amiri', serif", color: '#2C2C2C', fontStyle: 'italic', fontSize: 'clamp(1.3rem, 3vw, 1.6rem)' }}>
              {weddingData.story.description}
            </p>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
              <span className="text-2xl animate-float" style={{ color: '#C9A84C' }}>♦</span>
            </div>
            <p className="text-3xl sm:text-4xl" style={{ fontFamily: "'Amiri', serif", color: '#8B6914', fontStyle: 'italic', fontWeight: 600 }}>
              — {weddingData.coupleNames}
            </p>
          </motion.div>
        </div>



      </div>
    </section>
  );
};

export default Story;
