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
    <section className="py-24 lg:py-32 bg-[#020E20]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
              <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
                Our Values
              </span>
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-white leading-[1.1] tracking-tight">
              Our Commitment
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10 p-px rounded-sm overflow-hidden">
          {commitments.map((word, index) => (
            <motion.div
              key={index}
              className="bg-[var(--color-gold-primary)] py-12 px-6 flex items-center justify-center cursor-default hover:-translate-y-1 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-[17px] font-heading font-bold text-[#020E20] uppercase tracking-widest text-center">
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
