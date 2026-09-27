import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import heroImage1 from '../../assets/images/hero_training.jpg';
import heroImage2 from '../../assets/images/hero_training_2.jpg';
import heroImage3 from '../../assets/images/hero_training_3.jpg';

const images = [heroImage1, heroImage2, heroImage3];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[var(--color-primary-navy)] pt-20">
      {/* Background with abstract shapes/glows */}
      <div className="absolute inset-0 z-0 bg-[#020E20]">
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-l from-[#073866]/40 to-transparent mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#020E20] to-transparent z-10 pointer-events-none" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBoNDBWMEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDEwaDQwTTAgMjBoNDBNeCAzMGg0ME0xMCAwdjQwTTIwIDB2NDBNMzAgMHY0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIi8+PC9zdmc+')] opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="max-w-2xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-3 py-1.5 px-4 text-[11px] font-heading font-bold tracking-[0.2em] text-[var(--color-gold-primary)] mb-8 uppercase">
              <span className="w-6 h-[1px] bg-[var(--color-gold-primary)]"></span>
              Arlenvia Training Consultancy Services
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.1] font-heading font-semibold mb-8 text-white tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Striking the <span className="text-white">Balance</span> Between <br className="hidden lg:block"/>
            <span className="text-[var(--color-gold-light)] font-light italic">Compliance</span> and <br className="hidden lg:block"/> Business Performance
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-white/70 mb-12 max-w-lg leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Practical Quality. Measurable Performance. Sustainable Improvement.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link to="/consultancy" className="group">
              <button className="bg-[var(--color-gold-primary)] text-[#020E20] h-[52px] px-8 text-[13px] font-heading font-bold uppercase tracking-widest hover:bg-[var(--color-gold-light)] transition-colors flex items-center gap-3">
                Explore Our Services
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-transparent border border-white/20 text-white h-[52px] px-8 text-[13px] font-heading font-bold uppercase tracking-widest hover:border-[var(--color-gold-primary)] hover:text-[var(--color-gold-primary)] transition-colors">
                Book a Consultation
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Right Visual */}
        <motion.div 
          className="relative hidden lg:block h-[600px] w-full overflow-hidden"
          initial={{ opacity: 0, clipPath: 'inset(10% 10% 10% 10%)' }}
          animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <AnimatePresence>
            {images.map((img, index) => (
              index === currentImageIndex && (
                <motion.img 
                  key={index}
                  src={img} 
                  alt={`Corporate Training Session ${index + 1}`} 
                  className="absolute inset-0 w-full h-full object-cover filter brightness-[0.85] contrast-[1.1]"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                />
              )
            ))}
          </AnimatePresence>
          {/* Subtle overlay to blend with the theme */}
          <div className="absolute inset-0 z-10 bg-[var(--color-primary-navy)]/10 mix-blend-overlay pointer-events-none" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[var(--color-primary-navy)]/80 via-transparent to-transparent opacity-60 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
