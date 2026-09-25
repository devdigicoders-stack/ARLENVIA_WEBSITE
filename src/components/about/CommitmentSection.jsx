import React from 'react';
import { motion } from 'framer-motion';

const CommitmentSection = () => {
  const commitments = [
    "Practical",
    "Objective",
    "Relevant",
    "Measurable",
    "Ethical",
    "Value-Focused"
  ];

  return (
    <section className="py-24 bg-[var(--color-warm-white)]">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          className="text-3xl lg:text-4xl font-bold text-[var(--color-primary-navy)] mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Commitment
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {commitments.map((word, index) => (
            <motion.div
              key={index}
              className="bg-white border-b-4 border-[var(--color-gold-primary)] py-8 px-4 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-[var(--color-primary-navy)]">
                {word}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
