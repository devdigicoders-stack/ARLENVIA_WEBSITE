import React from 'react';
import { motion } from 'framer-motion';

const DigitalCapabilities = () => {
  const cards = [
    { 
      title: "Digital Management-System Processes", 
      desc: "Organizing traditional or manual processes into structured, traceable digital workflows. This transformation eliminates paper-based inefficiencies, reduces human error, and ensures robust compliance tracking.",
      num: "01"
    },
    { 
      title: "Process Visualization & Digital Workflows", 
      desc: "Visually mapping processes and interactions for better clarity and control. By turning abstract procedures into dynamic digital models, teams can easily identify bottlenecks and enforce standard operating procedures.",
      num: "02"
    },
    { 
      title: "KPI & Performance Dashboards", 
      desc: "Presenting critical performance indicators in clear, accessible management dashboards. We integrate data from disparate sources to provide leadership with real-time, actionable insights that drive strategic decisions.",
      num: "03"
    },
    { 
      title: "Data-Driven Quality Monitoring", 
      desc: "Utilizing quality data effectively for real-time analysis and continuous monitoring. Shift from reactive problem-solving to proactive quality assurance by capturing and analyzing defect trends and audit metrics instantly.",
      num: "04"
    },
    { 
      title: "Management Reporting", 
      desc: "Enhancing reporting mechanisms to improve overall information visibility for leadership. Automated compilation ensures executives always have access to the most accurate compliance and performance data.",
      num: "05"
    },
    { 
      title: "Automated Information Management", 
      desc: "Streamlining routine reporting and information handling to reduce administrative burden. By automating data entry and notifications, your team can focus on value-added activities rather than tedious paperwork.",
      num: "06"
    }
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
                Expertise
              </span>
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-white leading-[1.1] tracking-tight">
              Digital Capability Areas
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-[var(--color-gold-primary)]/30 p-10 relative overflow-hidden transition-all duration-700 hover:shadow-2xl hover:-translate-y-1 hover:border-[var(--color-gold-primary)]/60 flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-[32px] font-heading font-light text-[var(--color-gold-primary)] mb-6">
                {card.num}
              </div>
              
              <h3 className="text-[22px] font-heading font-bold text-[var(--color-gold-primary)] mb-4 leading-tight">
                {card.title}
              </h3>
              
              <p className="text-white/70 text-[15px] leading-relaxed font-light mt-auto">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalCapabilities;
