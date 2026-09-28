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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white/10 p-10 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between h-[240px] cursor-default relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Huge Background Number */}
              <div className="absolute -right-4 -bottom-6 text-[120px] font-heading font-bold text-[var(--color-gold-primary)]/10 leading-none z-0 transition-transform duration-300 group-hover:scale-110">
                {benefit.num}
              </div>
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
                  Outcome {benefit.num}
                </span>
                
                <h3 className="text-[22px] font-heading font-semibold text-[var(--color-gold-primary)] leading-snug max-w-[220px]">
                  {benefit.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingBenefits;
