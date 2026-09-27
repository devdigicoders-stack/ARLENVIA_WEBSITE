import React from 'react';
import { motion } from 'framer-motion';

const TrainingPhilosophy = () => {
  const steps = ['Understand', 'Apply', 'Demonstrate', 'Improve'];

  return (
    <section className="py-24 lg:py-32 bg-white text-center border-b border-[#E5E7EB]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Animated 4-step flow */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-16">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="text-[#020E20] font-heading font-bold text-[13px] tracking-widest uppercase relative group cursor-default">
                  {step}
                  <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-[var(--color-gold-primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
                {index < steps.length - 1 && (
                  <div className="text-[var(--color-gold-primary)]/50 transform md:-rotate-90 hidden md:block">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                )}
                {index < steps.length - 1 && (
                  <div className="w-px h-6 bg-[var(--color-gold-primary)]/20 md:hidden" />
                )}
              </React.Fragment>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-heading text-[#020E20] font-light leading-[1.3] tracking-tight">
            Training should not stop at knowledge. It should build <span className="font-semibold text-[var(--color-gold-primary)] italic">confidence</span>, <span className="font-semibold text-[var(--color-gold-primary)] italic">competence</span> and <span className="font-semibold text-[var(--color-gold-primary)] italic">practical application</span>.
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingPhilosophy;
