import React from 'react';
import { motion } from 'framer-motion';

const PhilosophySection = () => {
  const steps = [
    "Meet Requirements",
    "Control Risk",
    "Improve Processes",
    "Use Resources Effectively",
    "Make Better Decisions",
    "Improve Business Performance"
  ];

  return (
    <section className="py-24 bg-[var(--color-primary-deep)] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[var(--color-gold-primary)] font-bold text-sm tracking-widest uppercase mb-6 block">
            OUR PHILOSOPHY
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight w-full mx-auto">
            <span className="block mb-4 text-white">Compliance + Capability + Performance</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold-light)] to-[var(--color-gold-primary)] text-4xl md:text-5xl lg:text-6xl">
              = Sustainable Improvement
            </span>
          </h2>
        </motion.div>

        {/* Process Flow */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 lg:gap-6 relative">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div 
                className="bg-white/5 border border-white/10 hover:border-[var(--color-gold-primary)]/50 backdrop-blur-md px-6 py-4 rounded-full font-medium text-sm lg:text-base shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all cursor-default flex items-center gap-3 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[var(--color-gold-primary)]/10 text-[var(--color-gold-primary)] group-hover:bg-[var(--color-gold-primary)] group-hover:text-[var(--color-primary-navy)] transition-colors text-xs font-bold">
                  {index + 1}
                </span>
                <span className="text-white/90 group-hover:text-white transition-colors">{step}</span>
              </motion.div>
              {index < steps.length - 1 && (
                <motion.div 
                  className="text-white/20 font-light text-xl md:text-2xl rotate-90 md:rotate-0"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
                >
                  →
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
