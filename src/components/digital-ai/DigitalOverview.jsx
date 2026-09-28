import React from 'react';
import { motion } from 'framer-motion';
import dashboardImg from '../../assets/images/digital_dashboard.jpg';

const DigitalOverview = () => {
  const highlights = [
    "Visibility",
    "Automation",
    "Analytics",
    "Decision Support"
  ];

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-center">
          {/* Left Side: Visual */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, clipPath: 'inset(10% 10% 10% 10%)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="aspect-[4/5] lg:aspect-square relative overflow-hidden">
              <img 
                src={dashboardImg}
                alt="Digital Dashboard Analytics"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] hover:scale-[1.05] ease-out"
              />
              <div className="absolute inset-0 bg-[#073866]/10 mix-blend-multiply" />
              <div className="absolute inset-0 border-[20px] border-white/20 pointer-events-none" />
            </div>
            {/* Decorative Accent */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[var(--color-gold-primary)]/10 blur-[30px] pointer-events-none" />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-8 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-[var(--color-gold-primary)]" />
              <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[13px] tracking-[0.2em] uppercase">
                Digital & AI
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-[3.2rem] font-heading font-semibold text-[#020E20] mb-8 leading-[1.1] tracking-tight">
              Digital & AI for <span className="italic font-light text-[var(--color-gold-primary)]">Smarter Management Systems</span>
            </h2>
            
            <p className="text-[#667085] text-[17px] leading-[1.8] font-light mb-12 border-l border-[var(--color-gold-primary)]/30 pl-6">
              We explore practical applications of digital technologies and AI to make management systems more accessible, data-driven and effective.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4 py-3 border-b border-[#E5E7EB] group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold-primary)] group-hover:scale-150 transition-transform duration-500" />
                  <span className="text-[15px] font-heading font-bold text-[#020E20] tracking-widest uppercase">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DigitalOverview;
