import React from 'react';
import { motion } from 'framer-motion';

const DigitalOverview = () => {
  const highlights = [
    "Visibility",
    "Automation",
    "Analytics",
    "Decision Support"
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Visual */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(3,28,54,0.1)] relative bg-[var(--color-primary-navy)] border border-gray-100 p-8 flex flex-col">
            {/* Dashboard Mockup Feel */}
            <div className="w-full h-8 flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-grow grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-4 flex flex-col justify-end">
                <div className="w-3/4 h-2 bg-[var(--color-gold-primary)] rounded mb-2" />
                <div className="w-1/2 h-2 bg-[var(--color-gold-light)] rounded" />
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="w-full h-full border-2 border-dashed border-white/20 rounded-full" />
              </div>
              <div className="col-span-2 bg-gradient-to-r from-[var(--color-primary-corporate)]/50 to-transparent rounded-lg p-4 h-16" />
            </div>
          </div>
          {/* Decorative Glow */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[var(--color-gold-primary)]/20 rounded-full blur-[40px] pointer-events-none" />
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-primary-navy)] mb-6 leading-tight">
            Turning Management Data Into Better Decisions
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Arlenvia supports organizations in exploring and utilizing practical digital technologies. Our goal is to improve visibility, streamline analysis, enhance monitoring, and provide robust decision support, seamlessly integrating with your management systems.
          </p>

          <div className="flex flex-wrap gap-4">
            {highlights.map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-2 bg-[var(--color-warm-white)] px-5 py-3 rounded-full border border-gray-200 text-[var(--color-primary-navy)] font-semibold shadow-sm hover:border-[var(--color-gold-primary)] hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="w-2 h-2 rounded-full bg-[var(--color-gold-primary)]" />
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalOverview;
