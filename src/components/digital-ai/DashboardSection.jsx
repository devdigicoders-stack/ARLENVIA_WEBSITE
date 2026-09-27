import React from 'react';
import { motion } from 'framer-motion';

const DashboardSection = () => {
  const blocks = [
    { title: "Quality KPIs", value: "98.5%", trend: "+2.1%", color: "text-[#4ade80]" },
    { title: "Process Performance", value: "Optimal", trend: "Stable", color: "text-[#60a5fa]" },
    { title: "Risk Indicators", value: "Low", trend: "-15%", color: "text-[#4ade80]" },
    { title: "Audit Findings", value: "12 Open", trend: "Needs Action", color: "text-[#fbbf24]" },
    { title: "Improvement Actions", value: "45", trend: "Completed", color: "text-[#60a5fa]" },
    { title: "Management Reporting", value: "Generated", trend: "Today", color: "text-[#9ca3af]" }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#020E20] text-white relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
              <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
                Visibility
              </span>
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-white mb-6 leading-[1.1] tracking-tight">
              Make Performance Visible
            </h2>
            <p className="text-white/50 text-[15px] font-light">Illustrative Management Dashboard Example</p>
          </motion.div>
        </div>

        {/* Mockup Dashboard Container */}
        <motion.div
          className="bg-white/5 backdrop-blur-md border border-white/10 p-8 lg:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.5)] max-w-5xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-gold-primary)]/10 rounded-full blur-[80px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

          {/* Header Mockup */}
          <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/10 flex items-center justify-center">
                <div className="w-4 h-4 bg-[var(--color-gold-primary)]" />
              </div>
              <span className="font-heading font-bold text-xl tracking-wide text-white">Performance Overview</span>
            </div>
            <div className="flex gap-3">
              <div className="w-20 h-10 bg-white/5" />
              <div className="w-10 h-10 bg-white/10" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {blocks.map((block, index) => (
              <motion.div
                key={index}
                className="bg-[#020E20] border border-white/5 p-8 hover:border-[var(--color-gold-primary)]/30 transition-all cursor-default group relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--color-gold-primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                <h3 className="text-white/40 font-heading font-bold text-[11px] uppercase tracking-widest mb-4 group-hover:text-white/60 transition-colors">{block.title}</h3>
                <div className="text-3xl lg:text-4xl font-heading font-light text-white mb-4 group-hover:text-[var(--color-gold-primary)] transition-colors duration-500">
                  {block.value}
                </div>
                <div className={`text-[13px] font-bold tracking-wide uppercase ${block.color}`}>
                  {block.trend}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Chart Mockup */}
          <div className="mt-8 h-40 bg-gradient-to-t from-white/5 to-transparent flex items-end px-6 gap-3 pb-6 relative z-10">
            {[40, 60, 45, 80, 55, 90, 70, 65, 100, 85].map((height, idx) => (
              <div key={idx} className="flex-1 bg-white/10 hover:bg-[var(--color-gold-primary)]/50 transition-colors duration-300" style={{ height: `${height}%` }} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardSection;
