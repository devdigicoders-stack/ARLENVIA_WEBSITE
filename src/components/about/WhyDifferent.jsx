import React from 'react';
import { motion } from 'framer-motion';

const WhyDifferent = () => {
  const features = [
    { num: "01", title: "Practical", desc: "Converting standards into real workplace application, ensuring systems work for you, not the other way around." },
    { num: "02", title: "Business-Focused", desc: "Connecting compliance directly to effectiveness and your core business objectives." },
    { num: "03", title: "Evidence-Based", desc: "Supporting recommendations with objective data and evidence for informed decision-making." },
    { num: "04", title: "Capability-Driven", desc: "Strengthening internal teams so they can sustain the systems independently." },
    { num: "05", title: "Sustainable", desc: "Ensuring improvements continue long after the consultancy engagement has ended." },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
              <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
                More Than Compliance
              </span>
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-[#020E20] leading-[1.1] tracking-tight mb-6">
              Our Focus is Performance
            </h2>
            
            <p className="text-[#667085] text-lg font-light max-w-2xl mx-auto">
              We design and refine management systems that deliver measurable business results, not just certification.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="group pt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-[32px] font-heading font-light text-[var(--color-gold-primary)] mb-6 transition-transform duration-300 group-hover:scale-110 origin-left">
                {item.num}
              </div>
              <h3 className="text-xl font-heading font-bold text-[#020E20] mb-4">
                {item.title}
              </h3>
              <p className="text-[#667085] text-[15px] leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
