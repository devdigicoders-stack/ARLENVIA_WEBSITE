import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import featuredImg from '../../assets/images/about_arlenvia.jpg';

const FeaturedInsight = () => {
  return (
    <section className="py-24 bg-[var(--color-warm-white)]">
      <div className="container mx-auto px-6">
        <motion.div 
          className="bg-white rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(3,28,54,0.08)] flex flex-col lg:flex-row group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Left: Featured Image */}
          <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full overflow-hidden">
            <img 
              src={featuredImg}
              alt="Management Systems Performance"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary-navy)]/60 to-transparent mix-blend-multiply" />
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
