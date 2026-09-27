import React from 'react';
import { motion } from 'framer-motion';

const VisionMission = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#020E20] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#073866] via-transparent to-transparent opacity-80" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Vision Section */}
        <motion.div
          className="lg:border-r lg:border-white/10 lg:pr-16 flex flex-col justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] uppercase tracking-[0.15em]">
              Our Vision
            </span>
            <div className="h-px w-12 bg-[var(--color-gold-primary)]/50" />
          </div>
          
          <h3 className="text-4xl lg:text-5xl font-heading font-semibold text-white leading-[1.15] tracking-tight mb-8">
            To Be a Trusted Partner in Performance Transformation
          </h3>
          
          <p className="text-white/70 text-lg leading-relaxed font-light">
            Our vision is to become the trusted partner for organizations seeking to transform quality, compliance, and organizational capability into measurable business performance. We strive to set the standard for practical, effective consultancy.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="flex flex-col justify-center mt-12 lg:mt-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] uppercase tracking-[0.15em]">
              Our Mission
            </span>
            <div className="h-px w-12 bg-[var(--color-gold-primary)]/50" />
          </div>
          
          <h3 className="text-2xl font-heading font-semibold text-white mb-8">
            We exist to help you:
          </h3>
          
          <ul className="space-y-6">
            {[
              "Strengthen management systems with practical design",
              "Improve operational performance systematically",
              "Develop highly competent, capable people",
              "Identify critical risks & hidden opportunities",
              "Leverage data for evidence-based decisions",
              "Achieve long-term sustainable performance"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold-primary)] mt-2.5 shrink-0" />
                <span className="text-white/90 font-light text-[17px] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;
