import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PhilosophySection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const steps = [
    "Meet Requirements",
    "Control Risk",
    "Improve Processes",
    "Use Resources Effectively",
    "Make Better Decisions",
    "Improve Business Performance"
  ];

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="py-32 bg-[#020E20] text-white overflow-hidden relative border-y border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#073866]/30 via-[#020E20] to-[#020E20] opacity-80" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="mb-24 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex justify-center items-center gap-4 mb-8">
            <span className="w-12 h-px bg-[var(--color-gold-primary)]" />
            <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
              Core Philosophy
            </span>
            <span className="w-12 h-px bg-[var(--color-gold-primary)]" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold leading-[1.1] tracking-tight">
            <span className="block mb-4 text-white/90">Compliance + Capability + Performance</span>
            <span className="block text-white font-light italic">
              = Sustainable Improvement
            </span>
          </h2>
        </motion.div>

        {/* Process Flow - Desktop (Horizontal) */}
        <div className="hidden lg:block relative max-w-6xl mx-auto mt-32 mb-20">
          <div className="absolute top-[28px] left-[8.33%] w-[83.33%] h-[1px] bg-white/20" />
          <motion.div 
            className="absolute top-[28px] left-[8.33%] w-[83.33%] h-[1px] bg-[var(--color-gold-primary)] origin-left"
            style={{ scaleX }}
          />
          
          <div className="grid grid-cols-6 gap-4 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative group">
                <motion.div 
                  className="w-14 h-14 rounded-full bg-[#031C36] border border-white/20 flex items-center justify-center text-[var(--color-gold-light)] font-heading font-bold text-lg mb-8 relative z-10 group-hover:border-[var(--color-gold-primary)] group-hover:bg-[var(--color-gold-primary)] group-hover:text-[#020E20] transition-colors duration-500 shadow-[0_0_0_8px_#020E20]"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {index + 1}
                </motion.div>
                <motion.span 
                  className="text-[15px] font-heading font-semibold text-white/70 group-hover:text-[var(--color-gold-primary)] transition-colors duration-300 max-w-[140px]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  {step}
                </motion.span>
              </div>
            ))}
          </div>
        </div>

        {/* Process Flow - Mobile (Vertical) */}
        <div className="lg:hidden relative ml-4 mt-16 pb-4">
          <div className="absolute top-[28px] bottom-[28px] left-[27px] w-[2px] bg-white/20" />
          <motion.div 
            className="absolute top-[28px] bottom-[28px] left-[27px] w-[2px] bg-[var(--color-gold-primary)] origin-top"
            style={{ scaleY }}
          />
          
          <div className="flex flex-col gap-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-8 group">
                <motion.div 
                  className="w-14 h-14 rounded-full bg-[#031C36] border border-white/20 flex items-center justify-center text-[var(--color-gold-light)] font-heading font-bold text-lg relative z-10 shrink-0 group-hover:border-[var(--color-gold-primary)] group-hover:bg-[var(--color-gold-primary)] group-hover:text-[#020E20] transition-colors duration-500 shadow-[0_0_0_8px_#020E20]"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {index + 1}
                </motion.div>
                <motion.span 
                  className="text-lg font-heading font-semibold text-white/80 group-hover:text-[var(--color-gold-primary)] transition-colors duration-300"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  {step}
                </motion.span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PhilosophySection;
