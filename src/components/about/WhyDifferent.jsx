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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-[var(--color-primary-navy)] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            More Than Compliance
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our focus is not simply certification. Our focus is performance.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[var(--color-warm-white)] p-8 rounded-xl border-t-4 border-[var(--color-gold-primary)] shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl font-bold text-[var(--color-primary-navy)]/10 mb-4 font-serif">
                {item.num}
              </div>
              <h3 className="text-xl font-bold text-[var(--color-primary-navy)] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
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
