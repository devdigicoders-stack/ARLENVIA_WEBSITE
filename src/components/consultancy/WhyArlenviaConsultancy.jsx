import React from 'react';
import { motion } from 'framer-motion';

const WhyArlenviaConsultancy = () => {
  const cards = [
    { title: "Practical Recommendations", desc: "We focus on what actually works in your daily operations, not just what the standard says." },
    { title: "Objective & Evidence-Based", desc: "Our advice and solutions are always backed by data, facts, and objective evidence." },
    { title: "Risk-Based Approach", desc: "Prioritizing actions based on what poses the most significant risk to your business objectives." },
    { title: "Performance-Oriented", desc: "Every consultancy engagement is designed to yield measurable business improvements." },
    { title: "Capability Development", desc: "We leave your team stronger and more capable of managing systems independently." },
    { title: "Sustainable Improvement", desc: "Ensuring that the changes we help implement continue to add value long-term." }
  ];

  return (
    <section className="py-24 bg-[var(--color-warm-white)]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl lg:text-5xl font-bold text-[var(--color-primary-navy)] mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Consultancy Designed Around Business Reality
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white p-10 rounded-xl border-l-4 border-[var(--color-gold-primary)] shadow-sm hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-[var(--color-primary-navy)] mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyArlenviaConsultancy;
