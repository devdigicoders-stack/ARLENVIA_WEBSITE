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
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          className="text-3xl lg:text-4xl font-bold text-[var(--color-primary-navy)] mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Designed for Organizations, <br className="hidden md:block" />
          <span className="text-[var(--color-gold-primary)]">Teams and Professionals</span>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              className="bg-[var(--color-warm-white)] px-6 py-4 rounded-full border border-gray-200 shadow-sm hover:shadow-md hover:border-[var(--color-primary-corporate)] hover:bg-[var(--color-primary-navy)] hover:text-white transition-all duration-300 cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <span className="font-medium">{role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingAudience;
