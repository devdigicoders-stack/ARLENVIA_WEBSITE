import React from 'react';
import { motion } from 'framer-motion';

const KnowledgeAreas = ({ setActiveFilter }) => {
  const areas = [
    "Management Systems",
    "Audit & Assessment",
    "Quality & Performance",
    "Process Management",
    "Training & Capability",
    "Digital Innovation & AI"
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#020E20] text-white relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
              <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
                Themes
              </span>
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-white mb-6 leading-[1.1] tracking-tight">
              Explore Our <span className="italic font-light text-[var(--color-gold-primary)]">Areas of Expertise</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              onClick={() => {
                const mappedFilter = 
                  area === "Audit & Assessment" ? "Auditing" : 
                  area === "Quality & Performance" ? "Quality" : 
                  area === "Process Management" ? "Process Improvement" :
                  area === "Training & Capability" ? "Professional Development" :
                  area === "Digital Innovation & AI" ? "Digital & AI" :
                  area;
                
                if (setActiveFilter) {
                   setActiveFilter(mappedFilter);
                   window.scrollTo({ top: 400, behavior: 'smooth' });
                }
              }}
              className="bg-white/5 p-10 text-center hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex items-center justify-center min-h-[160px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="font-heading font-bold text-[15px] uppercase tracking-widest text-[var(--color-gold-primary)] leading-relaxed">
                {area}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeAreas;
