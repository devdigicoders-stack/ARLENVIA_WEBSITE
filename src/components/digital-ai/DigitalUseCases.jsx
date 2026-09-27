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
    <section className="py-24 lg:py-32 bg-[#F7F6F2] border-t border-[#E5E7EB]">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-[#020E20] mb-4 tracking-tight">
            Where Digital & AI Can Help
          </h2>
          <div className="w-16 h-px bg-[var(--color-gold-primary)] mx-auto" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="bg-white border border-[#E5E7EB] px-8 py-4 hover:bg-[#020E20] group transition-all duration-500 cursor-default shadow-sm hover:shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <span className="font-heading font-bold text-[13px] tracking-widest uppercase text-[#020E20] group-hover:text-white transition-colors duration-500">
                {useCase}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalUseCases;
