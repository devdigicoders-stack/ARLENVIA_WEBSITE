import React from 'react';
import { motion } from 'framer-motion';

const WhyContactArlenvia = () => {
  const cards = [
    { title: "Consultancy", desc: "Expert guidance to build and improve effective management systems." },
    { title: "Training", desc: "Application-focused programs to develop professional competence." },
    { title: "Assessment", desc: "Independent reviews to ensure readiness and compliance." },
    { title: "Performance Improvement", desc: "Practical solutions that yield measurable business results." }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#020E20] text-white relative">
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
                Core Capabilities
              </span>
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-white mb-6 leading-[1.1] tracking-tight">
              Practical Support Built Around <span className="italic font-light text-[var(--color-gold-primary)]">Your Requirements</span>
            </h2>
            <p className="text-white/60 text-[17px] font-light max-w-2xl mx-auto leading-[1.8]">
              Arlenvia provides practical support to organizations through tailored management systems, training, performance optimization, process improvement, and assessment services.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white/5 p-10 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group flex flex-col cursor-default"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="font-heading font-bold text-[14px] uppercase tracking-widest text-[var(--color-gold-primary)] mb-4 leading-relaxed">
                {card.title}
              </h3>
              <p className="text-white/70 text-[13px] font-light leading-relaxed mt-auto">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyContactArlenvia;
