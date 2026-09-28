import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import aboutImage from '../../assets/images/about_arlenvia.jpg';

const WhoWeAre = () => {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
                Who We Are
              </span>
              <div className="h-px w-12 bg-[var(--color-gold-primary)]/50" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-[#020E20] mb-8 leading-[1.1] tracking-tight">
              Turning Management Systems Into Real Business Value
            </h2>
            
            <div className="space-y-6 text-[#667085] text-lg leading-relaxed mb-10 font-light">
              <p>
                At Arlenvia Training Consultancy Services, we believe that compliance should not be an administrative burden. It should be a strategic tool that drives organizational capability and genuine business performance.
              </p>
              <p>
                We go beyond simply helping you achieve certification. We connect compliance to better decision-making, operational efficiency, robust risk management, and overall sustainable improvement. Our solutions are designed to integrate seamlessly with your core business objectives.
              </p>
            </div>
            
            <Link 
              to="/consultancy" 
              className="inline-flex items-center gap-4 group"
            >
              <span className="text-[#020E20] font-heading font-bold uppercase tracking-widest text-[13px] border-b border-[#020E20] pb-1 group-hover:text-[var(--color-gold-primary)] group-hover:border-[var(--color-gold-primary)] transition-colors">
                Explore Our Services
              </span>
              <span className="text-[#020E20] group-hover:text-[var(--color-gold-primary)] group-hover:translate-x-1 transition-all">→</span>
            </Link>
          </motion.div>

          {/* Right Side: Image Reveal */}
          <motion.div 
            className="relative aspect-video lg:aspect-[4/3] w-full overflow-hidden order-1 lg:order-2 border border-[#E5E7EB] shadow-md"
            initial={{ opacity: 0, clipPath: 'inset(10% 10% 10% 10%)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <img 
              src={aboutImage}
              alt="Consultancy Meeting"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-[#073866]/10 mix-blend-multiply" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
