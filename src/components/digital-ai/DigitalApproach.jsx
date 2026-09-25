import React from 'react';
import { motion } from 'framer-motion';

const DigitalApproach = () => {
  const steps = [
    { num: "01", title: "Understand", desc: "Identify business needs" },
    { num: "02", title: "Map", desc: "Understand current process & data flow" },
    { num: "03", title: "Simplify", desc: "Reduce unnecessary complexity" },
    { num: "04", title: "Digitize", desc: "Introduce appropriate digital method" },
    { num: "05", title: "Analyze", desc: "Improve data and performance visibility" },
    { num: "06", title: "Improve", desc: "Strengthen decision-making & performance" }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-[var(--color-primary-navy)] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Digital Approach
          </motion.h2>
          <div className="w-24 h-1 bg-[var(--color-gold-primary)] mx-auto" />
        </div>

        <div className="relative">
          {/* Horizontal Line */}
          <div className="hidden lg:block absolute top-8 left-0 w-full h-1 bg-gradient-to-r from-gray-100 via-[var(--color-gold-primary)]/30 to-gray-100 rounded" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((item, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-white border-[3px] border-gray-200 flex items-center justify-center text-xl font-bold text-[var(--color-primary-navy)]/40 mb-6 group-hover:scale-110 group-hover:border-[var(--color-gold-primary)] group-hover:text-[var(--color-gold-primary)] transition-all duration-300 shadow-sm">
                  {item.num}
                </div>
                
                <h3 className="text-lg font-bold text-[var(--color-primary-navy)] mb-2 group-hover:text-[var(--color-primary-corporate)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
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

export default DigitalApproach;
