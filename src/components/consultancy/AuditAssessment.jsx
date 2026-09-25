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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-[var(--color-primary-navy)] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Independent Assessment for Better Decisions
          </motion.h2>
          <div className="w-24 h-1 bg-[var(--color-gold-primary)] mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {columns.map((col, index) => (
            <motion.div
              key={index}
              className="bg-[var(--color-warm-white)] p-8 rounded-2xl border border-gray-100 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-[var(--color-primary-navy)] mb-6 pb-4 border-b-2 border-[var(--color-gold-primary)]/30 inline-block">
                {col.title}
              </h3>
              <ul className="space-y-4">
                {col.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[var(--color-gold-primary)] mt-1">✔</span>
                    <span className="text-gray-700 font-medium">{item}</span>
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
