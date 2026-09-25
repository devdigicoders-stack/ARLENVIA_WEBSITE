import React from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/logo/logo.png';

const PerformanceConsultancy = () => {
  const cards = [
    "Business Process Improvement",
    "KPI Development",
    "Performance Monitoring Frameworks",
    "Operational Efficiency",
    "Risk-Based Decision Making",
    "Cost of Poor Quality Analysis",
    "Process Effectiveness Assessment",
    "Organizational Performance Reviews",
    "Management Dashboards",
    "Improvement Planning"
  ];

  return (
    <section className="py-24 bg-[var(--color-primary-deep)] text-white relative overflow-hidden">
      {/* Background Accent & Logo Watermark */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-[var(--color-gold-primary)] rounded-full blur-[120px] opacity-10" />
        <motion.img 
          src={logo}
          alt="Arlenvia Logo Watermark"
          className="w-[90vw] max-w-[900px] opacity-[0.02] grayscale"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.02, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Compliance Is Only the <span className="text-[var(--color-gold-light)]">Starting Point.</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Are your processes effective, efficient and creating measurable value?
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-20">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 hover:border-[var(--color-gold-primary)]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="w-8 h-8 rounded-full bg-[var(--color-gold-primary)]/20 flex items-center justify-center mb-4 text-[var(--color-gold-primary)]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg leading-tight">{card}</h3>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div 
          className="bg-[var(--color-primary-navy)] border border-[var(--color-gold-primary)]/30 p-10 rounded-2xl text-center max-w-4xl mx-auto shadow-[0_0_40px_rgba(213,167,46,0.1)]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xl lg:text-2xl font-bold text-[var(--color-gold-light)] flex-wrap">
            <span>Are Processes Compliant?</span>
            <span className="hidden md:inline text-white/20">•</span>
            <span>Are They Effective?</span>
            <span className="hidden md:inline text-white/20">•</span>
            <span>Are They Efficient?</span>
            <span className="hidden md:inline text-white/20">•</span>
            <span>Are They Creating Value?</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceConsultancy;
