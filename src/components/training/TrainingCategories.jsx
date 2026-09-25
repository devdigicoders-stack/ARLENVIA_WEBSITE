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
    <section className="py-24 bg-[var(--color-warm-white)]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 lg:p-10 rounded-2xl border-t-4 border-[var(--color-gold-primary)] shadow-sm hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-[var(--color-primary-navy)] mb-6 pb-4 border-b border-gray-100">
                {cat.title}
              </h3>
              {cat.desc && <p className="text-gray-600 mb-4 italic">{cat.desc}</p>}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[var(--color-gold-primary)] mt-1">✔</span>
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
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
