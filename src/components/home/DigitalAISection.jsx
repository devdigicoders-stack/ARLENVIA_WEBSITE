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
    <section className="py-24 bg-[var(--color-primary-navy)] text-white relative overflow-hidden">
      {/* Decorative background grids */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-primary-corporate)] opacity-10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 flex items-center gap-4">
            <div className="h-px w-8 bg-[var(--color-gold-primary)]" />
            <span className="text-[var(--color-gold-primary)] font-bold text-sm tracking-widest uppercase">
              FUTURE-READY SYSTEMS
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            Data, Digital Systems & Responsible AI
          </h2>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            We help organizations implement technology not as a replacement for human judgment, but as a powerful tool to enhance visibility, improve accuracy, and support better management decisions.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-10">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="w-2 h-2 rounded-full bg-[var(--color-gold-primary)]" />
                <span className="text-sm font-semibold text-gray-200">{feature}</span>
              </motion.div>
            ))}
          </div>
          
          <Link 
            to="/digital-ai" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[var(--color-gold-primary)] text-[var(--color-gold-primary)] font-bold rounded hover:bg-[var(--color-gold-primary)] hover:text-[var(--color-primary-navy)] transition-colors"
          >
            Explore Digital & AI
          </Link>
        </motion.div>

        {/* Right Side: Abstract Visual Component */}
        <motion.div 
          className="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-black/20 border border-white/10 backdrop-blur-sm p-8 flex flex-col justify-between"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
           {/* Mockup Dashboard Header */}
           <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6">
             <div className="flex gap-2">
               <div className="w-3 h-3 rounded-full bg-red-500/50" />
               <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
               <div className="w-3 h-3 rounded-full bg-green-500/50" />
             </div>
             <div className="w-24 h-2 bg-white/10 rounded-full" />
           </div>

           {/* Dashboard Image */}
           <div className="flex-grow relative rounded-lg overflow-hidden border border-white/10 group">
             <img 
               src={dashboardImage} 
               alt="AI Business Intelligence Dashboard" 
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary-navy)]/40 to-transparent mix-blend-overlay pointer-events-none" />
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalAISection;
