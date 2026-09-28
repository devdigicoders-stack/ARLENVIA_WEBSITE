import React from 'react';
import { motion } from 'framer-motion';
import trainingImg from '../../assets/images/training_section.jpg';

const TrainingExperience = () => {
  const points = [
    { title: "Interactive", desc: "High levels of participant engagement, discussion, and practical exercises." },
    { title: "Practical", desc: "Applying theoretical standards directly into real workplace contexts." },
    { title: "Relevant", desc: "Using organization-specific examples, case studies, and challenges." },
    { title: "Performance-Focused", desc: "Connecting all learning objectives to measurable business outcomes." }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-center">
          {/* Left: Image Placeholder */}
          <motion.div 
            className="relative aspect-video lg:aspect-[4/3] w-full overflow-hidden border border-[#E5E7EB] shadow-md"
            initial={{ opacity: 0, clipPath: 'inset(10% 10% 10% 10%)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <img 
              src={trainingImg} 
              alt="Professional Training" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] hover:scale-[1.05] ease-out" 
            />
            <div className="absolute inset-0 bg-[#073866]/10 mix-blend-multiply" />
            <div className="absolute inset-0 border-[20px] border-white/20 pointer-events-none" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
              <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
                The Experience
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-[#020E20] mb-12 leading-[1.1] tracking-tight">
              Learning Built Around <br />
              <span className="italic font-light text-[var(--color-gold-primary)]">Real-World Application</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
              {points.map((pt, idx) => (
                <motion.div 
                  key={idx}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold-primary)] shrink-0 group-hover:scale-150 transition-transform duration-300" />
                    <h3 className="text-[17px] font-heading font-bold text-[#020E20] uppercase tracking-widest leading-snug">{pt.title}</h3>
                  </div>
                  <p className="text-[#667085] text-[15px] leading-relaxed font-light pl-4 border-l border-[#E5E7EB] group-hover:border-[var(--color-gold-primary)] transition-colors duration-300">
                    {pt.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrainingExperience;
