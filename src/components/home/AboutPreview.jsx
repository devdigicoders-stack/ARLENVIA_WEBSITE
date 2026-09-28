import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import aboutImage from '../../assets/images/about_arlenvia.jpg';
import { FiArrowRight } from 'react-icons/fi';

const AboutPreview = () => {
  return (
    <section className="py-24 bg-[var(--color-warm-white)] overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Visual */}
        <motion.div
          className="relative aspect-video lg:aspect-[4/3] w-full overflow-hidden border border-[#E5E7EB] shadow-md"
          initial={{ opacity: 0, clipPath: 'inset(10% 10% 10% 10%)' }}
          whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <img 
            src={aboutImage} 
            alt="About Arlenvia Consultancy" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
              ABOUT ARLENVIA
            </span>
            <div className="h-px w-12 bg-[var(--color-gold-primary)]/50" />
          </div>
          
          <h2 className="text-4xl lg:text-[2.75rem] font-heading font-semibold text-[#020E20] mb-8 leading-[1.1] tracking-tight">
            Turning Management-System Requirements Into Practical Business Value
          </h2>
          
          <p className="text-[#667085] text-lg leading-[1.8] mb-10 font-light max-w-xl">
            Arlenvia focuses on helping organizations bridge the gap between compliance requirements and actual business capability. Through expert management systems consultancy, quality assurance, organizational performance improvement, and practical training, we deliver sustainable solutions.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-12">
            {['Practical', 'Evidence-Based', 'Performance-Oriented', 'Sustainable'].map((bullet, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[var(--color-gold-primary)] rounded-full" />
                <span className="text-[#102033] font-heading font-semibold text-[15px]">{bullet}</span>
              </div>
            ))}
          </div>
          
          <Link 
            to="/about" 
            className="inline-flex items-center gap-4 group"
          >
            <span className="text-[#020E20] font-heading font-bold uppercase tracking-widest text-[13px] border-b border-[#020E20] pb-1 group-hover:text-[var(--color-gold-primary)] group-hover:border-[var(--color-gold-primary)] transition-colors">
              Learn More About Arlenvia
            </span>
            <FiArrowRight className="text-[#020E20] group-hover:text-[var(--color-gold-primary)] group-hover:translate-x-1 transition-all" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
