import React from 'react';
import { motion } from 'framer-motion';

const ApproachStep = ({ label, index, isLast }) => (
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

const BeyondCompliance = () => {
  const approachSteps = [
    "Requirements",
    "Processes",
    "People & Capability",
    "Objective Evidence",
    "Measurement & KPIs",
    "Performance",
    "Continual Improvement"
  ];

  return (
    <section className="relative bg-[#020E20] text-white">
      {/* Abstract Background Gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-bl from-[#073866]/30 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[100%] bg-gradient-to-tr from-[var(--color-gold-primary)]/5 to-transparent pointer-events-none" />
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
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-semibold text-white mb-8 leading-[1.1] tracking-tight">
                Beyond Compliance. <br className="hidden lg:block" />
                <span className="text-[var(--color-gold-primary)] italic font-light">Toward Performance.</span>
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
                A management system should be more than a set of procedures prepared for an audit.
              </p>
              <p>
                At Arlenvia, we connect requirements, processes, people, objective evidence and performance measures to help organizations build management systems that work in practice—and continuously improve.
              </p>
              <div className="h-[2px] w-16 bg-[var(--color-gold-primary)] my-10" />
              <p className="text-white font-medium text-[20px] md:text-[24px] leading-snug">
                Because compliance establishes the foundation.<br className="hidden md:block" /> Performance demonstrates the value.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="w-full lg:w-1/2 pt-10 lg:pt-0">
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-3 py-1.5 px-5 text-[11px] font-heading font-bold tracking-[0.2em] text-[#020E20] uppercase bg-[var(--color-gold-primary)] rounded-full">
                The Arlenvia Approach
              </span>
            </motion.div>

            <div className="flex flex-col">
              {approachSteps.map((step, index) => (
                <ApproachStep 
                  key={index} 
                  label={step} 
                  index={index} 
                  isLast={index === approachSteps.length - 1} 
                />
              ))}
            </div>

            <motion.div 
              className="mt-20 p-8 bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group hover:border-[var(--color-gold-primary)]/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-gold-primary)] group-hover:w-2 transition-all" />
              <p className="text-white font-heading font-light text-[20px] md:text-[24px] leading-relaxed">
                <span className="font-bold">From</span> compliance <span className="font-bold">to</span> capability.<br/> 
                <span className="font-bold">From</span> processes <span className="font-bold">to</span> performance.<br/> 
                <span className="font-bold">From</span> systems <span className="font-bold">to</span> sustainable improvement.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BeyondCompliance;
