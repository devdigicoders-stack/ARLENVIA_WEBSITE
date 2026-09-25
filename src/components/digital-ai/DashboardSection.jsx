import React from 'react';
import { motion } from 'framer-motion';

const DashboardSection = () => {
  const blocks = [
    { title: "Quality KPIs", value: "98.5%", trend: "+2.1%", color: "text-green-500" },
    { title: "Process Performance", value: "Optimal", trend: "Stable", color: "text-blue-500" },
    { title: "Risk Indicators", value: "Low", trend: "-15%", color: "text-green-500" },
    { title: "Audit Findings", value: "12 Open", trend: "Needs Action", color: "text-yellow-500" },
    { title: "Improvement Actions", value: "45", trend: "Completed", color: "text-blue-500" },
    { title: "Management Reporting", value: "Generated", trend: "Today", color: "text-gray-400" }
  ];

  return (
    <section className="py-24 bg-[var(--color-primary-navy)] text-white relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Make Performance Visible
          </motion.h2>
          <p className="text-gray-400">Illustrative Management Dashboard Example</p>
        </div>

        {/* Mockup Dashboard Container */}
        <motion.div
          className="bg-[#0b1625] border border-white/10 rounded-2xl p-6 lg:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Header Mockup */}
          <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[var(--color-gold-primary)]/20 flex items-center justify-center">
                <div className="w-4 h-4 bg-[var(--color-gold-primary)] rounded-sm" />
              </div>
              <span className="font-bold text-lg tracking-wide">Performance Overview</span>
            </div>
            <div className="flex gap-2">
              <div className="w-16 h-8 bg-white/5 rounded" />
              <div className="w-8 h-8 bg-white/10 rounded" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {blocks.map((block, index) => (
              <motion.div
                key={index}
                className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors cursor-default group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h3 className="text-gray-400 text-sm font-medium mb-3">{block.title}</h3>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-[var(--color-gold-light)] transition-colors">
                  {block.value}
                </div>
                <div className={`text-xs font-semibold ${block.color}`}>
                  {block.trend}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Chart Mockup */}
          <div className="mt-6 h-32 bg-gradient-to-t from-white/5 to-transparent rounded-xl flex items-end px-4 gap-2 pb-4">
            {[40, 60, 45, 80, 55, 90, 70, 65, 100, 85].map((height, idx) => (
              <div key={idx} className="flex-1 bg-[var(--color-primary-corporate)]/50 rounded-t-sm" style={{ height: `${height}%` }} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardSection;
