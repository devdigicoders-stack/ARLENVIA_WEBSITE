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
    <section className="py-24 bg-[var(--color-primary-corporate)] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-navy)] to-[var(--color-primary-corporate)] opacity-90 z-0" />
      
      {/* Decorative Data Nodes background */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTMwIDBoMzB2MzBoLTMwdi0zMHptMCAzMGgzMHYzMGgtMzB2LTMwek0wIDBoMzB2MzBoLTMwdi0zMHptMCAzMGgzMHYzMGgtMzB2LTMweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNnKSIvPjwvc3ZnPg==')] " />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <motion.h2 
            className="text-3xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            From Data Collection to <span className="text-[var(--color-gold-light)]">Actionable Insight</span>
          </motion.h2>
          <div className="w-24 h-1 bg-[var(--color-gold-primary)]" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Visual Flow */}
          <div className="flex flex-col gap-3">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="w-8 h-8 rounded-full bg-[var(--color-primary-deep)] border-2 border-[var(--color-gold-primary)] flex items-center justify-center shadow-[0_0_10px_rgba(213,167,46,0.3)] z-10">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-gold-light)]" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-lg flex-grow font-semibold hover:bg-[var(--color-gold-primary)]/20 hover:border-[var(--color-gold-primary)] transition-all">
                  {step}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Side Cards */}
          <div className="grid sm:grid-cols-2 gap-4 h-fit">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="bg-[var(--color-primary-deep)]/80 backdrop-blur-md p-6 rounded-xl border border-white/5 hover:border-[var(--color-gold-primary)]/40 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-[var(--color-gold-light)] mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">{card}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnalytics;
