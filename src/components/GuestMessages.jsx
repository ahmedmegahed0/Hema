import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../data/weddingData';

const STORAGE_KEY = 'wedding_messages_ibrahim_layla';

const GuestMessages = () => {
  const [messages, setMessages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    setMessages(stored ? JSON.parse(stored) : weddingData.initialMessages);
    if (!stored) localStorage.setItem(STORAGE_KEY, JSON.stringify(weddingData.initialMessages));
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.message.trim() || form.message.trim().length < 5) e.message = 'Please write a message (at least 5 characters)';
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    const newMsg = { id: Date.now(), name: form.name.trim(), message: form.message.trim(), date: new Date().toISOString().slice(0, 10) };
    const updated = [newMsg, ...messages];
    setMessages(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setSubmitted(true);
    setTimeout(() => { setShowModal(false); setSubmitted(false); setForm({ name: '', message: '' }); setErrors({}); }, 2500);
  };

  return (
    <section
      id="messages"
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
          className="text-center mb-20 sm:mb-24"
        >
          <p className="text-xs uppercase tracking-[0.3em] mb-5" style={{ color: 'rgba(201,168,76,0.7)' }}>
            ✦ Words of Love ✦
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
            Messages From Our Loved Ones
          </h2>
          <div className="section-divider" />
          <p className="mt-6" style={{ fontFamily: "'Cormorant Garamond', serif", color: 'rgba(247,231,206,0.6)', fontStyle: 'italic', fontSize: '1.1rem' }}>
            Every kind word from you is a treasured gift we will keep forever
          </p>
        </motion.div>

        {/* Messages grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {messages.map((msg, index) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="p-7 sm:p-8 rounded-2xl relative group"
              style={{ background: 'rgba(15,10,4,0.8)', border: '1px solid rgba(201,168,76,0.2)', backdropFilter: 'blur(10px)' }}
            >
              {/* Quote mark */}
              <div className="text-5xl leading-none mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: 'rgba(201,168,76,0.12)' }}>"</div>
              <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: 'rgba(247,231,206,0.8)' }}>
                {msg.message}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.05))', border: '1px solid rgba(201,168,76,0.3)' }}>
                    {msg.name.charAt(0)}
                  </div>
                  <span className="text-sm font-medium" style={{ color: '#C9A84C' }}>{msg.name}</span>
                </div>
                <span style={{ color: 'rgba(201,168,76,0.4)' }}>❤️</span>
              </div>
              <div className="absolute top-3 right-3 w-5 h-5 opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                style={{ borderTop: '1px solid #C9A84C', borderRight: '1px solid #C9A84C' }} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            onClick={() => setShowModal(true)}
            className="btn-gold text-sm sm:text-base px-10 py-4 rounded-full cursor-pointer"
          >
            Write Your Wishes ❤️
          </motion.button>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => !submitted && setShowModal(false)}
              className="fixed inset-0 z-50" style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }} />
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 40 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              style={{ pointerEvents: 'none' }}
            >
              <div
                className="w-full max-w-lg p-8 sm:p-10 rounded-3xl relative"
                style={{
                  background: 'rgba(12,9,4,0.97)',
                  border: '1px solid rgba(201,168,76,0.3)',
                  backdropFilter: 'blur(30px)',
                  boxShadow: '0 0 80px rgba(201,168,76,0.1)',
                  pointerEvents: 'auto',
                }}
              >
                {!submitted && (
                  <button onClick={() => setShowModal(false)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-sm cursor-pointer"
                    style={{ color: 'rgba(201,168,76,0.6)', border: '1px solid rgba(201,168,76,0.2)' }}>✕</button>
                )}

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div key="ok" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.6, repeat: 2 }} className="text-6xl mb-4">❤️</motion.div>
                      <h3 className="text-2xl mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#C9A84C' }}>Thank You!</h3>
                      <p className="text-sm" style={{ color: 'rgba(247,231,206,0.6)' }}>Your message was received with love ✨</p>
                    </motion.div>
                  ) : (
                    <motion.form key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit}>
                      <h3 className="text-2xl sm:text-3xl mb-2 text-center" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#C9A84C' }}>
                        Leave a Message
                      </h3>
                      <p className="text-xs text-center mb-8" style={{ color: 'rgba(247,231,206,0.5)' }}>
                        Your words will stay with us always ❤️
                      </p>

                      <div className="mb-5">
                        <label className="text-sm mb-2 block" style={{ color: 'rgba(201,168,76,0.7)' }}>Your Name</label>
                        <input type="text" value={form.name}
                          onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(v => ({ ...v, name: '' })); }}
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300"
                          style={{ background: 'rgba(201,168,76,0.05)', border: errors.name ? '1px solid rgba(200,50,50,0.5)' : '1px solid rgba(201,168,76,0.2)', color: '#F7E7CE' }}
                          placeholder="Your name"
                          onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
                          onBlur={e => e.target.style.borderColor = errors.name ? 'rgba(200,50,50,0.5)' : 'rgba(201,168,76,0.2)'}
                        />
                        {errors.name && <p className="text-xs mt-1" style={{ color: 'rgba(200,80,80,0.9)' }}>{errors.name}</p>}
                      </div>

                      <div className="mb-8">
                        <label className="text-sm mb-2 block" style={{ color: 'rgba(201,168,76,0.7)' }}>Your Message</label>
                        <textarea value={form.message}
                          onChange={e => { setForm(f => ({ ...f, message: e.target.value })); setErrors(v => ({ ...v, message: '' })); }}
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all duration-300"
                          style={{ background: 'rgba(201,168,76,0.05)', border: errors.message ? '1px solid rgba(200,50,50,0.5)' : '1px solid rgba(201,168,76,0.2)', color: '#F7E7CE' }}
                          placeholder="Write something from the heart..."
                          onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
                          onBlur={e => e.target.style.borderColor = errors.message ? 'rgba(200,50,50,0.5)' : 'rgba(201,168,76,0.2)'}
                        />
                        {errors.message && <p className="text-xs mt-1" style={{ color: 'rgba(200,80,80,0.9)' }}>{errors.message}</p>}
                      </div>

                      <motion.button type="submit" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                        className="btn-gold w-full py-4 rounded-xl cursor-pointer text-base">
                        Send Wishes 💌
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GuestMessages;
