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
    <section className="py-24 lg:py-32 bg-[#F7F6F2]">
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
                Why Arlenvia
              </span>
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-[#020E20] mb-6 leading-[1.1] tracking-tight">
              Consultancy Designed Around Business Reality
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white p-10 lg:p-12 relative overflow-hidden group hover:shadow-xl transition-all duration-700 border border-[#E5E7EB] hover:border-[var(--color-gold-primary)]/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Decorative line */}
              <div className="w-8 h-[2px] bg-[var(--color-gold-primary)] mb-8 group-hover:w-full transition-all duration-700 ease-out" />
              
              <h3 className="text-[19px] font-heading font-bold text-[#020E20] mb-4 group-hover:text-[var(--color-gold-primary)] transition-colors duration-500">
                {card.title}
              </h3>
              <p className="text-[#667085] text-[15px] leading-relaxed font-light">
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
