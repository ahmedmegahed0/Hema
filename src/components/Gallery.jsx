import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../data/weddingData';

const Gallery = () => {
  const [selected, setSelected] = useState(null);
  const images = weddingData.gallery;

  const openLightbox = (img) => setSelected(img);
  const closeLightbox = () => setSelected(null);
  const goPrev = () => {
    const idx = images.findIndex(i => i.id === selected.id);
    setSelected(images[(idx - 1 + images.length) % images.length]);
  };
  const goNext = () => {
    const idx = images.findIndex(i => i.id === selected.id);
    setSelected(images[(idx + 1) % images.length]);
  };

  return (
    <section
      id="gallery"
      className="relative py-28 sm:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #E8DFCA 0%, #F2ECD9 50%, #E8DFCA 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="text-center mb-20 sm:mb-24"
        >
          <p className="text-sm uppercase tracking-[0.3em] mb-5" style={{ color: '#8B6914', fontWeight: 600 }}>
            ✦ ذكرياتنا ✦
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
            لحظات من حكايتنا
          </h2>
          <div className="section-divider" />
          <p className="mt-6 font-medium" style={{ fontFamily: "'Amiri', serif", color: '#2C2C2C', fontStyle: 'italic', fontSize: '1.3rem' }}>
            لحظات عشناها سوا وهتفضل محفورة في قلوبنا طول العمر
          </p>
        </motion.div>

        {/* Desktop featured layout */}
        <div className="hidden md:grid grid-cols-12 gap-4 mb-4">
          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="col-span-7 relative group cursor-pointer overflow-hidden rounded-2xl"
            style={{ height: '480px', border: '1px solid rgba(201,168,76,0.2)' }}
            onClick={() => openLightbox(images[0])}
          >
            <img src={images[0].placeholder} alt={images[0].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              style={{ background: 'rgba(201,168,76,0.06)' }} />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
              <div className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm"
                style={{ background: 'rgba(201,168,76,0.2)', border: '1px solid rgba(201,168,76,0.5)' }}>
                <span className="text-2xl">🔍</span>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 text-sm px-3 py-1 rounded-full font-medium"
              style={{ background: 'rgba(255,255,255,0.9)', color: '#8B6914', border: '1px solid rgba(201,168,76,0.3)', backdropFilter: 'blur(5px)' }}>
              {images[0].alt}
            </div>
          </motion.div>

          {/* Right col */}
          <div className="col-span-5 grid grid-rows-2 gap-4" style={{ height: '480px' }}>
            {[images[1], images[2]].map((img, i) => (
              <motion.div key={img.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl"
                style={{ border: '1px solid rgba(201,168,76,0.2)', height: '228px' }}
                onClick={() => openLightbox(img)}
              >
                <img src={img.placeholder} alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: 'rgba(201,168,76,0.06)' }} />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <span className="text-3xl">🔍</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="hidden md:grid grid-cols-3 gap-4">
          {[images[3], images[4], images[5]].map((img, i) => (
            <motion.div key={img.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl"
              style={{ height: '240px', border: '1px solid rgba(201,168,76,0.2)' }}
              onClick={() => openLightbox(img)}
            >
              <img src={img.placeholder} alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: 'rgba(201,168,76,0.06)' }} />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <span className="text-3xl">🔍</span>
              </div>
              <div className="absolute bottom-3 left-3 text-xs px-2 py-1 rounded-full font-medium"
                style={{ background: 'rgba(255,255,255,0.9)', color: '#8B6914', backdropFilter: 'blur(5px)' }}>{img.alt}</div>
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div className="overflow-x-auto flex gap-4 pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
            {images.map((img, i) => (
              <motion.div key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex-none snap-center relative cursor-pointer overflow-hidden rounded-2xl"
                style={{ width: '80vw', height: '260px', border: '1px solid rgba(201,168,76,0.2)' }}
                onClick={() => openLightbox(img)}
              >
                <img src={img.placeholder} alt={img.alt}
                  className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute bottom-3 left-3 text-xs px-2 py-1 rounded-full font-medium"
                  style={{ background: 'rgba(255,255,255,0.9)', color: '#8B6914', backdropFilter: 'blur(5px)' }}>{img.alt}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
            style={{ background: 'rgba(255,255,255,0.95)' }}
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >
              <img src={selected.placeholder} alt={selected.alt}
                className="w-full max-h-[85vh] object-contain rounded-xl"
                style={{ border: '1px solid rgba(201,168,76,0.3)' }} />
              <button onClick={closeLightbox}
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-sm cursor-pointer shadow-lg hover:scale-110 transition-transform"
                style={{ background: 'rgba(255,255,255,0.9)', color: '#8B6914', border: '1px solid rgba(201,168,76,0.5)' }}>✕</button>
              <button onClick={goPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-xl cursor-pointer shadow-lg hover:scale-110 transition-transform"
                style={{ background: 'rgba(255,255,255,0.9)', color: '#8B6914', border: '1px solid rgba(201,168,76,0.5)' }}>‹</button>
              <button onClick={goNext}
                className="absolute right-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-xl cursor-pointer shadow-lg hover:scale-110 transition-transform"
                style={{ background: 'rgba(255,255,255,0.9)', color: '#8B6914', border: '1px solid rgba(201,168,76,0.5)' }}>›</button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm px-4 py-2 rounded-full font-medium shadow-lg"
                style={{ background: 'rgba(255,255,255,0.9)', color: '#8B6914', border: '1px solid rgba(201,168,76,0.3)' }}>{selected.alt}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
