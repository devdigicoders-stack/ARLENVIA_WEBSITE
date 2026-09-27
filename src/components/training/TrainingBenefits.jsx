import React from 'react';
import { motion } from 'framer-motion';

const TrainingBenefits = () => {
  const benefits = [
    { title: "Better Understanding", num: "01" },
    { title: "Practical Application", num: "02" },
    { title: "Improved Audit Capability", num: "03" },
    { title: "Stronger Problem Solving", num: "04" },
    { title: "Better Risk Awareness", num: "05" },
    { title: "Improved Performance Thinking", num: "06" }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#020E20] text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
              <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
                Learning Outcomes
              </span>
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-white leading-[1.1] tracking-tight">
              What Participants Should Gain
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-[#020E20] p-10 border-b border-r border-white/10 hover:bg-white/5 transition-colors duration-500 group flex flex-col justify-between aspect-[4/3] cursor-default relative overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-[var(--color-gold-primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <span className="text-white/20 font-heading font-bold text-5xl mb-6 group-hover:text-[var(--color-gold-primary)]/20 transition-colors duration-500">
                {benefit.num}
              </span>
              <h3 className="text-xl font-heading font-bold text-white leading-snug group-hover:text-[var(--color-gold-primary)] transition-colors duration-500 max-w-[200px]">
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
