import React from 'react';
import { motion } from 'framer-motion';

const BlogFilters = ({ activeFilter, setActiveFilter }) => {
  const categories = [
    "All",
    "Management Systems",
    "Quality",
    "Auditing",
    "Business Performance",
    "Process Improvement",
    "Digital & AI",
    "Professional Development"
  ];

  return (
    <div className="container mx-auto px-6 max-w-7xl mb-12">
      <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
        {categories.map((cat, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2 text-[12px] uppercase tracking-widest font-heading font-bold transition-all duration-300 border ${
              activeFilter === cat 
                ? 'bg-[#020E20] text-white border-[#020E20]' 
                : 'bg-transparent text-[#667085] border-[#E5E7EB] hover:border-[var(--color-gold-primary)] hover:text-[#020E20]'
            }`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            {cat}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default BlogFilters;
