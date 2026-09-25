import React from 'react';
import { motion } from 'framer-motion';

const BlogSearch = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="container mx-auto px-6 mb-16">
      <motion.div 
        className="max-w-2xl mx-auto relative"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <input 
          type="text" 
          placeholder="Search insights, topics or keywords..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white border border-gray-300 rounded-full py-4 pl-8 pr-14 text-gray-700 focus:outline-none focus:border-[var(--color-gold-primary)] focus:ring-1 focus:ring-[var(--color-gold-primary)] transition-all shadow-sm"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--color-primary-navy)] flex items-center justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogSearch;
