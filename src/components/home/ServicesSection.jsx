import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiArrowRight, 
  FiLayers, 
  FiUsers, 
  FiTrendingUp, 
  FiClipboard, 
  FiRefreshCw, 
  FiCpu 
} from 'react-icons/fi';

const ServicesSection = () => {
  const services = [
    { icon: <FiLayers />, title: "Management Systems & Quality Consultancy", summary: "Design and implementation of resilient ISO frameworks tailored to your operations.", link: "/consultancy" },
    { icon: <FiUsers />, title: "Training & Professional Development", summary: "Practical learning programs that build actual workplace capability and competence.", link: "/training" },
    { icon: <FiTrendingUp />, title: "Business Performance & Improvement", summary: "Data-driven strategies to reduce waste, control risk, and elevate performance.", link: "/consultancy" },
    { icon: <FiClipboard />, title: "Audit & Assessment Services", summary: "Independent, rigorous evaluations to ensure compliance and identify opportunities.", link: "/consultancy" },
    { icon: <FiRefreshCw />, title: "Process Management & Continual Improvement", summary: "Streamlining workflows for maximum efficiency and sustainable growth.", link: "/consultancy" },
    { icon: <FiCpu />, title: "Digital Innovation, Data & AI", summary: "Leveraging intelligent technologies to augment human decision-making.", link: "/digital-ai" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-px bg-[var(--color-gold-primary)]" />
              <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
                Expertise
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-[#020E20] leading-tight tracking-tight">
              Solutions Built <br className="hidden md:block" /> Around Performance
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                to={service.link}
                className="block h-full bg-white border border-[#E5E7EB] p-10 shadow-sm hover:shadow-xl hover:border-transparent transition-all duration-500 group relative overflow-hidden hover:-translate-y-2"
              >
                {/* Gold Top Border Reveal */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--color-gold-primary)] transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-[40px] text-[#020E20]/20 mb-8 transition-colors duration-500 group-hover:text-[var(--color-gold-primary)]/80">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-[22px] font-heading font-bold text-[#020E20] mb-4 pr-4 leading-[1.3] transition-colors group-hover:text-[var(--color-primary-corporate)]">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#667085] text-[15px] leading-relaxed mb-8 flex-grow">
                    {service.summary}
                  </p>
                  
                  <div className="flex items-center text-[#020E20] group-hover:text-[var(--color-gold-primary)] font-heading font-bold text-[11px] uppercase tracking-[0.15em] transition-colors mt-auto border-t border-gray-100 pt-6">
                    <span>Explore</span>
                    <FiArrowRight className="ml-3 transform transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
