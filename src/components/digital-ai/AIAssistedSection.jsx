import React from 'react';
import { motion } from 'framer-motion';

const AIAssistedSection = () => {
  const cards = [
    { title: "AI-Assisted Analysis", desc: "Support in generating insights from complex data and information." },
    { title: "AI Awareness", desc: "Training for quality and business professionals to understand AI applications." },
    { title: "Human-AI Decision Support", desc: "Technology-assisted decision support with essential human oversight." },
    { title: "Automated Reporting", desc: "Structuring and reporting information efficiently using smart tools." }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          className="max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-[var(--color-primary-navy)] mb-6">
            AI That Supports Human Judgment
          </h2>
          <p className="text-xl text-[var(--color-primary-corporate)] font-medium">
            AI should enhance human judgment—not replace responsible decision-making.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="group bg-[var(--color-warm-white)] p-8 rounded-2xl border border-gray-200 hover:border-[var(--color-gold-primary)] transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Subtle tech background on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-navy)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white shadow-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-100 group-hover:shadow-[0_0_20px_rgba(213,167,46,0.3)] transition-shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[var(--color-gold-primary)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[var(--color-primary-navy)] mb-3">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAssistedSection;
