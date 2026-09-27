import React from 'react';
import { motion } from 'framer-motion';

const WhyArlenvia = () => {
  const reasons = [
    { 
      num: "01",
      title: "Practical Expertise", 
      desc: "Our consultants have deep, practical knowledge of quality management and industry standards, ensuring systems are built correctly from the ground up." 
    },
    { 
      num: "02",
      title: "Business-Focused Compliance", 
      desc: "We align compliance requirements with your strategic business objectives, turning mandatory standards into competitive advantages." 
    },
    { 
      num: "03",
      title: "Evidence-Based Approach", 
      desc: "Our advice and improvements are always grounded in factual analysis of your data and operational realities." 
    },
    { 
      num: "04",
      title: "Customized Solutions", 
      desc: "We focus on solutions that actually work in your daily operations, avoiding unnecessary bureaucracy and 'paper-only' systems." 
    },
    { 
      num: "05",
      title: "Capability Development", 
      desc: "Our goal is not just to fix problems, but to build your team's internal capability to manage and improve systems independently." 
    },
    { 
      num: "06",
      title: "Sustainable Improvement", 
      desc: "We partner with you to create capable systems that drive genuine, long-lasting business performance." 
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
