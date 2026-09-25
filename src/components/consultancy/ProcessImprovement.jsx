import React from 'react';
import { motion } from 'framer-motion';

const ProcessImprovement = () => {
  const steps = [
    "Identify Processes",
    "Define Ownership",
    "Map Interactions",
    "Identify Risks & Controls",
    "Establish KPIs",
    "Improve Performance"
  ];

  return (
    <section className="py-24 bg-[var(--color-primary-navy)] text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[var(--color-gold-primary)] rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2 
            className="text-3xl lg:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Move From Documenting Processes to <span className="text-[var(--color-gold-light)]">Managing Them for Results</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-2">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                className="bg-[var(--color-primary-deep)] border border-[var(--color-gold-primary)]/30 px-6 py-5 rounded-xl shadow-lg w-full max-w-[220px] text-center hover:bg-[var(--color-gold-primary)]/10 hover:border-[var(--color-gold-primary)] transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className="font-semibold text-[var(--color-gold-light)] leading-tight">{step}</span>
              </motion.div>
              
              {index < steps.length - 1 && (
                <motion.div 
                  className="text-white/30 py-2 lg:py-0"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index * 0.1) + 0.1 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 lg:rotate-0 rotate-90">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessImprovement;
