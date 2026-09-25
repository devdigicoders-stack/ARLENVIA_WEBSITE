import React from 'react';
import { motion } from 'framer-motion';

const CustomizedProcess = () => {
  const steps = [
    { num: "01", title: "Identify Needs" },
    { num: "02", title: "Assess Competency Gaps" },
    { num: "03", title: "Design Program" },
    { num: "04", title: "Deliver Training" },
    { num: "05", title: "Evaluate Learning" },
    { num: "06", title: "Support Improvement" }
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
            Customized Training Process
          </motion.h2>
          <div className="w-24 h-1 bg-[var(--color-gold-primary)] mx-auto" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-8 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 rounded" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((item, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-[var(--color-gold-primary)] border-2 border-[var(--color-gold-primary)] flex items-center justify-center text-xl font-bold text-white mb-4 shadow-md transition-all duration-300">
                  {item.num}
                </div>
                <h3 className="text-sm font-bold text-gray-700 group-hover:text-[var(--color-primary-navy)] transition-colors">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizedProcess;
