import React from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/logo/logo.png';

const BrandPromise = () => {
  return (
    <section className="relative py-32 lg:py-48 bg-[#020E20] overflow-hidden flex items-center justify-center min-h-[70vh]">
      {/* Premium Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#073866]/50 via-[#020E20] to-[#020E20] z-10 opacity-90" />
      </div>

      {/* Large Transparent Logo Emblem */}
      <motion.div 
        className="absolute z-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img 
          src={logo} 
          alt="Arlenvia Logo Watermark" 
          className="w-[120vw] md:w-[90vw] max-w-[900px] opacity-[0.02]"
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
            <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
              Brand Promise
            </span>
            <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-heading font-semibold text-white mb-12 leading-[1.1] tracking-tight">
            Guided Excellence <br className="hidden md:block" />
            <span className="text-white/60 italic font-light">
              & Achievement
            </span>
          </h2>

          <div className="w-12 h-[2px] bg-[var(--color-gold-primary)] mx-auto mb-12" />

          <p className="text-xl md:text-2xl text-white font-light tracking-wide mb-6">
            Practical Quality. Measurable Performance. Sustainable Improvement.
          </p>
          
          <p className="text-[var(--color-gold-primary)] font-heading font-bold uppercase tracking-[0.15em] text-[12px] max-w-2xl mx-auto">
            Striking the Balance Between Compliance and Business Performance
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandPromise;
