import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import dashboardImage from '../../assets/images/digital_dashboard.jpg';

const DigitalAISection = () => {
  const features = [
    "Digital Workflows",
    "KPI Dashboards",
    "Quality Analytics",
    "AI-Assisted Analysis",
    "Automated Reporting",
    "Human-AI Decision Support"
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#020E20] text-white relative overflow-hidden">
      {/* Refined subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#073866]/30 via-transparent to-transparent opacity-60 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
              Future-Ready Systems
            </span>
            <div className="h-px w-12 bg-[var(--color-gold-primary)]/50" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-semibold mb-8 leading-[1.1] tracking-tight text-white">
            Data, Digital Systems & <br className="hidden lg:block"/> Responsible AI
          </h2>
          
          <p className="text-white/70 text-lg leading-relaxed mb-12 max-w-xl font-light">
            AI should enhance human judgment—not replace responsible decision-making. We help organizations implement technology as a powerful tool to enhance visibility, improve accuracy, and support better management decisions.
          </p>
          
          <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-12">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-3 border-b border-white/10 pb-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold-primary)]" />
                <span className="text-[15px] font-heading font-semibold text-white/90">{feature}</span>
              </motion.div>
            ))}
          </div>
          
          <Link 
            to="/digital-ai" 
            className="inline-flex items-center gap-4 group"
          >
            <span className="text-white font-heading font-bold uppercase tracking-widest text-[13px] border-b border-white pb-1 group-hover:text-[var(--color-gold-primary)] group-hover:border-[var(--color-gold-primary)] transition-colors">
              Explore Digital & AI
            </span>
            <span className="text-white group-hover:text-[var(--color-gold-primary)] group-hover:translate-x-1 transition-all">→</span>
          </Link>
        </motion.div>

        {/* Right Side: Abstract Visual Component */}
        <motion.div 
          className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, clipPath: 'inset(10% 10% 10% 10%)' }}
          whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <img 
            src={dashboardImage} 
            alt="AI Business Intelligence Dashboard" 
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.8] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-[#073866]/30 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalAISection;
