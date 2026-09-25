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
    <section className="py-24 bg-[var(--color-primary-navy)] text-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Practical Support Built Around <span className="text-[var(--color-gold-light)]">Your Requirements</span>
          </motion.h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Arlenvia provides practical support to organizations through tailored management systems, training, performance optimization, process improvement, and assessment services.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white/5 border border-white/10 p-8 rounded-xl text-center hover:bg-[var(--color-primary-corporate)]/30 hover:border-[var(--color-gold-primary)]/50 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-[var(--color-gold-light)] mb-3">{card.title}</h3>
              <p className="text-gray-400 text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyContactArlenvia;
