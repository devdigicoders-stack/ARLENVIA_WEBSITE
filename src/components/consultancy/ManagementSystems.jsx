import React from 'react';
import { motion } from 'framer-motion';

const ManagementSystems = () => {
  const standards = [
    { iso: "ISO 9001", name: "Quality Management Systems" },
    { iso: "ISO 14001", name: "Environmental Management Systems" },
    { iso: "ISO 45001", name: "Occupational Health & Safety Management Systems" },
    { iso: "ISO 55001", name: "Asset Management Systems" },
    { iso: "ISO 29001", name: "Quality Management for Petroleum, Petrochemical & Natural Gas Industries" },
    { iso: "ISO 19011", name: "Guidelines for Auditing Management Systems" },
    { iso: "ISO 9004", name: "Quality Management – Performance Improvement" }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#F7F6F2] relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/50 to-transparent z-0 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
              <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
                International Standards
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-[#020E20] leading-[1.1] tracking-tight mb-6">
              Management Systems & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold-primary)] to-[#b58c28]">
                Quality Consultancy
              </span>
            </h2>
            
            <p className="text-[#667085] text-lg font-light leading-relaxed max-w-2xl">
              Support for organizations establishing, improving, maintaining, or transitioning management systems to international standards.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {standards.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white border border-[#E5E7EB] p-8 hover:border-[var(--color-gold-primary)]/50 hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              {/* Hover Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-gold-primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <h3 className="text-2xl font-heading font-bold text-[#020E20] mb-3 group-hover:text-[var(--color-gold-primary)] transition-colors duration-300">
                {item.iso}
              </h3>
              <p className="text-[#667085] text-[15px] leading-relaxed font-light">
                {item.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagementSystems;
