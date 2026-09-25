import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from './Button';
import logo from '../../assets/logo/logo.png';

const CTASection = ({ title, subtitle, primaryBtnText, primaryBtnLink, secondaryBtnText, secondaryBtnLink }) => {
  return (
    <section className="relative py-24 bg-[var(--color-primary-navy)] overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-[var(--color-primary-navy)]/90 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-deep)] to-transparent z-10 opacity-80" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--color-gold-primary)]/5 blur-[100px] z-10" />
        
        {/* Logo Watermark */}
        <motion.img 
          src={logo}
          alt="Arlenvia Logo Watermark"
          className="absolute w-[90vw] max-w-[900px] opacity-[0.03] grayscale pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.03, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        
        {/* Abstract pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBoNDBWMEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDEwaDQwTTAgMjBoNDBNeCAzMGg0ME0xMCAwdjQwTTIwIDB2NDBNMzAgMHY0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmurlCtnKSIvPjwvc3ZnPg==')] opacity-10" />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center max-w-4xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.p 
            className="text-xl text-gray-300 mb-10 font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to={primaryBtnLink || '/contact'}>
            <Button variant="primary">
              {primaryBtnText || 'Talk to Our Consultants'}
            </Button>
          </Link>
          <Link to={secondaryBtnLink || '/consultancy'}>
            <Button variant="outline">
              {secondaryBtnText || 'Explore Our Services'}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
