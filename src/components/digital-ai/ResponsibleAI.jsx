import React from 'react';
import { motion } from 'framer-motion';

const ResponsibleAI = () => {
  const principles = [
    "Data Quality",
    "Human Oversight",
    "Governance",
    "Confidentiality",
    "Accountability"
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#020E20] text-white relative overflow-hidden">
      {/* Subtle moving line pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBoODBWMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMCA4MGw4MC04ME0wIDQwbDQwLTQwTTQwIDgwbDQwLTQwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC41KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIi8+PC9zdmc+')] animate-[slide_20s_linear_infinite]" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
            <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
              Core Principles
            </span>
            <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-white leading-[1.1] tracking-tight">
            Responsible Use <span className="italic font-light text-[var(--color-gold-primary)]">Comes First</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-6xl mx-auto">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              className="bg-[var(--color-gold-primary)] border border-[var(--color-gold-primary)] px-8 py-8 transition-all duration-500 flex flex-col items-center min-w-[200px]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-[#020E20] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-[15px] font-heading font-bold text-[#020E20] uppercase tracking-widest">{principle}</h3>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slide {
          from { background-position: 0 0; }
          to { background-position: 80px 80px; }
        }
      `}} />
    </section>
  );
};

export default ResponsibleAI;
