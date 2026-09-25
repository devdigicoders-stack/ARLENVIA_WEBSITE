import React from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/logo/logo.png';

const BrandPromise = () => {
  return (
    <section className="relative py-32 bg-[var(--color-primary-navy)] overflow-hidden flex items-center justify-center min-h-[70vh]">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[800px] bg-[var(--color-primary-corporate)]/20 rounded-full blur-[100px]" />
      </div>

      {/* Large Transparent Logo Emblem */}
      <motion.div 
        className="absolute z-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <img 
          src={logo} 
          alt="Arlenvia Logo Watermark" 
          className="w-[80vw] max-w-[800px] opacity-[0.03] grayscale"
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-4 rounded-full border border-[var(--color-gold-primary)]/30 text-sm font-medium tracking-widest text-[var(--color-gold-light)] uppercase mb-8">
            Arlenvia Brand Promise
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-10 leading-tight">
            Guided Excellence <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold-light)] to-[var(--color-gold-primary)]">
              and Achievement
            </span>
          </h2>

          <div className="w-24 h-1 bg-white/20 mx-auto mb-10" />

          <p className="text-xl md:text-2xl text-[var(--color-gold-light)] font-light tracking-wide mb-6">
            Practical Quality. Measurable Performance. Sustainable Improvement.
          </p>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto uppercase tracking-widest text-sm">
            Striking the Balance Between Compliance and Business Performance
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandPromise;
