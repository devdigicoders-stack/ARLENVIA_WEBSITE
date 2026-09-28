import React from 'react';
import { motion } from 'framer-motion';

const SupportAreas = () => {
  const areas = [
    { num: "01", title: "Management System Development & Improvement" },
    { num: "02", title: "ISO Implementation & Integration" },
    { num: "03", title: "Process Design & Optimization" },
    { num: "04", title: "Risk & Opportunity Management" },
    { num: "05", title: "Internal Audit & Audit Readiness" },
    { num: "06", title: "Management Review & Performance Monitoring" },
    { num: "07", title: "KPI & Objective Development" },
    { num: "08", title: "Objective Evidence & Compliance Monitoring" },
    { num: "09", title: "Continual Improvement" },
    { num: "10", title: "Integrated Management Systems" }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#020E20] text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-px bg-[var(--color-gold-primary)]" />
              <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
                Specialized Services
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-white leading-[1.1] tracking-tight">
              Consultancy Support Areas
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 p-px rounded-sm">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              className="bg-white/5 p-8 lg:p-10 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[13px] tracking-widest block">
                  {area.num}
                </span>
                <h3 className="text-[19px] font-heading font-bold text-[var(--color-gold-primary)] leading-tight">
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
