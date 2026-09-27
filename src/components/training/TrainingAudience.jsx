import React from 'react';
import { motion } from 'framer-motion';

const TrainingAudience = () => {
  const roles = [
    "Management Representatives",
    "Internal Auditors",
    "Quality Professionals",
    "Process Owners",
    "Department Heads",
    "Supervisors",
    "Business Leaders",
    "Professionals Seeking Competence Development"
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#020E20] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#073866] rounded-full blur-[150px] opacity-20" />
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
            <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
              Target Audience
            </span>
            <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-white leading-[1.1] tracking-tight">
            Designed for Organizations, <br className="hidden md:block" />
            <span className="text-[var(--color-gold-primary)] italic font-light">Teams & Professionals</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 px-8 py-4 hover:bg-[var(--color-gold-primary)] hover:border-[var(--color-gold-primary)] group transition-all duration-500 cursor-default"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <span className="font-heading font-bold text-[13px] tracking-widest uppercase text-white/80 group-hover:text-[#020E20] transition-colors duration-500">{role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingAudience;
