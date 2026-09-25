import React from 'react';
import { motion } from 'framer-motion';

const SupportAreas = () => {
  const areas = [
    { num: "01", title: "Gap Assessment & Readiness Reviews" },
    { num: "02", title: "Internal Audit Program Development" },
    { num: "03", title: "Management Review & Performance Evaluation" },
    { num: "04", title: "Corrective Action & Continual Improvement" },
    { num: "05", title: "Risk & Opportunity Management" },
    { num: "06", title: "Process Mapping & Improvement" },
    { num: "07", title: "Documentation & Implementation Support" },
    { num: "08", title: "Supplier Quality & Compliance Audits" } // Added to balance the grid perfectly
  ];

  return (
    <section className="py-20 bg-[var(--color-warm-white)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-[var(--color-primary-navy)] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Consultancy Support Areas
          </motion.h2>
          <div className="w-24 h-1 bg-[var(--color-gold-primary)] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md border-t-4 border-t-[var(--color-gold-primary)] relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              {/* Default Gold Watermark */}
              <div className="absolute -right-6 -bottom-6 text-8xl font-bold text-[var(--color-gold-primary)]/10 pointer-events-none select-none font-serif">
                {area.num}
              </div>
              
              <div className="relative z-10">
                <span className="text-[var(--color-gold-primary)] font-bold text-lg mb-4 block">
                  {area.num}
                </span>
                <h3 className="text-xl font-bold text-[var(--color-primary-navy)] leading-tight">
                  {area.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportAreas;
