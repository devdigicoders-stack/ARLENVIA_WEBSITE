import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';

const WhyArlenvia = () => {
  const reasons = [
    { title: "Practical", content: "We translate management-system requirements into processes that work in the real operating environment." },
    { title: "Performance-Focused", content: "We connect compliance requirements with measurable organizational objectives and results." },
    { title: "Evidence-Based", content: "We emphasize objective evidence, meaningful data and effective performance monitoring." },
    { title: "People-Centered", content: "We recognize that sustainable improvement depends on competent and engaged people." },
    { title: "Future-Ready", content: "We explore digital tools and AI-enabled approaches to make management systems smarter, more accessible and more effective." }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-[var(--color-primary-deep)] text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Big Heading */}
          <div className="relative lg:sticky lg:top-32 mb-10 lg:mb-0 z-10">
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Why Organizations Work With Arlenvia
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 font-light max-w-md"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We go beyond certification. We help you understand what the requirement is, why it matters, how it will be implemented, how it will be measured, and how it creates value.
            </motion.p>
          </div>

          {/* Right Side: Accordion */}
          <div className="space-y-4">
            {reasons.map((item, index) => (
              <motion.div 
                key={index}
                className={`border rounded-xl overflow-hidden transition-colors duration-300 ${
                  activeIndex === index ? 'border-[var(--color-gold-primary)] bg-[var(--color-primary-navy)]' : 'border-white/10 hover:border-white/30'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  className="w-full text-left px-8 py-6 flex items-center justify-between focus:outline-none"
                  onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                >
                  <span className={`text-xl font-semibold ${activeIndex === index ? 'text-[var(--color-gold-light)]' : 'text-white'}`}>
                    {item.title}
                  </span>
                  <span className={`text-2xl transform transition-transform duration-300 ${activeIndex === index ? 'rotate-45 text-[var(--color-gold-primary)]' : 'text-gray-500'}`}>
                    <FiPlus />
                  </span>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-6 text-gray-300 leading-relaxed">
                        {item.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyArlenvia;
