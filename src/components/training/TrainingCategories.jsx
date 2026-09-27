import React from 'react';
import { motion } from 'framer-motion';

const TrainingCategories = () => {
  const categories = [
    {
      title: "Management Systems",
      items: [
        "ISO 9001:2015",
        "ISO 9001:2026",
        "ISO 14001",
        "ISO 45001",
        "ISO 55001",
        "ISO 29001",
        "ISO 19011",
        "ISO 9004"
      ]
    },
    {
      title: "Auditing & Assurance",
      items: [
        "Internal Auditor Training",
        "Lead Auditor Development",
        "Process Auditing",
        "Risk-Based Auditing",
        "Audit Planning and Execution",
        "Audit Reporting",
        "Corrective Action Verification",
        "Auditor Competence Development"
      ]
    },
    {
      title: "Quality & Performance",
      items: [
        "Quality Management Fundamentals",
        "Quality Tools and Techniques",
        "Root Cause Analysis",
        "Corrective and Preventive Action",
        "Risk-Based Thinking",
        "Performance Measurement and KPIs",
        "Continual Improvement",
        "Quality Culture & Organizational Excellence"
      ]
    },
    {
      title: "Customized Organizational Training",
      desc: "Programs based on:",
      items: [
        "Business objectives",
        "Management-system requirements",
        "Operational risks",
        "Competency gaps",
        "Audit findings",
        "Performance issues",
        "Improvement priorities"
      ]
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#020E20] text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#073866] rounded-full blur-[150px] opacity-20" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-px bg-white/10 p-px rounded-sm">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              className="bg-[#020E20] p-10 lg:p-14 hover:bg-white/5 transition-colors duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-heading font-semibold text-white mb-8 pb-6 border-b border-white/10 group-hover:border-[var(--color-gold-primary)]/50 transition-colors duration-500">
                {cat.title}
              </h3>
              {cat.desc && <p className="text-[var(--color-gold-primary)] text-sm mb-6 font-heading font-bold uppercase tracking-widest">{cat.desc}</p>}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold-primary)] mt-2 shrink-0 group-hover:scale-150 transition-transform duration-500" />
                    <span className="text-white/70 text-[15px] leading-relaxed group-hover:text-white/90 transition-colors duration-500 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingCategories;
