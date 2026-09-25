import React from 'react';
import { motion } from 'framer-motion';

const CorePhilosophy = () => {
  const steps = [
    "Meet Requirements",
    "Control Risk",
    "Improve Processes",
    "Use Resources Effectively",
    "Make Better Decisions",
    "Improve Business Performance"
  ];

  return (
    <section className="py-24 bg-[var(--color-primary-deep)] text-white text-center relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 max-w-4xl mx-auto leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Compliance <span className="text-[var(--color-gold-primary)]">+</span> Capability <span className="text-[var(--color-gold-primary)]">+</span> Performance <br className="hidden md:block" />
          <span className="text-[var(--color-gold-light)]">= Sustainable Improvement</span>
        </motion.h2>

        <div className="mt-12 overflow-hidden flex whitespace-nowrap relative w-full pb-8">
          {/* Fading Edges for smooth look */}
          <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-48 bg-gradient-to-r from-[var(--color-primary-deep)] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-48 bg-gradient-to-l from-[var(--color-primary-deep)] to-transparent z-10" />
          
          <motion.div 
            className="flex min-w-max gap-8 items-center py-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {[...steps, ...steps].map((step, index) => (
              <div key={index} className="flex items-center gap-8 group">
                <div className="bg-[var(--color-primary-navy)] border border-white/10 px-8 py-5 rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:border-[var(--color-gold-primary)]/50">
                  <span className="font-semibold text-lg tracking-wide text-[var(--color-gold-light)]">{step}</span>
                </div>
                
                <div className="text-[var(--color-gold-primary)]/70">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CorePhilosophy;
