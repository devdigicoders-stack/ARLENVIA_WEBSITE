import React from 'react';
import { motion } from 'framer-motion';

const ConsultancyApproach = () => {
  const steps = [
    { num: "01", title: "Understand", desc: "Business context and requirements" },
    { num: "02", title: "Assess", desc: "Systems, risks, gaps and performance" },
    { num: "03", title: "Design", desc: "Practical improvement solution" },
    { num: "04", title: "Implement", desc: "Support execution and capability building" },
    { num: "05", title: "Measure", desc: "Evaluate evidence and results" },
    { num: "06", title: "Improve", desc: "Drive continual improvement" }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-[var(--color-primary-navy)] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Consultancy Approach
          </motion.h2>
          <div className="w-24 h-1 bg-[var(--color-gold-primary)] mx-auto" />
        </div>

        <div className="relative">
          {/* Horizontal Line for Desktop (Centered on nodes) */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 rounded" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((item, index) => (
              <motion.div 
                key={index}
                className="relative group flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Node */}
                <div className="w-20 h-20 rounded-full bg-white border-[3px] border-[var(--color-gold-primary)] flex items-center justify-center text-2xl font-bold text-[var(--color-gold-primary)] mb-6 shadow-md bg-clip-padding">
                  {item.num}
                </div>
                
                <h3 className="text-xl font-bold text-[var(--color-primary-navy)] mb-3 group-hover:text-[var(--color-primary-corporate)] transition-colors">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
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

export default ConsultancyApproach;
