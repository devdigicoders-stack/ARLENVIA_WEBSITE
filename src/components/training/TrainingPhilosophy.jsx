import React from 'react';
import { motion } from 'framer-motion';

const TrainingPhilosophy = () => {
  const steps = ['Understand', 'Apply', 'Demonstrate', 'Improve'];

  return (
    <section className="py-24 bg-white text-center">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated 4-step flow */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="bg-[var(--color-primary-navy)] text-white py-3 px-6 rounded-full font-bold shadow-lg text-lg border border-[var(--color-gold-primary)]/30">
                  {step}
                </div>
                {index < steps.length - 1 && (
                  <div className="text-[var(--color-gold-primary)] transform md:-rotate-90">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl text-[var(--color-primary-navy)] font-light leading-relaxed">
            Training should not stop at knowledge. It should build <span className="font-bold text-[var(--color-gold-primary)]">confidence</span>, <span className="font-bold text-[var(--color-gold-primary)]">competence</span> and <span className="font-bold text-[var(--color-gold-primary)]">practical application</span>.
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingPhilosophy;
