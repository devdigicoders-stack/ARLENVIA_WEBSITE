import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FeaturedInsight = () => {
  return (
    <section className="py-24 bg-[var(--color-warm-white)]">
      <div className="container mx-auto px-6">
        <motion.div 
          className="bg-white rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(3,28,54,0.08)] flex flex-col lg:flex-row"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Left: Featured Image Placeholder */}
          <div className="lg:w-1/2 relative bg-[var(--color-primary-navy)] min-h-[300px] lg:min-h-full flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary-corporate)]/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10" />
            
            {/* Abstract visual since no image */}
            <div className="w-full h-full p-8 flex items-end justify-start opacity-50 group-hover:scale-105 transition-transform duration-700">
               <div className="w-32 h-32 border-4 border-white/20 rounded-full" />
               <div className="w-64 h-64 border border-[var(--color-gold-primary)]/30 rounded-full -ml-20 mb-10" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[var(--color-gold-primary)]/10 text-[var(--color-gold-primary)] px-3 py-1 rounded-full text-sm font-semibold tracking-wide">
                Management Systems
              </span>
              <span className="text-gray-500 text-sm font-medium">October 12, 2026</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-primary-navy)] mb-6 leading-tight">
              Turning Compliance Into Measurable Business Performance
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Explore how organizations can move beyond a check-box approach to compliance, utilizing management systems as powerful tools to drive operational efficiency, reduce risks, and achieve sustainable business outcomes.
            </p>
            
            <Link to="/insights/turning-compliance-into-measurable-business-performance" className="inline-flex items-center gap-2 text-[var(--color-gold-primary)] font-bold group w-fit">
              Read Article 
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedInsight;
