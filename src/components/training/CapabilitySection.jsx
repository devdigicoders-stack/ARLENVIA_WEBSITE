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
    <section className="py-24 bg-[var(--color-primary-navy)] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-primary-corporate)]/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl lg:text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Build Capability That Continues <br />
            <span className="text-[var(--color-gold-light)]">Beyond the Classroom</span>
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-4 rounded-lg hover:bg-[var(--color-gold-primary)] hover:border-[var(--color-gold-primary)] hover:text-[var(--color-primary-navy)] transition-all duration-300 font-medium shadow-md cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              {card}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitySection;
