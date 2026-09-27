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
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-center">
          {/* Left Side: Image */}
          <motion.div 
            className="relative aspect-[4/3] lg:aspect-square overflow-hidden"
            initial={{ opacity: 0, clipPath: 'inset(10% 10% 10% 10%)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <img 
              src={teamImage} 
              alt="Consultant Team" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] hover:scale-[1.05] ease-out"
            />
            {/* Subtle overlay to make it look premium */}
            <div className="absolute inset-0 bg-[#073866]/10 mix-blend-multiply" />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
                Consultancy Overview
              </span>
              <div className="h-px w-12 bg-[var(--color-gold-primary)]/50" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-[#020E20] mb-8 leading-[1.1] tracking-tight">
              Practical Consultancy. Real Organizational Impact.
            </h2>
            
            <p className="text-[#667085] text-lg leading-relaxed mb-12 font-light">
              Arlenvia supports organizations in establishing, improving, maintaining, and transitioning management systems. Our consultancy focus is not limited to documentation or achieving certification; our primary objective is practical implementation and measurable performance improvement that aligns with your business goals.
            </p>

            {/* Quick Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {highlights.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4 border-b border-[#E5E7EB] pb-4 group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold-primary)] group-hover:scale-150 transition-transform duration-300" />
                  <span className="font-heading font-bold text-[#020E20] text-[15px]">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConsultancyOverview;
