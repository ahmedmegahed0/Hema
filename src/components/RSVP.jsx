import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FloralCorner from './FloralCorner';

const RSVP_KEY = 'wedding_rsvp_ibrahim_layla';

const RSVP = () => {
  const [form, setForm] = useState({ name: '', guests: '1', attendance: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'يا ريت تكتب اسمك';
    if (!form.attendance) e.attendance = 'عرفنا هتقدر تيجي ولا لأ';
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
      style={{ background: 'linear-gradient(180deg, #E8DFCA 0%, #F2ECD9 50%, #E8DFCA 100%)' }}
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
          <p className="text-sm uppercase tracking-[0.3em] mb-5" style={{ color: '#8B6914', fontWeight: 700 }}>
            ✦ تأكيد الحضور ✦
          </p>
          <h2
            className="mb-5"
            style={{
              fontFamily: "'Amiri', serif",
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              fontWeight: 300,
              background: 'linear-gradient(135deg, #C9A84C, #F0D98C, #C9A84C)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            هتنورونا وتكملوا فرحتنا؟
          </h2>
          <div className="section-divider" />
          <p className="mt-6 font-medium" style={{ fontFamily: "'Amiri', serif", color: '#2C2C2C', fontStyle: 'italic', fontSize: '1.3rem' }}>
            وجودكم هو أغلى هدية في ليلة عمرنا ❤️
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
              <h3 className="text-3xl mb-4" style={{ fontFamily: "'Amiri', serif", color: '#8B6914' }}>
                {form.attendance === 'yes' ? "مستنيينكم تنورونا!" : 'شكراً إنكم عرفتونا'}
              </h3>
              <p className="text-base" style={{ color: '#4A4A4A' }}>
                {form.attendance === 'yes'
                  ? `فرحتنا مش هتكمل غير بيكم${form.guests > 1 ? ` وبكل اللي جايين معاكم (${parseInt(form.guests) - 1})` : ''} ✨`
                  : 'هتفضلوا في قلوبنا، حتى لو مش هتقدروا تكونوا موجودين ❤️'}
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
              className="p-8 sm:p-10 rounded-3xl relative group overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(245,240,230,0.95) 100%)',
                border: '1px solid rgba(201,168,76,0.4)',
                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.05)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Inner decorative frame line */}
              <div className="absolute inset-3 rounded-2xl border border-dashed border-[#C9A84C]/15 pointer-events-none transition-all duration-500 group-hover:border-[#C9A84C]/30" />

              {/* Floral corners */}
              <FloralCorner position="top-right" className="opacity-20 group-hover:opacity-60 transition-opacity duration-500" />
              <FloralCorner position="bottom-left" className="opacity-20 group-hover:opacity-60 transition-opacity duration-500" />
              <FloralCorner position="top-left" className="opacity-10 group-hover:opacity-40 transition-opacity duration-500" />
              <FloralCorner position="bottom-right" className="opacity-10 group-hover:opacity-40 transition-opacity duration-500" />
              
              <div className="relative z-10">
              {/* Name */}
              <div className="mb-6">
                <label className="text-sm mb-2 block" style={{ color: '#8B6914', fontWeight: 500 }}>الاسم بالكامل</label>
                <input type="text" value={form.name}
                  onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(v => ({ ...v, name: '' })); }}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.8)', border: errors.name ? '1px solid rgba(200,50,50,0.5)' : '1px solid rgba(201,168,76,0.3)', color: '#2C2C2C' }}
                  placeholder="اكتب اسمك هنا"
                  onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
                  onBlur={e => e.target.style.borderColor = errors.name ? 'rgba(200,50,50,0.5)' : 'rgba(201,168,76,0.2)'}
                />
                {errors.name && <p className="text-xs mt-1" style={{ color: 'rgba(200,80,80,0.9)' }}>{errors.name}</p>}
              </div>

              {/* Guests */}
              <div className="mb-6">
                <label className="text-sm mb-2 block" style={{ color: '#8B6914', fontWeight: 500 }}>عدد الحاضرين (شاملاً حضرتك)</label>
                <select value={form.guests}
                  onChange={e => setForm(f => ({ ...f, guests: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 cursor-pointer"
                  style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(201,168,76,0.3)', color: '#2C2C2C' }}
                >
                  {[1, 2, 3, 4, 5, 6].map(n => (
                    <option key={n} value={n} style={{ background: '#FFFFFF' }}>
                      {n === 1 ? 'فرد واحد (أنا بس)' : `${n} أفراد`}
                    </option>
                  ))}
                </select>
              </div>

              {/* Attendance */}
              <div className="mb-6">
                <label className="text-sm mb-3 block" style={{ color: '#8B6914', fontWeight: 500 }}>هتقدروا تنورونا؟</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { value: 'yes', label: 'أكيد هنيجي بكل حب ❤️' },
                    { value: 'no', label: 'للأسف مش هقدر أجي' },
                  ].map(opt => (
                    <button key={opt.value} type="button"
                      onClick={() => { setForm(f => ({ ...f, attendance: opt.value })); setErrors(v => ({ ...v, attendance: '' })); }}
                      className="px-4 py-3 rounded-xl text-sm transition-all duration-300 cursor-pointer text-left font-medium"
                      style={{
                        background: form.attendance === opt.value ? 'rgba(201,168,76,0.15)' : 'rgba(255,255,255,0.8)',
                        border: form.attendance === opt.value ? '1px solid rgba(201,168,76,0.6)' : '1px solid rgba(201,168,76,0.3)',
                        color: form.attendance === opt.value ? '#8B6914' : '#4A4A4A',
                      }}
                    >{opt.label}</button>
                  ))}
                </div>
                {errors.attendance && <p className="text-xs mt-2" style={{ color: 'rgba(200,80,80,0.9)' }}>{errors.attendance}</p>}
              </div>

              {/* Optional message */}
              <div className="mb-8">
                <label className="text-sm mb-2 block" style={{ color: '#8B6914', fontWeight: 500 }}>رسالة للعرسان (اختياري)</label>
                <textarea value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(201,168,76,0.3)', color: '#2C2C2C' }}
                  placeholder="لو حابب تقول كلمة حلوة..."
                  onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
                />
              </div>

              <motion.button type="submit" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="btn-gold w-full py-4 rounded-xl cursor-pointer text-base">
                تأكيد الحضور ✨
              </motion.button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RSVP;
