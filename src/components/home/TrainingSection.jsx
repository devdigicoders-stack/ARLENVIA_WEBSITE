import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import trainingImage from '../../assets/images/training_section.jpg';

const TrainingSection = () => {
  const categories = [
    { title: "Management Systems", desc: "ISO 9001, 14001, 45001 & more" },
    { title: "Auditing & Assurance", desc: "Internal & Lead Auditor" },
    { title: "Quality & Performance", desc: "Root Cause & Process Improvement" },
    { title: "Customized Training", desc: "Tailored to your organization" }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-center">
        {/* Left Side: Visual */}
        <motion.div
          className="relative aspect-video lg:aspect-[4/3] w-full overflow-hidden border border-[#E5E7EB] shadow-md"
          initial={{ opacity: 0, clipPath: 'inset(10% 10% 10% 10%)' }}
          whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <img 
            src={trainingImage} 
            alt="Interactive Professional Training Seminar" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#073866]/10 mix-blend-multiply" />
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
              Training & Professional Development
            </span>
            <div className="h-px w-12 bg-[var(--color-gold-primary)]/50" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-[#020E20] mb-8 leading-[1.15] tracking-tight">
            Practical Learning That Creates Workplace Capability
          </h2>
          
          <p className="text-[#667085] text-lg leading-relaxed mb-10 max-w-xl font-light">
            Our training is application-focused and highly interactive, designed to ensure that participants don't just understand requirements, but can effectively apply them to improve organizational performance.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-50 border border-gray-100 p-6 hover:bg-white hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              >
                <div className="w-8 h-px bg-[var(--color-gold-primary)] mb-4 scale-x-50 origin-left group-hover:scale-x-100 transition-transform duration-300" />
                <h4 className="text-[17px] font-heading font-bold text-[#020E20] mb-2">{category.title}</h4>
                <p className="text-sm text-[#667085]">{category.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <Link 
            to="/training" 
            className="inline-flex items-center gap-4 group"
          >
            <span className="text-[#020E20] font-heading font-bold uppercase tracking-widest text-[13px] border-b border-[#020E20] pb-1 group-hover:text-[var(--color-gold-primary)] group-hover:border-[var(--color-gold-primary)] transition-colors">
              Explore Training Programs
            </span>
            <span className="text-[#020E20] group-hover:text-[var(--color-gold-primary)] group-hover:translate-x-1 transition-all">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingSection;
