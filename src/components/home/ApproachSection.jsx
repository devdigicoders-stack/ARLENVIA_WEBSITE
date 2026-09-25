import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ApproachSection = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const steps = [
    { num: "01", title: "Practical", desc: "Solutions designed for real-world application, not just theory." },
    { num: "02", title: "Risk-Based", desc: "Prioritizing actions where they create the most value and protection." },
    { num: "03", title: "Evidence-Based", desc: "Decisions grounded in factual analysis and measurable data." },
    { num: "04", title: "Performance-Oriented", desc: "Connecting compliance directly to business objectives." },
    { num: "05", title: "Sustainable", desc: "Building internal capability that outlasts our engagement." }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-[var(--color-primary-navy)] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How We Create Sustainable Improvement
          </motion.h2>
          <div className="w-24 h-1 bg-[var(--color-primary-corporate)] mx-auto" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Background Line */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gray-100 rounded" />
          
          {/* Animated Fill Line */}
          <motion.div 
            className="hidden lg:block absolute top-12 left-0 h-1 bg-gradient-to-r from-[var(--color-gold-primary)] to-[var(--color-primary-corporate)] rounded origin-left"
            style={{ scaleX, width: '100%' }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center lg:items-start text-center lg:text-left group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-24 h-24 rounded-full bg-white border-4 border-[var(--color-gold-primary)] flex items-center justify-center mb-6 shadow-[0_10px_20px_rgba(212,175,55,0.15)] relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
                  <span className="text-2xl font-black text-[var(--color-gold-primary)] font-mono">
                    {step.num}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-[var(--color-primary-corporate)] mb-3 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed pr-4">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
