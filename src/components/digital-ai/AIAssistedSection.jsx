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
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <motion.div
          className="max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
            <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
              AI Philosophy
            </span>
            <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-[#020E20] mb-6 leading-[1.1] tracking-tight">
            AI That Supports <span className="italic font-light text-[var(--color-gold-primary)]">Human Judgment</span>
          </h2>
          <p className="text-[#667085] text-lg font-light">
            AI should enhance human judgment—not replace responsible decision-making.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E7EB] border border-[#E5E7EB]">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="group bg-white p-10 hover:bg-[#F7F6F2] transition-all duration-500 relative overflow-hidden flex flex-col items-center justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Subtle tech background on hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--color-gold-primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
              
              <div className="relative z-10 w-full">
                <div className="w-14 h-14 bg-[#F7F6F2] rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-[#020E20] transition-colors duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 text-[#020E20] group-hover:text-[var(--color-gold-primary)] transition-colors duration-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <h3 className="text-[17px] font-heading font-bold text-[#020E20] mb-4 group-hover:text-[var(--color-gold-primary)] transition-colors duration-300">{card.title}</h3>
                <p className="text-[#667085] text-[15px] leading-relaxed font-light">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAssistedSection;
