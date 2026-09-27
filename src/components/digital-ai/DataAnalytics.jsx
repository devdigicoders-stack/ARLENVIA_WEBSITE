import React from 'react';
import { motion } from 'framer-motion';

const DataAnalytics = () => {
  const steps = [
    "Collect Data",
    "Organize Information",
    "Analyze Performance",
    "Identify Trends",
    "Support Decisions",
    "Improve Results"
  ];

  const cards = [
    "Quality & Compliance Analytics",
    "KPI Monitoring",
    "Performance Dashboards",
    "Trend Analysis",
    "Management Reporting"
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#F7F6F2] relative overflow-hidden border-t border-[#E5E7EB]">
      {/* Decorative Data Nodes background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTMwIDBoMzB2MzBoLTMwdi0zMHptMCAzMGgzMHYzMGgtMzB2LTMwek0wIDBoMzB2MzBoLTMwdi0zMHptMCAzMGgzMHYzMGgtMzB2LTMweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDIsMTQsMzIsMC41KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIi8+PC9zdmc+')] " />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
              <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
                Analytics Workflow
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-[#020E20] leading-[1.1] tracking-tight">
              From Data Collection to <br />
              <span className="italic font-light text-[var(--color-gold-primary)]">Actionable Insight</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">
          {/* Left: Visual Flow */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-[#E5E7EB]" />
            <div className="flex flex-col gap-6 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-6 group cursor-default"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-8 h-8 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center z-10 group-hover:border-[var(--color-gold-primary)] transition-colors duration-300">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-gold-primary)]/40 group-hover:bg-[var(--color-gold-primary)] group-hover:scale-150 transition-all duration-300" />
                  </div>
                  <div className="text-[17px] font-heading font-bold text-[#020E20] group-hover:text-[var(--color-gold-primary)] transition-colors duration-300">
                    {step}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Side Cards */}
          <div className="grid sm:grid-cols-2 gap-4 h-fit">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 border border-[#E5E7EB] hover:border-[var(--color-gold-primary)]/50 transition-all duration-500 hover:shadow-xl group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-[var(--color-gold-primary)]/50 group-hover:text-[var(--color-gold-primary)] transition-colors duration-300 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-[#020E20] text-[17px] leading-snug">{card}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnalytics;
