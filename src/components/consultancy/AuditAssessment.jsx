import React from 'react';
import { motion } from 'framer-motion';

const AuditAssessment = () => {
  const columns = [
    {
      title: "Internal & Process Audits",
      items: [
        "Internal Audits",
        "Process Audits",
        "Supplier & Contractor Audits"
      ]
    },
    {
      title: "Assessment & Readiness",
      items: [
        "QMS Assessments",
        "Compliance Gap Assessments",
        "Readiness Assessments",
        "Maturity Assessments"
      ]
    },
    {
      title: "Follow-Up & Improvement",
      items: [
        "Audit Program Development",
        "Corrective Action Effectiveness Reviews",
        "Follow-Up Assessments"
      ]
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
              <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
                Data-Driven Insights
              </span>
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-[#020E20] leading-[1.1] tracking-tight mb-6">
              Independent Assessment for Better Decisions
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {columns.map((col, index) => (
            <motion.div
              key={index}
              className="bg-[#F7F6F2] p-10 lg:p-12 relative overflow-hidden group hover:bg-[#020E20] transition-colors duration-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Animated Border Top */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-gold-primary)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
              
              <h3 className="text-[22px] font-heading font-bold text-[#020E20] group-hover:text-white transition-colors duration-700 mb-8 pb-4 border-b border-[#020E20]/10 group-hover:border-white/10 inline-block">
                {col.title}
              </h3>
              <ul className="space-y-6">
                {col.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold-primary)] mt-2 shrink-0 group-hover:scale-150 transition-transform duration-500" />
                    <span className="text-[#667085] font-light text-[15px] leading-relaxed group-hover:text-white/80 transition-colors duration-700">{item}</span>
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

export default AuditAssessment;
