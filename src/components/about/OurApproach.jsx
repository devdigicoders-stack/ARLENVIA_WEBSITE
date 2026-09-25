import React from 'react';
import { motion } from 'framer-motion';

const OurApproach = () => {
  const approaches = [
    { num: "01", title: "Understand", desc: "Business requirements, processes, risks, and current situation." },
    { num: "02", title: "Assess", desc: "Evaluate gaps, risks, effectiveness, and opportunities." },
    { num: "03", title: "Develop", desc: "Design suitable systems, processes, and customized solutions." },
    { num: "04", title: "Implement", desc: "Practical implementation and internal capability building." },
    { num: "05", title: "Measure", desc: "Monitor KPIs, collect evidence, and track performance." },
    { num: "06", title: "Improve", desc: "Drive continual improvement and sustainable results." },
  ];

  return (
    <section className="py-24 bg-[var(--color-primary-navy)] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-[var(--color-gold-primary)] font-bold tracking-wider text-sm uppercase mb-4 block">
            How We Work
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold">
            A Practical Approach to Sustainable Improvement
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-8 left-0 w-full h-1 bg-white/10 -translate-y-1/2 rounded" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
            {approaches.map((item, index) => (
              <motion.div 
                key={index}
                className="relative group flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Node */}
                <div className="w-16 h-16 rounded-full bg-[var(--color-gold-primary)] border-2 border-[var(--color-gold-primary)] flex items-center justify-center text-xl font-bold text-[var(--color-primary-deep)] mb-6 shadow-[0_0_15px_rgba(213,167,46,0.3)] scale-110">
                  {item.num}
                </div>
                
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
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
