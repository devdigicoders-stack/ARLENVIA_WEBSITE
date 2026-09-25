import React from 'react';
import { motion } from 'framer-motion';
import bgImage from '../../assets/images/training_section.jpg';

const CapabilitySection = () => {
  const capabilities = [
    "Competency Frameworks",
    "Training Needs Assessment",
    "Auditor Competence",
    "Management-System Awareness",
    "Leadership & Accountability",
    "Quality Culture",
    "Performance-Oriented Teams"
  ];

  return (
    <section className="flex flex-col lg:flex-row">
      <div className="lg:w-1/2 bg-[var(--color-primary-deep)] text-white p-12 lg:p-24 flex flex-col justify-center relative overflow-hidden group">
        <img 
          src={bgImage} 
          alt="Training and Competence"
          className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-deep)] via-[var(--color-primary-deep)]/80 to-transparent"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight">
            Sustainable Improvement Starts With <span className="text-[var(--color-gold-light)]">Competent People</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed font-light">
            We support organizations in developing the knowledge and skills necessary to drive systems and processes effectively.
          </p>
          
          <ul className="space-y-4">
            {capabilities.map((item, idx) => (
              <motion.li 
                key={idx}
                className="flex items-center gap-4 text-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="w-2 h-2 rounded-full bg-[var(--color-gold-primary)]" />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Light Side */}
      <div className="lg:w-1/2 bg-[var(--color-warm-white)] p-12 lg:p-24 flex items-center justify-center">
        <motion.div 
          className="text-center w-full max-w-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-xl text-gray-500 font-medium mb-10 uppercase tracking-widest">Our Training Philosophy</h3>
            
            <div className="space-y-6">
              {['Understand', 'Apply', 'Demonstrate', 'Improve'].map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-[var(--color-primary-navy)] text-white py-4 px-6 rounded-lg font-bold text-xl shadow-md">
                    {step}
                  </div>
                  {idx < 3 && (
                    <div className="h-6 w-0.5 bg-[var(--color-gold-primary)] mx-auto my-2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CapabilitySection;
