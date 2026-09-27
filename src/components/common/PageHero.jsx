import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const PageHero = ({ label, title, description, breadcrumb, bgImage, bgImages }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = bgImages || (bgImage ? [bgImage] : []);

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [images.length]);

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[var(--color-primary-deep)] overflow-hidden">
      {/* Background Images & Overlay */}
      {images.length > 0 && (
        <div className="absolute inset-0 z-0">
          {images.map((img, index) => (
            <motion.img 
              key={index}
              src={img} 
              alt={`Hero Background ${index}`} 
              className="absolute inset-0 w-full h-full object-cover object-top"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ 
                opacity: index === currentImageIndex ? 1 : 0, 
                scale: index === currentImageIndex ? 1 : 1.05 
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          ))}
          <div className="absolute inset-0 bg-[var(--color-primary-deep)]/50 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-deep)] via-transparent to-transparent z-10" />
        </div>
      )}

      {/* Background with abstract shapes/glows */}
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
        <div className="absolute inset-0 bg-[#020E20]/50 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#073866]/40 via-[#020E20]/80 to-[#020E20] z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex items-center justify-center gap-4"
        >
          <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
          <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
            {label}
          </span>
          <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-8 text-white leading-[1.15] tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {title}
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-white/70 leading-relaxed font-light mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {description}
        </motion.p>

        {breadcrumb && (
          <motion.div 
            className="flex items-center justify-center gap-3 text-white/50 text-[11px] font-heading font-bold tracking-[0.15em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/" className="hover:text-[var(--color-gold-primary)] transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-white">{breadcrumb}</span>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PageHero;
