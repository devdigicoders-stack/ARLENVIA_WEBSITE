import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ApproachSection = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 70%"]
  });
  
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const steps = [
    { num: "01", title: "Practical", desc: "Solutions designed for real-world application, not just theoretical compliance." },
    { num: "02", title: "Risk-Based", desc: "Prioritizing actions where they create the most protection and value." },
    { num: "03", title: "Evidence-Based", desc: "Decisions grounded in factual analysis and measurable performance data." },
    { num: "04", title: "Performance-Oriented", desc: "Connecting compliance directly to overall business objectives and goals." },
    { num: "05", title: "Sustainable", desc: "Building internal capability that outlasts our direct engagement." }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#F7F6F2]" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-px bg-[var(--color-gold-primary)]" />
              <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
                Our Approach
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-[#020E20] leading-tight tracking-tight">
              How We Create <br className="hidden md:block" /> Sustainable Improvement
            </h2>
          </motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Timeline Background Line (Desktop) */}
          <div className="hidden lg:block absolute top-[48px] left-[10%] w-[80%] h-[1px] bg-[#E5E7EB]" />
          
          {/* Animated Fill Line (Desktop) */}
          <motion.div 
            className="hidden lg:block absolute top-[48px] left-[10%] w-[80%] h-[2px] bg-[var(--color-gold-primary)] origin-left z-0"
            style={{ scaleX }}
          />
          
          {/* Timeline Background Line (Mobile) */}
          <div className="lg:hidden absolute top-[48px] bottom-[48px] left-[47px] w-[1px] bg-[#E5E7EB]" />
          
          {/* Animated Fill Line (Mobile) */}
          <motion.div 
            className="lg:hidden absolute top-[48px] bottom-[48px] left-[47px] w-[2px] bg-[var(--color-gold-primary)] origin-top z-0"
            style={{ scaleY }}
          />

          <div className="flex flex-col lg:flex-row lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => {
              // Calculate highlight point based on index
              const startThreshold = index * 0.2;
              const isActive = useTransform(scrollYProgress, 
                [startThreshold - 0.1, startThreshold + 0.1], 
                [0, 1]
              );
              
              const color = useTransform(isActive, [0, 1], ["rgba(2, 14, 32, 0.3)", "rgba(2, 14, 32, 1)"]);
              const bgColor = useTransform(isActive, [0, 1], ["rgba(255, 255, 255, 1)", "rgba(213, 167, 46, 1)"]);
              const borderColor = useTransform(isActive, [0, 1], ["rgba(229, 231, 235, 1)", "rgba(213, 167, 46, 1)"]);

              return (
                <div key={index} className="flex flex-row lg:flex-col items-center lg:items-start text-left gap-8 lg:gap-0 lg:flex-1">
                  <motion.div 
                    className="w-24 h-24 rounded-full border-[1px] flex items-center justify-center shrink-0 mb-0 lg:mb-10 shadow-[0_0_0_8px_#F7F6F2] z-10"
                    style={{ backgroundColor: bgColor, borderColor: borderColor, color }}
                  >
                    <span className="text-[28px] font-heading font-semibold">
                      {step.num}
                    </span>
                  </motion.div>
                  
                  <div>
                    <h3 className="text-xl font-heading font-bold text-[#020E20] mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-[#667085] text-[15px] leading-relaxed max-w-[280px]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
