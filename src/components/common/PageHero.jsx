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
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 -right-1/4 w-[600px] h-[600px] rounded-full bg-[var(--color-gold-primary)]/10 blur-[100px] mix-blend-screen" />
        {/* Logo watermark */}
        <div className="absolute -left-1/4 -bottom-1/4 text-[var(--color-gold-primary)]/5 text-[20rem] font-bold font-serif select-none pointer-events-none transform -rotate-12">
          A
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="inline-block py-1 px-3 rounded-full border border-[var(--color-gold-primary)]/30 text-sm font-medium tracking-widest text-[var(--color-gold-light)] uppercase">
            {label}
          </span>
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {title}
        </motion.h1>

        <motion.div
          className="w-24 h-1 bg-[var(--color-gold-primary)] mx-auto mb-6"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        <motion.p 
          className="text-lg md:text-xl text-gray-300 leading-relaxed font-light mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {description}
        </motion.p>

        {breadcrumb && (
          <motion.div 
            className="text-gray-400 text-sm font-medium tracking-wider uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link to="/" className="hover:text-[var(--color-gold-light)] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{breadcrumb}</span>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PageHero;
