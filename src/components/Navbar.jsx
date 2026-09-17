import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'story', label: 'حكايتنا' },
    { id: 'details', label: 'تفاصيل الزفاف' },
    { id: 'countdown', label: 'العد التنازلي' },
    { id: 'gallery', label: 'الصور' },
    { id: 'messages', label: 'رسائل الضيوف' },
    { id: 'rsvp', label: 'تأكيد الحضور' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(8, 8, 8, 0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201, 168, 76, 0.2)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollTo('home')}
              className="font-amiri text-lg sm:text-xl font-bold cursor-pointer"
              style={{ color: '#C9A84C' }}
            >
              أحمد & نورهان
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-sm font-cairo font-medium transition-all duration-300 relative cursor-pointer"
                  style={{
                    color: activeSection === item.id ? '#C9A84C' : 'rgba(247, 231, 206, 0.7)',
                  }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 right-0 left-0 h-px"
                      style={{ background: '#C9A84C' }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
              aria-label="فتح القائمة"
            >
              <motion.span
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
                className="block w-6 h-0.5"
                style={{ background: '#C9A84C', transformOrigin: 'center' }}
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1 }}
                className="block w-6 h-0.5"
                style={{ background: '#C9A84C' }}
              />
              <motion.span
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
                className="block w-6 h-0.5"
                style={{ background: '#C9A84C', transformOrigin: 'center' }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed top-0 right-0 bottom-0 w-72 z-50 flex flex-col pt-24 pb-8 px-8"
            style={{
              background: 'rgba(8, 6, 2, 0.97)',
              backdropFilter: 'blur(30px)',
              borderLeft: '1px solid rgba(201, 168, 76, 0.2)',
            }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 left-6 text-2xl cursor-pointer"
              style={{ color: '#C9A84C' }}
            >
              ✕
            </button>

            <div className="font-amiri text-xl mb-8" style={{ color: '#C9A84C' }}>
              أحمد & نورهان
            </div>

            <div className="flex flex-col gap-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                  onClick={() => scrollTo(item.id)}
                  className="text-right py-4 text-base font-cairo font-medium border-b cursor-pointer transition-colors duration-200"
                  style={{
                    color: activeSection === item.id ? '#C9A84C' : 'rgba(247, 231, 206, 0.7)',
                    borderColor: 'rgba(201, 168, 76, 0.1)',
                  }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ background: 'rgba(0,0,0,0.5)' }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
