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
    <section className="py-24 bg-[var(--color-primary-navy)] text-white relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Explore Our Areas of Expertise
          </motion.h2>
          <div className="w-24 h-1 bg-[var(--color-gold-primary)] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              onClick={() => {
                // Map the knowledge area to the blog filter if they match closely
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
              className="bg-white/5 border border-white/10 p-8 rounded-xl text-center hover:bg-[var(--color-gold-primary)] hover:border-[var(--color-gold-primary)] hover:text-[var(--color-primary-navy)] transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="font-bold text-lg">{area}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeAreas;
