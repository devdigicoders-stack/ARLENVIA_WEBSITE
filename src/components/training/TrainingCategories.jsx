import React from 'react';
import { motion } from 'framer-motion';

const TrainingCategories = () => {
  const items = [
    "ISO Awareness",
    "Internal Auditor Training",
    "Lead Auditor Development",
    "QMS Implementation",
    "Risk-Based Thinking",
    "Process Management",
    "KPI & Performance Management",
    "Management System Auditing",
    "Quality Tools & Continual Improvement",
    "Customized Corporate Training"
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#020E20] text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#073866] rounded-full blur-[150px] opacity-20" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <motion.h2 
            className="text-4xl lg:text-5xl font-heading font-semibold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Training Programs
          </motion.h2>
          <motion.p 
            className="text-white/70 text-lg font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Training that connects knowledge with workplace application.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 p-10 lg:p-16">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
            {items.map((item, idx) => (
              <motion.li 
                key={idx} 
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold-primary)] mt-2.5 shrink-0 group-hover:scale-150 transition-transform duration-500" />
                <span className="text-white/90 text-[17px] leading-relaxed group-hover:text-white transition-colors duration-500 font-light">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TrainingCategories;
