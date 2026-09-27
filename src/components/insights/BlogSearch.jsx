import React from 'react';
import { motion } from 'framer-motion';

const BlogSearch = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="container mx-auto px-6 max-w-7xl mb-16">
      <motion.div 
        className="max-w-2xl mx-auto relative group"
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
          className="w-full bg-transparent border-b border-[#E5E7EB] py-4 pl-0 pr-12 text-[#020E20] placeholder-[#667085] font-light focus:outline-none focus:border-[var(--color-gold-primary)] transition-colors text-[17px]"
        />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[#020E20] group-focus-within:text-[var(--color-gold-primary)] transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogSearch;
