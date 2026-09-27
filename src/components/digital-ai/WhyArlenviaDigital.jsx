import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiShield, FiTrendingUp, FiUsers, FiLock, FiArrowUpRight } from 'react-icons/fi';

const WhyArlenviaDigital = () => {
  const cards = [
    { title: "Practical Implementation", desc: "Digital solutions focused on what actually works in your daily operations.", icon: FiCpu },
    { title: "Quality & Compliance Understanding", desc: "We know the requirements, ensuring digital tools enhance compliance.", icon: FiShield },
    { title: "Performance-Focused", desc: "Every tool is designed to yield measurable business improvements.", icon: FiTrendingUp },
    { title: "Human-Centered AI", desc: "Technology to support and enhance your team, not replace their judgment.", icon: FiUsers },
    { title: "Responsible Governance", desc: "Ensuring data integrity, confidentiality, and clear accountability.", icon: FiLock },
    { title: "Sustainable Improvement", desc: "Building digital capability that continues to add value long-term.", icon: FiArrowUpRight }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
              <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
                The Arlenvia Difference
              </span>
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-[#020E20] leading-[1.1] tracking-tight">
              Technology With <span className="italic font-light text-[var(--color-gold-primary)]">Business Purpose</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-[#F7F6F2] p-10 relative overflow-hidden group hover:bg-white hover:shadow-xl transition-all duration-700 border border-[#E5E7EB] hover:border-[var(--color-gold-primary)]/50 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Decorative line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--color-gold-primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              
              <div className="w-12 h-12 bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-[#020E20] transition-colors duration-500">
                <card.icon className="w-5 h-5 text-[var(--color-gold-primary)]" />
              </div>
              
              <h3 className="text-[18px] font-heading font-bold text-[#020E20] mb-4 leading-tight group-hover:text-[var(--color-gold-primary)] transition-colors duration-500">
                {card.title}
              </h3>
              
              <p className="text-[#667085] text-[15px] leading-relaxed font-light mt-auto">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyArlenviaDigital;
