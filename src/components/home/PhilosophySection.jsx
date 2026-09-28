import React from 'react';
import { motion } from 'framer-motion';

const PhilosophyStep = ({ label, index, isLast }) => (
  <div className="flex flex-col items-start w-full">
    <motion.div 
      className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-5 w-full md:w-4/5 relative z-10 transition-all hover:bg-white/20 hover:border-[var(--color-gold-primary)] group"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-center gap-6">
        <span className="text-[var(--color-gold-primary)] font-heading font-light text-2xl opacity-60 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
        <span className="font-heading font-bold text-white text-[14px] tracking-widest uppercase">{label}</span>
      </div>
    </motion.div>
    
    {!isLast && (
      <div className="h-16 w-[2px] bg-gradient-to-b from-[var(--color-gold-primary)] to-transparent ml-[42px] my-1 relative opacity-40" />
    )}
  </div>
);

const PhilosophySection = () => {
  const steps = [
    "Meet Requirements",
    "Control Risk",
    "Improve Processes",
    "Use Resources Effectively",
    "Make Better Decisions",
    "Improve Business Performance"
  ];

  return (
    <section className="relative bg-[#020E20] text-white">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#073866]/30 via-[#020E20] to-[#020E20] opacity-80" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Column - Sticky Text */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-32 pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
                  Core Philosophy
                </span>
                <div className="h-px w-12 bg-[var(--color-gold-primary)]/50" />
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold leading-[1.1] tracking-tight mb-8">
                <span className="block mb-4 text-white/90">Compliance + Capability + Performance</span>
                <span className="block font-serif italic font-normal text-[var(--color-gold-light)] opacity-90 tracking-wide mt-2 text-[0.95em]">
                  = Sustainable Improvement
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-white/70 text-[17px] md:text-[19px] leading-relaxed font-light max-w-xl"
            >
              <p>
                Our philosophy is simple: we believe that systems are only as good as the performance they deliver.
              </p>
              <p>
                By shifting the focus from simply meeting requirements to actively managing risks and improving processes, organizations can unlock their true capability.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="w-full lg:w-1/2 pt-10 lg:pt-0">
            <div className="flex flex-col">
              {steps.map((step, index) => (
                <PhilosophyStep 
                  key={index} 
                  label={step} 
                  index={index} 
                  isLast={index === steps.length - 1} 
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
