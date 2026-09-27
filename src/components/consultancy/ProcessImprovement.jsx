import React from 'react';
import { motion } from 'framer-motion';

const ProcessImprovement = () => {
  const steps = [
    "Identify Processes",
    "Define Ownership",
    "Map Interactions",
    "Identify Risks & Controls",
    "Establish KPIs",
    "Improve Performance"
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#020E20] text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#073866]/40 via-transparent to-transparent opacity-80" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2 
            className="text-4xl lg:text-5xl font-heading font-semibold leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Move From Documenting Processes to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold-primary)] to-[#b58c28] italic font-light">Managing Them for Results</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-4 lg:gap-2">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                className="bg-[#F7F6F2] text-[#020E20] border-l-4 border-[var(--color-gold-primary)] px-6 py-6 w-full lg:w-[200px] hover:bg-[var(--color-gold-primary)] hover:text-[#020E20] transition-colors duration-500 flex items-center justify-center cursor-default group shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className="font-heading font-bold text-[14px] leading-tight text-center uppercase tracking-widest">{step}</span>
              </motion.div>
              
              {index < steps.length - 1 && (
                <motion.div 
                  className="text-white/20 py-2 lg:py-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index * 0.1) + 0.1 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8 lg:rotate-0 rotate-90 hidden lg:block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                  <div className="w-px h-8 bg-white/20 block lg:hidden" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessImprovement;
