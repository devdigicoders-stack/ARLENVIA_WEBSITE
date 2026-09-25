import React from 'react';
import { motion } from 'framer-motion';

const TrainingExperience = () => {
  const points = [
    { title: "Interactive", desc: "High levels of participant engagement, discussion, and practical exercises." },
    { title: "Practical", desc: "Applying theoretical standards directly into real workplace contexts." },
    { title: "Relevant", desc: "Using organization-specific examples, case studies, and challenges." },
    { title: "Performance-Focused", desc: "Connecting all learning objectives to measurable business outcomes." }
  ];

  return (
    <section className="py-24 bg-[var(--color-primary-deep)] text-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image Placeholder */}
        <motion.div 
          className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary-navy)] to-[var(--color-primary-corporate)] opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center border-2 border-dashed border-white/20 m-6 rounded-xl">
            <span className="text-white/50 text-lg font-medium">Professional Trainer Image</span>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 leading-tight">
            Learning Built Around <span className="text-[var(--color-gold-light)]">Real-World Application</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {points.map((pt, idx) => (
              <motion.div 
                key={idx}
                className="bg-[var(--color-primary-navy)] p-6 rounded-xl border border-[var(--color-gold-primary)]/20 hover:border-[var(--color-gold-primary)] transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <h3 className="text-xl font-bold text-[var(--color-gold-light)] mb-3">{pt.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{pt.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingExperience;
