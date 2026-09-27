import React from 'react';
import { motion } from 'framer-motion';

const CapabilitySection = () => {
  const cards = [
    "Competency Frameworks",
    "Training Needs Assessments",
    "Auditor Competence",
    "Management-System Awareness",
    "Leadership & Accountability",
    "Quality Culture",
    "Performance-Oriented Teams"
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#F7F6F2] relative overflow-hidden border-t border-[#E5E7EB]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-gold-primary)]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
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
                Long-Term Value
              </span>
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-[#020E20] leading-[1.1] tracking-tight">
              Build Capability That Continues <br />
              <span className="italic font-light text-[var(--color-gold-primary)]">Beyond the Classroom</span>
            </h2>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white border border-[#E5E7EB] px-8 py-5 hover:bg-[#020E20] group transition-all duration-500 cursor-default shadow-sm hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <span className="font-heading font-bold text-[13px] tracking-widest uppercase text-[#020E20] group-hover:text-white transition-colors duration-500">
                {card}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitySection;
