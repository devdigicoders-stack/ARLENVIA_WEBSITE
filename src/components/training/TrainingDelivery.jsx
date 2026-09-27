import React from 'react';
import { motion } from 'framer-motion';

const TrainingDelivery = () => {
  const modes = [
    { 
      title: "Corporate / In-House Training", 
      desc: "Delivered directly at your facility, this approach is focused entirely on your organization's specific systems, processes, and business challenges. It offers maximum relevance, confidentiality, and team alignment for your core staff.",
      num: "01"
    },
    { 
      title: "Public Training Programs", 
      desc: "Open enrollment sessions that are ideal for individuals or small groups seeking standard competency development. These programs provide an excellent opportunity to network with peers from other organizations and share industry best practices.",
      num: "02"
    },
    { 
      title: "Customized Workshops", 
      desc: "Highly tailored, interactive sessions explicitly designed to address specific operational problems, compliance issues, or strategic competency gaps. We integrate your real-world data and documents directly into the learning experience.",
      num: "03"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
              <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
                Delivery Options
              </span>
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-[#020E20] leading-[1.1] tracking-tight">
              Flexible Training Delivery
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {modes.map((mode, index) => (
            <motion.div
              key={index}
              className="bg-white p-10 lg:p-12 relative overflow-hidden shadow-xl border border-[var(--color-gold-primary)]/50 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-3xl font-heading font-light text-[var(--color-gold-primary)] mb-6">
                {mode.num}
              </div>
              
              <h3 className="text-[22px] font-heading font-bold text-[var(--color-gold-primary)] mb-6 leading-tight">
                {mode.title}
              </h3>
              
              <p className="text-[#667085] text-[15px] leading-relaxed font-light">
                {mode.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingDelivery;
