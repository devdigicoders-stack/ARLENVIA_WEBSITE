import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ConsultancyApproach = () => {
  const steps = [
    { num: "01", title: "Understand", desc: "Business context and requirements" },
    { num: "02", title: "Assess", desc: "Systems, risks, gaps and performance" },
    { num: "03", title: "Design", desc: "Practical improvement solution" },
    { num: "04", title: "Implement", desc: "Support execution and capability building" },
    { num: "05", title: "Measure", desc: "Evaluate evidence and results" },
    { num: "06", title: "Improve", desc: "Drive continual improvement" }
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden" ref={containerRef}>
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
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-[#020E20] leading-[1.1] tracking-tight">
              Our Consultancy Approach
            </h2>
          </motion.div>
        </div>

        <div className="relative">
          {/* Horizontal Line Background for Desktop */}
          <div className="hidden lg:block absolute top-[40px] left-[8.33%] w-[83.33%] h-px bg-[#E5E7EB] -translate-y-1/2" />
          
          {/* Horizontal Scroll Progress Line */}
          <motion.div 
            className="hidden lg:block absolute top-[40px] left-[8.33%] h-[2px] bg-[var(--color-gold-primary)] -translate-y-1/2 origin-left z-0"
            style={{ width: '83.33%', scaleX: lineWidth }}
          />
          
          {/* Vertical Line for Mobile */}
          <div className="lg:hidden absolute top-[40px] bottom-[40px] left-[40px] w-px bg-[#E5E7EB]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-y-12 lg:gap-8 relative z-10">
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
                <div className="w-[80px] h-[80px] shrink-0 rounded-full bg-white border border-[#E5E7EB] group-hover:border-[var(--color-gold-primary)] flex items-center justify-center text-[28px] font-heading font-semibold text-[#020E20]/40 group-hover:text-[var(--color-gold-primary)] transition-all duration-500 shadow-sm lg:mb-8 relative z-10 shadow-[0_0_0_8px_white]">
                  {item.num}
                  {/* Subtle pulse ring on hover */}
                  <div className="absolute inset-0 rounded-full border border-[var(--color-gold-primary)] scale-100 group-hover:scale-125 opacity-0 group-hover:opacity-10 transition-all duration-700" />
                </div>
                
                <div>
                  <h3 className="text-[19px] font-heading font-bold text-[#020E20] mb-3 group-hover:text-[var(--color-gold-primary)] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[#667085] text-[15px] font-light leading-relaxed max-w-[200px] mx-auto">
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

export default ConsultancyApproach;
