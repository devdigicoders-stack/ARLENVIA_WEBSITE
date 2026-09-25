import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhyArlenvia = () => {
  const [activeTab, setActiveTab] = useState(0);

  const reasons = [
    { 
      title: "Professional Quality Expertise", 
      desc: "Our consultants have deep, practical knowledge of quality management and industry standards, ensuring systems are built correctly from the ground up." 
    },
    { 
      title: "Practical Implementation", 
      desc: "We focus on solutions that actually work in your daily operations, avoiding unnecessary bureaucracy and 'paper-only' systems." 
    },
    { 
      title: "Business-Focused Compliance", 
      desc: "We align compliance requirements with your strategic business objectives, turning mandatory standards into competitive advantages." 
    },
    { 
      title: "Evidence-Based Recommendations", 
      desc: "Our advice and improvements are always grounded in factual analysis of your data and operational realities." 
    },
    { 
      title: "Sustainable Capability Development", 
      desc: "Our goal is not just to fix problems, but to build your team's internal capability to manage and improve systems independently." 
    }
  ];

  return (
    <section className="py-24 bg-[var(--color-warm-white)]">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 flex items-center gap-4">
            <div className="h-px w-8 bg-[var(--color-gold-primary)]" />
            <span className="text-[var(--color-gold-primary)] font-bold text-sm tracking-widest uppercase">
              THE ARLENVIA DIFFERENCE
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-primary-navy)] mb-6 leading-tight">
            Why Organizations Choose Arlenvia
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
            We understand that management systems shouldn't exist just for the auditor. We partner with you to create capable systems that drive genuine business performance.
          </p>
        </motion.div>

        {/* Right Side: Accordion */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className={`bg-white border rounded-xl overflow-hidden transition-colors duration-300 ${activeTab === index ? 'border-[var(--color-gold-primary)] shadow-md' : 'border-gray-200'}`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setActiveTab(activeTab === index ? null : index)}
              >
                <span className={`font-bold ${activeTab === index ? 'text-[var(--color-primary-corporate)]' : 'text-[var(--color-primary-navy)]'}`}>
                  {reason.title}
                </span>
                <span className={`transform transition-transform duration-300 ${activeTab === index ? 'rotate-180 text-[var(--color-gold-primary)]' : 'text-gray-400'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </button>
              
              <AnimatePresence>
                {activeTab === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {reason.desc}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyArlenvia;
