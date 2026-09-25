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
    <div className="container mx-auto px-6 mb-12">
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((cat, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
              activeFilter === cat 
                ? 'bg-[var(--color-primary-navy)] text-white border-[var(--color-primary-navy)] shadow-md' 
                : 'bg-white text-gray-600 border-gray-200 hover:border-[var(--color-primary-corporate)] hover:text-[var(--color-primary-corporate)]'
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
