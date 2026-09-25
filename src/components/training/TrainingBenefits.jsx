import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaTools, FaClipboardCheck, FaPuzzlePiece, FaExclamationTriangle, FaChartLine } from 'react-icons/fa';

const TrainingBenefits = () => {
  const benefits = [
    { title: "Better Understanding", icon: <FaBrain /> },
    { title: "Practical Application", icon: <FaTools /> },
    { title: "Improved Audit Capability", icon: <FaClipboardCheck /> },
    { title: "Stronger Problem Solving", icon: <FaPuzzlePiece /> },
    { title: "Better Risk Awareness", icon: <FaExclamationTriangle /> },
    { title: "Improved Performance Thinking", icon: <FaChartLine /> }
  ];

  return (
    <section className="py-24 bg-[var(--color-warm-white)]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-[var(--color-primary-navy)] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Participants Should Gain
          </motion.h2>
          <div className="w-24 h-1 bg-[var(--color-gold-primary)] mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center hover:shadow-lg hover:-translate-y-1 hover:border-[var(--color-gold-primary)]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-6 text-[var(--color-primary-navy)]/60 group-hover:text-[var(--color-gold-primary)] transition-colors duration-300 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-[var(--color-primary-navy)] leading-snug group-hover:text-[var(--color-primary-corporate)] transition-colors">
                {benefit.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingBenefits;
