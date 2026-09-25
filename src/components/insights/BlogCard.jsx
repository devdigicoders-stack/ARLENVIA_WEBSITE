import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogCard = ({ blog, index }) => {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
    >
      {/* Image */}
      <div className="aspect-[16/9] bg-[var(--color-primary-navy)] relative overflow-hidden">
        {blog.img ? (
          <img 
            src={blog.img} 
            alt={blog.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary-corporate)]/50 to-transparent z-10" />
        )}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[var(--color-gold-primary)] text-xs font-bold uppercase tracking-wider">
            {blog.category}
          </span>
          <span className="text-gray-400 text-xs">
            {blog.date}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-[var(--color-primary-navy)] mb-3 leading-snug group-hover:text-[var(--color-primary-corporate)] transition-colors">
          {blog.title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
          {blog.desc}
        </p>
        
        <Link 
          to={`/insights/${blog.slug}`} 
          className="inline-flex items-center gap-2 text-[var(--color-primary-navy)] font-bold text-sm mt-auto w-fit group/btn"
        >
          Read More 
          <span className="group-hover/btn:translate-x-1 text-[var(--color-gold-primary)] transition-transform duration-300">→</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
