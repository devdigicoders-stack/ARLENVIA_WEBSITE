import React from 'react';
import { motion } from 'framer-motion';

const IndustriesSection = () => {
  const industries = [
    { name: "Infrastructure & Construction", num: "01" },
    { name: "Engineering & Technical", num: "02" },
    { name: "Government", num: "03" },
    { name: "Manufacturing", num: "04" },
    { name: "Education", num: "05" },
    { name: "Healthcare", num: "06" },
    { name: "Hospitality", num: "07" },
    { name: "SMEs", num: "08" }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-[#020E20] leading-[1.1] tracking-tight">
              Creating Capability Across Sectors
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#E5E7EB]">
          {industries.map((ind, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 border-b border-r border-[#E5E7EB] hover:bg-[#F7F6F2] transition-colors duration-500 group flex flex-col justify-between aspect-[3/2] cursor-default relative overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-[var(--color-gold-primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[13px] tracking-widest block">
                {ind.num}
              </span>
              <h3 className="text-[17px] font-heading font-bold text-[#020E20] leading-snug group-hover:text-[var(--color-gold-primary)] transition-colors duration-500">
                {ind.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
