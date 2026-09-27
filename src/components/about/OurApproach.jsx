import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const OurApproach = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 80%"]
  });
  
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const approaches = [
    { num: "01", title: "Understand", desc: "Business requirements, processes, risks, and current situation." },
    { num: "02", title: "Assess", desc: "Evaluate gaps, risks, effectiveness, and opportunities." },
    { num: "03", title: "Develop", desc: "Design suitable systems, processes, and customized solutions." },
    { num: "04", title: "Implement", desc: "Practical implementation and internal capability building." },
    { num: "05", title: "Measure", desc: "Monitor KPIs, collect evidence, and track performance." },
    { num: "06", title: "Improve", desc: "Drive continual improvement and sustainable results." },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#020E20] text-white overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-24 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
              <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
                How We Work
              </span>
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-white leading-[1.1] tracking-tight">
              A Practical Approach to Sustainable Improvement
            </h2>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[18px] left-0 w-full h-[1px] bg-white/10" />
          
          {/* Animated Fill Line (Desktop) */}
          <motion.div 
            className="hidden lg:block absolute top-[18px] left-0 h-[2px] bg-[var(--color-gold-primary)] origin-left z-0"
            style={{ scaleX }}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-y-12 gap-x-6 relative z-10">
            {approaches.map((item, index) => (
              <motion.div 
                key={index}
                className="relative group flex flex-col lg:items-start text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Node */}
                <div className="w-10 h-10 rounded-full bg-[#020E20] border-[4px] border-[#020E20] ring-1 ring-white/20 flex items-center justify-center mb-6 z-10 group-hover:ring-[var(--color-gold-primary)] transition-colors duration-500">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-gold-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <h3 className="text-[20px] font-heading font-bold mb-3 text-white">
                  <span className="text-[var(--color-gold-primary)] mr-2 font-light">{item.num}</span> 
                  {item.title}
                </h3>
                
                <p className="text-white/60 text-[14px] leading-relaxed max-w-[200px] font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
