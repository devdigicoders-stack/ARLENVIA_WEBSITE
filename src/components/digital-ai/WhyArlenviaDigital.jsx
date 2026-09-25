import React from 'react';
import { motion } from 'framer-motion';

const WhyArlenviaDigital = () => {
  const cards = [
    { title: "Practical Implementation", desc: "Digital solutions focused on what actually works in your daily operations." },
    { title: "Quality & Compliance Understanding", desc: "We know the requirements, ensuring digital tools enhance compliance." },
    { title: "Performance-Focused", desc: "Every tool is designed to yield measurable business improvements." },
    { title: "Human-Centered AI", desc: "Technology to support and enhance your team, not replace their judgment." },
    { title: "Responsible Governance", desc: "Ensuring data integrity, confidentiality, and clear accountability." },
    { title: "Sustainable Improvement", desc: "Building digital capability that continues to add value long-term." }
  ];

  return (
    <section className="py-24 bg-[var(--color-warm-white)]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-[var(--color-primary-navy)] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Technology With Business Purpose
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl border-t-4 border-[var(--color-primary-corporate)] shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[var(--color-gold-primary)] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-bold text-[var(--color-primary-navy)] mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyArlenviaDigital;
