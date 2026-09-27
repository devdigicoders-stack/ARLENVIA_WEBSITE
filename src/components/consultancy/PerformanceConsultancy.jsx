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
    <section className="py-24 lg:py-32 bg-[#020E20] text-white relative overflow-hidden">
      {/* Background Accent & Logo Watermark */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#073866]/30 via-transparent to-transparent opacity-80" />
        <motion.img 
          src={logo}
          alt="Arlenvia Logo Watermark"
          className="w-[120vw] md:w-[90vw] max-w-[800px] opacity-[0.02]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.02, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
              <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
                Performance Focus
              </span>
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-white leading-[1.1] tracking-tight mb-6">
              Compliance Is Only the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold-primary)] to-[#b58c28] italic font-light">Starting Point.</span>
            </h2>
            
            <p className="text-white/70 text-lg font-light leading-relaxed">
              Are your processes effective, efficient and creating measurable value?
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 p-px rounded-sm mb-24 overflow-hidden">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-[#020E20] p-6 lg:p-8 flex flex-col justify-between group hover:bg-[var(--color-gold-primary)] transition-colors duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center mb-12 text-[var(--color-gold-primary)] group-hover:border-[#020E20]/20 group-hover:text-[#020E20] transition-colors duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-[17px] leading-snug text-white group-hover:text-[#020E20] transition-colors duration-500">{card}</h3>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div 
          className="border-t border-b border-white/10 py-12 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-[15px] font-heading font-bold uppercase tracking-widest text-white/50 flex-wrap">
            <span className="hover:text-[var(--color-gold-primary)] transition-colors cursor-default">Are Processes Compliant?</span>
            <span className="hidden md:inline text-white/10">|</span>
            <span className="hover:text-[var(--color-gold-primary)] transition-colors cursor-default">Are They Effective?</span>
            <span className="hidden md:inline text-white/10">|</span>
            <span className="hover:text-[var(--color-gold-primary)] transition-colors cursor-default">Are They Efficient?</span>
            <span className="hidden md:inline text-white/10">|</span>
            <span className="hover:text-[var(--color-gold-primary)] transition-colors cursor-default">Are They Creating Value?</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceConsultancy;
