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
    <section className="py-24 bg-[#F7F6F2] text-[#020E20] text-center relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-20 max-w-5xl mx-auto leading-[1.15] tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Compliance <span className="text-[var(--color-gold-primary)]">+</span> Capability <span className="text-[var(--color-gold-primary)]">+</span> Performance <br className="hidden md:block" />
          <span className="text-[var(--color-gold-primary)]">= Sustainable Improvement</span>
        </motion.h2>

        <div className="mt-12 overflow-hidden flex whitespace-nowrap relative w-full pb-8">
          {/* Fading Edges for smooth look */}
          <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-64 bg-gradient-to-r from-[#F7F6F2] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-64 bg-gradient-to-l from-[#F7F6F2] to-transparent z-10" />
          
          <motion.div 
            className="flex min-w-max gap-8 items-center py-4"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
          >
            {[...steps, ...steps].map((step, index) => (
              <div key={index} className="flex items-center gap-8 group">
                <div className="bg-white border border-[#E5E7EB] px-10 py-6 rounded-sm shadow-sm transition-transform duration-500 group-hover:-translate-y-2 group-hover:border-[var(--color-gold-primary)]/50 group-hover:shadow-xl">
                  <span className="font-heading font-bold text-xl tracking-wide text-[#020E20]">{step}</span>
                </div>
                
                <div className="text-[var(--color-gold-primary)]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
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
