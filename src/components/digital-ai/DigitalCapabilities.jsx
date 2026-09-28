import React from 'react';
import { motion } from 'framer-motion';

const DigitalCapabilities = () => {
  const services = [
    { num: "01", title: "Digital Process Mapping" },
    { num: "02", title: "Process Intelligence" },
    { num: "03", title: "QMS Dashboards" },
    { num: "04", title: "KPI Visualization & Analytics" },
    { num: "05", title: "Digital Document & Knowledge Management" },
    { num: "06", title: "AI-Assisted Analysis" },
    { num: "07", title: "Audit & Objective-Evidence Support" },
    { num: "08", title: "Digital Performance Monitoring" }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#020E20] text-white">
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
                Applications
              </span>
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-white leading-[1.1] tracking-tight">
              Possible Services & Applications
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 p-px rounded-sm">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/5 p-8 lg:p-10 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[13px] tracking-widest block">
                  {service.num}
                </span>
                <h3 className="text-[19px] font-heading font-bold text-[var(--color-gold-primary)] leading-tight">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalCapabilities;
