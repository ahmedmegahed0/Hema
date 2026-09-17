import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RSVP_KEY = 'wedding_rsvp_ibrahim_layla';

const RSVP = () => {
  const [form, setForm] = useState({ name: '', guests: '1', attendance: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.attendance) e.attendance = 'Please let us know if you can attend';
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    
    // Save locally (optional, but keeps the old logic)
    const existing = JSON.parse(localStorage.getItem(RSVP_KEY) || '[]');
    existing.push({ ...form, submittedAt: new Date().toISOString() });
    localStorage.setItem(RSVP_KEY, JSON.stringify(existing));

    // Send email using FormSubmit.co
    fetch('https://formsubmit.co/ajax/ahmedmegahed580@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        Name: form.name,
        Guests: form.guests,
        Attendance: form.attendance === 'yes' ? 'Attending' : 'Not Attending',
        Message: form.message || 'No additional message'
      })
    })
    .then(response => response.json())
    .then(data => console.log('Email sent successfully', data))
    .catch(error => console.error('Error sending email:', error));

    setSubmitted(true);
  };

  return (
    <section
      id="rsvp"
      className="relative py-28 sm:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #080808 0%, #070503 50%, #080808 100%)' }}
    >
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(201,168,76,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-2xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] mb-5" style={{ color: 'rgba(201,168,76,0.7)' }}>
            ✦ Kindly Reply ✦
          </p>
          <h2
            className="mb-5"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              fontWeight: 300,
              background: 'linear-gradient(135deg, #C9A84C, #F0D98C, #C9A84C)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Will You Join Our Celebration?
          </h2>
          <div className="section-divider" />
          <p className="mt-6" style={{ fontFamily: "'Cormorant Garamond', serif", color: 'rgba(247,231,206,0.65)', fontStyle: 'italic', fontSize: '1.1rem' }}>
            Your presence is the most precious gift on the night of our lives ❤️
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center py-16"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="w-32 h-32 rounded-full mx-auto mb-8 flex items-center justify-center"
                style={{ border: '2px solid rgba(201,168,76,0.3)', borderTopColor: '#C9A84C' }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
                  className="text-5xl"
                >
                  {form.attendance === 'yes' ? '💍' : '🙏'}
                </motion.div>
              </motion.div>
              <h3 className="text-3xl mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#C9A84C' }}>
                {form.attendance === 'yes' ? "We can't wait to see you!" : 'Thank you for letting us know'}
              </h3>
              <p className="text-base" style={{ color: 'rgba(247,231,206,0.6)' }}>
                {form.attendance === 'yes'
                  ? `We look forward to celebrating with you${form.guests > 1 ? ` and your ${parseInt(form.guests) - 1} guest(s)` : ''} ✨`
                  : 'You will always be in our hearts, even from afar ❤️'}
              </p>
              <div className="mt-8 flex items-center justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <motion.span key={i} animate={{ y: [0, -10, 0] }} transition={{ delay: i * 0.1, duration: 1, repeat: Infinity }} className="text-xl">✨</motion.span>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7 }}
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl"
              style={{ background: 'rgba(12,9,4,0.8)', border: '1px solid rgba(201,168,76,0.2)', backdropFilter: 'blur(20px)' }}
            >
              {/* Name */}
              <div className="mb-6">
                <label className="text-sm mb-2 block" style={{ color: 'rgba(201,168,76,0.7)' }}>Full Name</label>
                <input type="text" value={form.name}
                  onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(v => ({ ...v, name: '' })); }}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300"
                  style={{ background: 'rgba(201,168,76,0.05)', border: errors.name ? '1px solid rgba(200,50,50,0.5)' : '1px solid rgba(201,168,76,0.2)', color: '#F7E7CE' }}
                  placeholder="Your full name"
                  onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
                  onBlur={e => e.target.style.borderColor = errors.name ? 'rgba(200,50,50,0.5)' : 'rgba(201,168,76,0.2)'}
                />
                {errors.name && <p className="text-xs mt-1" style={{ color: 'rgba(200,80,80,0.9)' }}>{errors.name}</p>}
              </div>

              {/* Guests */}
              <div className="mb-6">
                <label className="text-sm mb-2 block" style={{ color: 'rgba(201,168,76,0.7)' }}>Number of Guests (including yourself)</label>
                <select value={form.guests}
                  onChange={e => setForm(f => ({ ...f, guests: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 cursor-pointer"
                  style={{ background: 'rgba(10,8,3,0.95)', border: '1px solid rgba(201,168,76,0.2)', color: '#F7E7CE' }}
                >
                  {[1, 2, 3, 4, 5, 6].map(n => (
                    <option key={n} value={n} style={{ background: '#0A0803' }}>
                      {n === 1 ? '1 person (just me)' : `${n} people`}
                    </option>
                  ))}
                </select>
              </div>

              {/* Attendance */}
              <div className="mb-6">
                <label className="text-sm mb-3 block" style={{ color: 'rgba(201,168,76,0.7)' }}>Will you be able to attend?</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { value: 'yes', label: 'Yes, with all my love ❤️' },
                    { value: 'no', label: 'Unfortunately, I cannot attend' },
                  ].map(opt => (
                    <button key={opt.value} type="button"
                      onClick={() => { setForm(f => ({ ...f, attendance: opt.value })); setErrors(v => ({ ...v, attendance: '' })); }}
                      className="px-4 py-3 rounded-xl text-sm transition-all duration-300 cursor-pointer text-left"
                      style={{
                        background: form.attendance === opt.value ? 'rgba(201,168,76,0.15)' : 'rgba(201,168,76,0.04)',
                        border: form.attendance === opt.value ? '1px solid rgba(201,168,76,0.6)' : '1px solid rgba(201,168,76,0.15)',
                        color: form.attendance === opt.value ? '#F0D98C' : 'rgba(247,231,206,0.6)',
                      }}
                    >{opt.label}</button>
                  ))}
                </div>
                {errors.attendance && <p className="text-xs mt-2" style={{ color: 'rgba(200,80,80,0.9)' }}>{errors.attendance}</p>}
              </div>

              {/* Optional message */}
              <div className="mb-8">
                <label className="text-sm mb-2 block" style={{ color: 'rgba(201,168,76,0.7)' }}>Additional Message (optional)</label>
                <textarea value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all duration-300"
                  style={{ background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.2)', color: '#F7E7CE' }}
                  placeholder="Any note you'd like to share..."
                  onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
                />
              </div>

              <motion.button type="submit" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="btn-gold w-full py-4 rounded-xl cursor-pointer text-base">
                Confirm Attendance ✨
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RSVP;
