import React from 'react';
import { motion } from 'framer-motion';
import teamImage from '../../assets/images/about_arlenvia.jpg';

const ConsultancyOverview = () => {
  const highlights = [
    "Management Systems",
    "Process Improvement",
    "Risk & Compliance",
    "Performance Management"
  ];

  return (
    <section className="py-24 bg-[var(--color-warm-white)]">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Image */}
        <motion.div 
          className="relative group"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl relative">
            <img 
              src={teamImage} 
              alt="Consultant Team" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Subtle overlay to make it look premium */}
            <div className="absolute inset-0 bg-[var(--color-primary-navy)]/10 mix-blend-multiply" />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--color-gold-primary)]/20 rounded-full blur-2xl" />
          <div className="absolute -top-6 -left-6 w-40 h-40 bg-[var(--color-primary-corporate)]/20 rounded-full blur-2xl" />
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[var(--color-gold-primary)] font-bold tracking-wider text-sm uppercase mb-4 block">
            Consultancy Overview
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-primary-navy)] mb-6 leading-tight">
            Practical Consultancy. Real Organizational Impact.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Arlenvia supports organizations in establishing, improving, maintaining, and transitioning management systems. Our consultancy focus is not limited to documentation or achieving certification; our primary objective is practical implementation and measurable performance improvement that aligns with your business goals.
          </p>

          {/* Quick Highlights */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="w-2 h-2 rounded-full bg-[var(--color-gold-primary)]" />
                <span className="font-semibold text-[var(--color-primary-navy)] text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultancyOverview;
