import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const DigitalApproach = () => {
  const steps = [
    { num: "01", title: "Understand", desc: "Identify business needs" },
    { num: "02", title: "Map", desc: "Understand current process & data flow" },
    { num: "03", title: "Simplify", desc: "Reduce unnecessary complexity" },
    { num: "04", title: "Digitize", desc: "Introduce appropriate digital method" },
    { num: "05", title: "Analyze", desc: "Improve data and performance visibility" },
    { num: "06", title: "Improve", desc: "Strengthen decision-making & performance" }
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 lg:py-32 bg-[#020E20] text-white relative overflow-hidden" ref={containerRef}>
      {/* Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-gold-primary)] rounded-full blur-[180px] opacity-[0.05]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
              <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
                Methodology
              </span>
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-white leading-[1.1] tracking-tight">
              Our Digital Approach
            </h2>
          </motion.div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Horizontal Line Background for Desktop */}
          <div className="hidden lg:block absolute top-[40px] left-[5%] w-[90%] h-px bg-white/10 -translate-y-1/2" />
          
          {/* Horizontal Scroll Progress Line */}
          <motion.div 
            className="hidden lg:block absolute top-[40px] left-[5%] h-[2px] bg-[var(--color-gold-primary)] -translate-y-1/2 origin-left z-0"
            style={{ width: '90%', scaleX: lineWidth }}
          />
          
          {/* Vertical Line for Mobile */}
          <div className="lg:hidden absolute top-0 left-[40px] w-px h-full bg-white/10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-y-12 lg:gap-6 relative z-10">
            {steps.map((item, index) => (
              <motion.div 
                key={index}
                className="relative group flex flex-row lg:flex-col items-center lg:items-center text-left lg:text-center gap-8 lg:gap-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Node */}
                <div className="w-[80px] h-[80px] shrink-0 rounded-full bg-[#020E20] border border-white/10 group-hover:border-[var(--color-gold-primary)] flex items-center justify-center text-xl font-heading font-light text-white/30 group-hover:text-[var(--color-gold-primary)] transition-all duration-500 shadow-sm lg:mb-8 relative z-10">
                  {item.num}
                  {/* Subtle pulse ring on hover */}
                  <div className="absolute inset-0 rounded-full border border-[var(--color-gold-primary)] scale-100 group-hover:scale-125 opacity-0 group-hover:opacity-20 transition-all duration-700" />
                </div>
                
                <div>
                  <h3 className="text-[15px] font-heading font-bold text-white uppercase tracking-widest group-hover:text-[var(--color-gold-primary)] transition-colors duration-300 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-[13px] font-light leading-relaxed max-w-[150px] mx-auto hidden lg:block">
                    {item.desc}
                  </p>
                  <p className="text-white/50 text-[14px] font-light leading-relaxed lg:hidden">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalApproach;
