import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';

const CTASection = ({ title, subtitle, primaryBtnText, primaryBtnLink, secondaryBtnText, secondaryBtnLink }) => {
  return (
    <section className="relative py-32 bg-[#020E20] overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-[#020E20] z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#073866]/40 via-[#020E20] to-[#020E20] z-10 opacity-90" />
        
        {/* Logo Watermark */}
        <motion.img 
          src={logo}
          alt="Arlenvia Logo Watermark"
          className="absolute w-[120vw] md:w-[90vw] max-w-[800px] opacity-[0.02] pointer-events-none"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.02, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center max-w-4xl">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-white mb-6 leading-[1.1] tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {title || "Have a Quality, Compliance or Performance Challenge?"}
        </motion.h2>

        <motion.p 
          className="text-xl text-white/70 mb-12 font-light max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {subtitle || "Let's discuss how we can help you build capability and improve results."}
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link to={primaryBtnLink || '/contact'} className="group">
            <button className="w-full sm:w-auto bg-[var(--color-gold-primary)] text-[#020E20] h-[52px] px-8 text-[13px] font-heading font-bold uppercase tracking-widest hover:bg-[var(--color-gold-light)] transition-colors flex items-center justify-center gap-3">
              {primaryBtnText || 'Contact Us'}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </Link>
          {secondaryBtnText && (
            <Link to={secondaryBtnLink || '/consultancy'}>
              <button className="w-full sm:w-auto bg-transparent border border-white/20 text-white h-[52px] px-8 text-[13px] font-heading font-bold uppercase tracking-widest hover:border-[var(--color-gold-primary)] hover:text-[var(--color-gold-primary)] transition-colors">
                {secondaryBtnText}
              </button>
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
