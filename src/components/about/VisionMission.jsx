import React from 'react';
import { motion } from 'framer-motion';

const VisionMission = () => {
  return (
    <section className="py-20 bg-[var(--color-primary-navy)] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-gold-primary)] rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-8">
        {/* Vision Card */}
        <motion.div
          className="bg-[var(--color-primary-deep)]/80 backdrop-blur-md p-10 lg:p-14 rounded-2xl border border-white/5 hover:border-[var(--color-gold-primary)]/50 transition-colors duration-500 group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 bg-[var(--color-gold-primary)]/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-[var(--color-gold-primary)]/20 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--color-gold-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">OUR VISION</h3>
          <h4 className="text-xl text-[var(--color-gold-light)] font-medium mb-6 leading-relaxed">
            To Be a Trusted Training & Consultancy Partner
          </h4>
          <p className="text-gray-300 leading-relaxed text-lg">
            Our vision is to become the trusted partner for organizations seeking to transform quality, compliance, and organizational capability into measurable business performance. We strive to set the standard for practical, effective consultancy.
          </p>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          className="bg-white p-10 lg:p-14 rounded-2xl shadow-xl hover:shadow-[0_0_30px_rgba(213,167,46,0.15)] transition-shadow duration-500"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-16 h-16 bg-[var(--color-primary-navy)]/10 rounded-xl flex items-center justify-center mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--color-primary-corporate)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-[var(--color-primary-navy)] mb-6">OUR MISSION</h3>
          <ul className="space-y-4">
            {[
              "Strengthen management systems",
              "Improve operational performance",
              "Develop competent people",
              "Identify risks & opportunities",
              "Use data for better decisions",
              "Achieve sustainable performance"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="text-[var(--color-gold-primary)] mt-1">✔</span>
                <span className="text-gray-700 font-medium text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;
