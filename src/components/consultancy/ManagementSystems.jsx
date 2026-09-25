import React from 'react';
import { motion } from 'framer-motion';

const ManagementSystems = () => {
  const standards = [
    { iso: "ISO 9001", name: "Quality Management Systems" },
    { iso: "ISO 14001", name: "Environmental Management Systems" },
    { iso: "ISO 45001", name: "Occupational Health & Safety Management Systems" },
    { iso: "ISO 55001", name: "Asset Management Systems" },
    { iso: "ISO 29001", name: "Quality Management for Petroleum, Petrochemical & Natural Gas Industries" },
    { iso: "ISO 19011", name: "Guidelines for Auditing Management Systems" },
    { iso: "ISO 9004", name: "Quality Management – Performance Improvement" }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--color-warm-white)] to-transparent z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.h2 
            className="text-3xl lg:text-5xl font-bold text-[var(--color-primary-navy)] mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Management Systems & <br />
            <span className="text-[var(--color-gold-primary)]">Quality Consultancy</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Support for organizations establishing, improving, maintaining or transitioning management systems.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {standards.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 p-8 rounded-xl hover:shadow-[0_20px_40px_rgba(3,28,54,0.08)] hover:border-[var(--color-gold-primary)]/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <h3 className="text-2xl font-bold text-[var(--color-primary-navy)] mb-3 group-hover:text-[var(--color-gold-primary)] transition-colors">
                {item.iso}
              </h3>
              <p className="text-gray-600 text-sm font-medium leading-relaxed">
                {item.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagementSystems;
