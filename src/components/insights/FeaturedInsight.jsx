import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import featuredImg from '../../assets/images/about_arlenvia.jpg';
import { FiArrowRight } from 'react-icons/fi';

const FeaturedInsight = () => {
  return (
    <section className="py-24 lg:py-32 bg-white border-b border-[#E5E7EB]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-12 flex items-center gap-4">
          <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
          <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
            Featured Article
          </span>
        </div>

        <motion.div 
          className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Left: Featured Image */}
          <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden bg-[#F7F6F2]">
            <img 
              src={featuredImg}
              alt="Management Systems Performance"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out grayscale-[20%]"
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-[#020E20]/10 mix-blend-multiply" />
            <div className="absolute inset-0 border border-black/5 pointer-events-none" />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[#020E20] font-heading font-bold text-[11px] tracking-widest uppercase border border-[#E5E7EB] px-4 py-1.5 hover:border-[var(--color-gold-primary)] transition-colors cursor-pointer">
                Management Systems
              </span>
              <span className="text-[#667085] text-[13px] font-heading font-light tracking-widest uppercase">October 12, 2026</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-[#020E20] mb-8 leading-[1.1] tracking-tight hover:text-[var(--color-gold-primary)] transition-colors duration-500 cursor-pointer">
              Turning Compliance Into <span className="italic font-light text-[var(--color-gold-primary)]">Measurable Business Performance</span>
            </h2>
            
            <p className="text-[#667085] text-[17px] leading-[1.8] font-light mb-10 border-l border-[var(--color-gold-primary)]/30 pl-6">
              Explore how organizations can move beyond a check-box approach to compliance, utilizing management systems as powerful tools to drive operational efficiency, reduce risks, and achieve sustainable business outcomes.
            </p>
            
            <Link to="/insights/turning-compliance-into-measurable-business-performance" className="inline-flex items-center gap-3 text-[13px] font-heading font-bold uppercase tracking-[0.2em] text-[#020E20] group/btn w-fit hover:text-[var(--color-gold-primary)] transition-colors">
              Read Article 
              <FiArrowRight className="group-hover/btn:translate-x-2 transition-transform duration-300 text-lg" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedInsight;
