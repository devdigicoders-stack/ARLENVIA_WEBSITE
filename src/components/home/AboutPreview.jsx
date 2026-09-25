import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import aboutImage from '../../assets/images/about_arlenvia.jpg';

const AboutPreview = () => {
  return (
    <section className="py-24 bg-[var(--color-warm-white)] overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Visual */}
        <motion.div
          className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(3,28,54,0.1)] group"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={aboutImage} 
            alt="About Arlenvia Consultancy" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary-navy)]/30 to-transparent mix-blend-overlay" />
          <div className="absolute w-64 h-64 border border-[var(--color-gold-primary)]/40 rounded-full -left-10 -bottom-10 pointer-events-none" />
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 flex items-center gap-4">
            <div className="h-px w-8 bg-[var(--color-gold-primary)]" />
            <span className="text-[var(--color-gold-primary)] font-bold text-sm tracking-widest uppercase">
              ABOUT ARLENVIA
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-primary-navy)] mb-6 leading-tight">
            Transforming Standards Into Practical Business Results
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Arlenvia focuses on helping organizations bridge the gap between compliance requirements and actual business capability. Through expert management systems consultancy, quality assurance, organizational performance improvement, and practical training, we deliver sustainable solutions.
          </p>
          
          <Link 
            to="/about" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-primary-navy)] text-white font-bold rounded hover:bg-[var(--color-primary-corporate)] transition-colors group"
          >
            Discover Arlenvia
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
