import React from 'react';
import { motion } from 'framer-motion';

const DigitalCapabilities = () => {
  const cards = [
    { title: "Digital Management-System Processes", desc: "Organizing traditional or manual processes into structured, traceable digital workflows." },
    { title: "Process Visualization & Digital Workflows", desc: "Visually mapping processes and interactions for better clarity and control." },
    { title: "KPI & Performance Dashboards", desc: "Presenting critical performance indicators in clear, accessible management dashboards." },
    { title: "Data-Driven Quality Monitoring", desc: "Utilizing quality data effectively for real-time analysis and continuous monitoring." },
    { title: "Management Reporting", desc: "Enhancing reporting mechanisms to improve overall information visibility for leadership." },
    { title: "Automated Information Management", desc: "Streamlining routine reporting and information handling to reduce administrative burden." }
  ];

  return (
    <section className="py-24 bg-[var(--color-warm-white)]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-[var(--color-primary-navy)] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Digital Capability Areas
          </motion.h2>
          <div className="w-24 h-1 bg-[var(--color-gold-primary)] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-[0_15px_30px_rgba(3,28,54,0.08)] hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Hover Top Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-gold-primary)] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <h3 className="text-xl font-bold text-[var(--color-primary-navy)] mb-4 leading-snug">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalCapabilities;
