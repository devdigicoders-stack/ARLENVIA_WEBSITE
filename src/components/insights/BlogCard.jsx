import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const BlogCard = ({ blog, index }) => {
  return (
    <motion.div
      className="bg-white overflow-hidden border border-[#E5E7EB] hover:border-[var(--color-gold-primary)]/30 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col h-full rounded-sm"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
    >
      {/* Image */}
      <div className="aspect-[4/3] bg-[#020E20] relative overflow-hidden">
        {blog.img ? (
          <img 
            src={blog.img} 
            alt={blog.title} 
            className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[0.16,1,0.3,1] group-hover:scale-[1.05]" 
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-tr from-[#073866]/50 to-transparent z-10" />
        )}
        <div className="absolute inset-0 bg-[#020E20]/10 mix-blend-multiply pointer-events-none" />
      </div>
      
      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-6">
          <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] uppercase tracking-[0.15em]">
            {blog.category}
          </span>
          <span className="text-[#667085] font-light text-xs">
            {blog.date}
          </span>
        </div>
        
        <h3 className="text-[22px] font-heading font-bold text-[#020E20] mb-4 leading-snug group-hover:text-[var(--color-gold-primary)] transition-colors duration-300">
          <Link to={`/insights/${blog.slug}`} className="focus:outline-none">
            {blog.title}
          </Link>
        </h3>
        
        <p className="text-[#667085] text-[15px] leading-relaxed mb-8 flex-grow font-light">
          {blog.desc}
        </p>
        
        <Link 
          to={`/insights/${blog.slug}`} 
          className="inline-flex items-center gap-3 text-[#020E20] font-heading font-bold text-[12px] uppercase tracking-widest mt-auto w-fit group/btn"
        >
          <span className="border-b border-transparent group-hover/btn:border-[#020E20] transition-colors pb-0.5">Read Article</span>
          <span className="transform transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:text-[var(--color-gold-primary)]">→</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
