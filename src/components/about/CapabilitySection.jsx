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
      <div className="lg:w-1/2 bg-[#020E20] text-white p-12 lg:p-24 flex flex-col justify-center relative overflow-hidden group">
        <img 
          src={bgImage} 
          alt="Training and Competence"
          className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-[1.05] transition-transform duration-[2s] ease-out"
        />
        <div className="absolute inset-0 bg-[#020E20]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020E20] via-[#020E20]/90 to-transparent" />
        
        <div className="relative z-10">
          <h2 className="text-4xl lg:text-5xl font-heading font-semibold mb-8 leading-[1.1] tracking-tight text-white">
            Sustainable Improvement Starts With <span className="text-[var(--color-gold-primary)] font-light italic">Competent People</span>
          </h2>
          <p className="text-white/70 text-lg mb-12 leading-relaxed font-light">
            We support organizations in developing the knowledge and skills necessary to drive systems and processes effectively.
          </p>
          
          <ul className="space-y-6">
            {capabilities.map((item, idx) => (
              <motion.li 
                key={idx}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold-primary)]" />
                <span className="text-white/90 text-[17px] font-light">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Light Side */}
      <div className="lg:w-1/2 bg-[#F7F6F2] p-12 lg:p-24 flex items-center justify-center">
        <motion.div 
          className="text-center w-full max-w-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white p-12 shadow-sm border border-[#E5E7EB]">
            <h3 className="text-[11px] font-heading font-bold text-[var(--color-gold-primary)] uppercase tracking-[0.2em] mb-12">Our Training Philosophy</h3>
            
            <div className="space-y-6">
              {['Understand', 'Apply', 'Demonstrate', 'Improve'].map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-[#020E20] text-white py-4 px-6 font-heading font-bold text-[18px] tracking-wide border border-[#020E20]/10 hover:bg-[var(--color-gold-primary)] hover:text-[#020E20] transition-colors duration-300 cursor-default">
                    {step}
                  </div>
                  {idx < 3 && (
                    <div className="h-6 w-px bg-[var(--color-gold-primary)]/50 mx-auto my-2" />
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
