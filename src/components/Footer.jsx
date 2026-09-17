import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';

const Footer = () => (
  <footer
    className="relative py-24 overflow-hidden"
    style={{ background: 'linear-gradient(180deg, #080808 0%, #040302 100%)', borderTop: '1px solid rgba(201,168,76,0.1)' }}
  >
    <div className="absolute inset-0"
      style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.04) 0%, transparent 70%)' }} />

    <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
      {/* Ornamental divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex items-center justify-center gap-4 mb-12"
      >
        <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4))' }} />
        <span className="text-xl" style={{ color: '#C9A84C' }}>✦</span>
        <span className="text-xs uppercase tracking-[0.3em]" style={{ color: 'rgba(201,168,76,0.5)' }}>Royal Wedding</span>
        <span className="text-xl" style={{ color: '#C9A84C' }}>✦</span>
        <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.4), transparent)' }} />
      </motion.div>

      {/* Couple names */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="mb-5"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          fontWeight: 300,
          background: 'linear-gradient(135deg, #8B6914 0%, #C9A84C 30%, #F0D98C 50%, #C9A84C 70%, #8B6914 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          filter: 'drop-shadow(0 0 20px rgba(201,168,76,0.3))',
        }}
      >
        {weddingData.coupleNames}
      </motion.h2>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="mb-10 leading-relaxed"
        style={{ fontFamily: "'Cormorant Garamond', serif", color: 'rgba(247,231,206,0.55)', fontStyle: 'italic', fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}
      >
        "Our story has begun — and we want you to be part of it."
      </motion.p>

      {/* Date */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="inline-flex items-center gap-3 px-6 py-2 rounded-full mb-12"
        style={{ border: '1px solid rgba(201,168,76,0.25)', background: 'rgba(201,168,76,0.04)' }}
      >
        <span className="text-sm" style={{ color: 'rgba(201,168,76,0.7)' }}>{weddingData.event.dateFormatted}</span>
      </motion.div>

      {/* Heart & Ad */}
      <div>
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-4xl mb-12"
          style={{ color: 'rgba(201,168,76,0.4)' }}
        >
          ♥
        </motion.div>
        
        <div 
          className="mt-8 p-8 rounded-2xl mx-auto max-w-lg relative group" 
          style={{ 
            background: 'rgba(20,15,8,0.7)', 
            border: '1px solid rgba(201,168,76,0.3)', 
            backdropFilter: 'blur(10px)',
            boxShadow: '0 10px 30px -10px rgba(201,168,76,0.2)'
          }}
        >
          <div className="absolute inset-0 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: 'radial-gradient(circle at 50% 50%, rgba(201,168,76,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
          
          <h3 className="text-xl mb-4 font-bold" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#C9A84C' }}>Design Your Own Invitation ✨</h3>
          <p className="text-sm mb-5 leading-relaxed" style={{ color: 'rgba(247,231,206,0.9)' }} dir="rtl">
            لو عجبك التصميم وعايز تعمل إنفيتيشن زي دي لخطوبتك، فرحك، أو أي مناسبة، تقدر تكلمنا دلوقتي على:
          </p>
          <a href="tel:01067688524" className="text-2xl inline-block font-bold mb-6 hover:scale-105 transition-transform relative z-10" 
             style={{ color: '#F0D98C', textDecoration: 'none', textShadow: '0 0 15px rgba(201,168,76,0.4)' }}>
            01067688524
          </a>
          
          <div className="flex justify-center gap-8 mt-2 pt-6 relative z-10" style={{ borderTop: '1px dashed rgba(201,168,76,0.2)' }}>
            <a href="https://www.instagram.com/wedcraft_eg/" target="_blank" rel="noreferrer" 
               className="hover:scale-110 transition-transform flex items-center gap-2 text-sm uppercase tracking-widest font-semibold" 
               style={{ color: 'rgba(201,168,76,0.9)' }}>
              Instagram
            </a>
            <a href="https://www.tiktok.com/@wed.craft?_r=1&_t=ZS-98LpvLW49nJ&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAaea5T8myq-IB4Tmw3gZ1APE0k2qRnGJQHviSwYF2FPbdRkWb1km-l7HvR8HwA_aem_hrCxXVIFlXFkuoN5nNN-Rg" 
               target="_blank" rel="noreferrer" 
               className="hover:scale-110 transition-transform flex items-center gap-2 text-sm uppercase tracking-widest font-semibold" 
               style={{ color: 'rgba(201,168,76,0.9)' }}>
              TikTok
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
