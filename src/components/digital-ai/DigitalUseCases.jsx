import React from 'react';
import { motion } from 'framer-motion';

const DigitalUseCases = () => {
  const useCases = [
    "Management Systems",
    "Auditing",
    "Quality Monitoring",
    "Performance Management",
    "Reporting",
    "Process Improvement",
    "Decision Support",
    "Organizational Learning"
  ];

  return (
    <section className="py-24 bg-[var(--color-warm-white)]">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          className="text-2xl lg:text-3xl font-bold text-[var(--color-primary-navy)] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Where Digital & AI Can Help
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="bg-white px-4 py-5 rounded-lg border border-gray-100 shadow-sm hover:border-[var(--color-gold-primary)]/50 hover:shadow-md transition-all duration-300 font-medium text-[var(--color-primary-navy)] text-sm lg:text-base cursor-default"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {useCase}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalUseCases;
