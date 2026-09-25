import React from 'react';
import { motion } from 'framer-motion';

const DigitalAudit = () => {
  const points = [
    "Digital Audit Approaches",
    "Quality Monitoring",
    "Compliance Monitoring",
    "Performance Visibility",
    "Reporting Support"
  ];

  return (
    <section className="py-24 bg-[var(--color-warm-white)]">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-primary-navy)] mb-8 leading-tight">
            Modernizing Audit and Monitoring Activities
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Transition from traditional, paper-heavy auditing and monitoring to streamlined digital approaches that provide real-time visibility, improved accuracy, and faster reporting.
          </p>

          <ul className="space-y-5">
            {points.map((point, index) => (
              <motion.li 
                key={index}
                className="flex items-center gap-4 text-lg font-medium text-[var(--color-primary-corporate)]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[var(--color-gold-primary)] shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                {point}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right: Abstract Visual */}
        <motion.div 
          className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(3,28,54,0.1)] bg-[var(--color-primary-navy)]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 p-8 flex flex-col gap-4">
            <div className="h-1/3 w-full bg-gradient-to-r from-[var(--color-primary-corporate)] to-[var(--color-primary-deep)] rounded-xl opacity-50 animate-pulse" />
            <div className="flex-grow flex gap-4">
              <div className="w-1/3 h-full bg-gradient-to-t from-[var(--color-gold-primary)]/20 to-transparent rounded-xl" />
              <div className="w-2/3 h-full bg-gradient-to-bl from-white/10 to-transparent rounded-xl flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-[var(--color-gold-primary)]/50 border-t-[var(--color-gold-light)] rounded-full animate-spin" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalAudit;
