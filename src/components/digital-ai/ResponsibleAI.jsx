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
    <section className="py-24 bg-[var(--color-primary-deep)] text-white relative overflow-hidden">
      {/* Subtle moving line pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBoODBWMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMCA4MGw4MC04ME0wIDQwbDQwLTQwTTQwIDgwbDQwLTQwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIi8+PC9zdmc+')] animate-[slide_20s_linear_infinite]" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          className="text-3xl lg:text-4xl font-bold mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Responsible Use Comes First
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              className="bg-[var(--color-primary-navy)] border border-[var(--color-gold-primary)]/30 px-8 py-6 rounded-xl hover:border-[var(--color-gold-primary)] transition-all duration-300 shadow-[0_10px_30px_rgba(3,28,54,0.5)]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-[var(--color-gold-primary)] mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white tracking-wide">{principle}</h3>
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
