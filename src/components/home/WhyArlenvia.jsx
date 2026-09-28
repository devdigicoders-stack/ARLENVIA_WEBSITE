import React from 'react';
import { motion } from 'framer-motion';

const WhyArlenvia = () => {
  const reasons = [
    { 
      num: "01",
      title: "Practical", 
      desc: "We translate management-system requirements into processes that work in the real operating environment." 
    },
    { 
      num: "02",
      title: "Performance-Focused", 
      desc: "We connect compliance requirements with measurable organizational objectives and results." 
    },
    { 
      num: "03",
      title: "Evidence-Based", 
      desc: "We emphasize objective evidence, meaningful data and effective performance monitoring." 
    },
    { 
      num: "04",
      title: "People-Centered", 
      desc: "We recognize that sustainable improvement depends on competent and engaged people." 
    },
    { 
      num: "05",
      title: "Future-Ready", 
      desc: "We explore digital tools and AI-enabled approaches to make management systems smarter, more accessible and more effective." 
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-px bg-[var(--color-gold-primary)]" />
              <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
                The Arlenvia Difference
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-[#020E20] leading-[1.1] tracking-tight">
              What Sets Arlenvia Apart
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-0">
          <div className="flex flex-col">
            {reasons.slice(0, 3).map((reason, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-8 py-10 border-t border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl lg:text-5xl font-heading font-light text-[var(--color-gold-primary)] mt-1">
                  {reason.num}
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-[var(--color-primary-corporate)] mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-[#667085] text-lg leading-relaxed font-light">
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col">
            {reasons.slice(3, 6).map((reason, index) => (
              <motion.div
                key={index + 3}
                className="flex items-start gap-8 py-10 border-t border-gray-100 lg:border-t-0 lg:[&:not(:first-child)]:border-t lg:first:border-t-0 max-lg:first:border-t-0"
                style={{ borderTopWidth: index === 0 ? '1px' : '1px' }} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
              >
                <div className="text-4xl lg:text-5xl font-heading font-light text-[var(--color-gold-primary)] mt-1">
                  {reason.num}
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-[var(--color-primary-corporate)] mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-[#667085] text-lg leading-relaxed font-light">
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            ))}
            {/* Final bottom border on desktop for right column to match left, or leave open */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyArlenvia;
