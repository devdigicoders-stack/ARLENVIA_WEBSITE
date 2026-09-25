import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import trainingImage from '../../assets/images/training_section.jpg';

const TrainingSection = () => {
  const chips = [
    "Management Systems",
    "Auditing & Assurance",
    "Quality & Performance",
    "Customized Training"
  ];

  return (
    <section className="py-24 bg-[var(--color-warm-white)]">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Visual */}
        <motion.div
          className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(3,28,54,0.1)] group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={trainingImage} 
            alt="Interactive Professional Training Seminar" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-corporate)]/30 to-transparent mix-blend-overlay" />
          {/* Decorative element */}
          <div className="absolute inset-0 border-[6px] border-[var(--color-gold-primary)]/20 rounded-2xl m-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 flex items-center gap-4">
            <div className="h-px w-8 bg-[var(--color-primary-corporate)]" />
            <span className="text-[var(--color-primary-corporate)] font-bold text-sm tracking-widest uppercase">
              TRAINING & PROFESSIONAL DEVELOPMENT
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-primary-navy)] mb-6 leading-tight">
            Practical Learning That Creates Workplace Capability
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Our training is application-focused and highly interactive, designed to ensure that participants don't just understand requirements, but can effectively apply them to improve organizational performance.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-10">
            {chips.map((chip, index) => (
              <span 
                key={index} 
                className="bg-white border border-gray-200 text-[var(--color-primary-navy)] font-semibold px-4 py-2 rounded-full text-sm shadow-sm"
              >
                {chip}
              </span>
            ))}
          </div>
          
          <Link 
            to="/training" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-gold-primary)] text-white font-bold rounded hover:bg-[var(--color-primary-navy)] transition-colors shadow-md"
          >
            Explore Training Programs
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingSection;
