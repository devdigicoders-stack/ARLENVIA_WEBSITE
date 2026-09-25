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
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-[var(--color-gold-primary)]/10 blur-[120px] mix-blend-screen" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-[var(--color-primary-corporate)]/30 blur-[100px] mix-blend-screen" />
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
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-medium tracking-widest text-[var(--color-gold-light)] mb-6 uppercase">
              Arlenvia Training Consultancy Services
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl lg:text-6xl/tight font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Striking the Balance Between <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold-light)] to-[var(--color-gold-primary)]">Compliance</span> and Business Performance
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-300 mb-10 leading-relaxed font-light"
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
            <Link to="/consultancy">
              <Button variant="primary">
                Explore Our Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">
                Book a Consultation
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Right Visual */}
        <motion.div 
          className="relative hidden lg:block h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[var(--color-primary-navy)]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <AnimatePresence>
            {images.map((img, index) => (
              index === currentImageIndex && (
                <motion.img 
                  key={index}
                  src={img} 
                  alt={`Corporate Training Session ${index + 1}`} 
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5 }}
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
