import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    { num: "01", title: "Management Systems & Quality Consultancy", link: "/consultancy" },
    { num: "02", title: "Training & Professional Development", link: "/training" },
    { num: "03", title: "Business Performance & Improvement", link: "/consultancy" },
    { num: "04", title: "Audit & Assessment Services", link: "/consultancy" },
    { num: "05", title: "Process Management & Continual Improvement", link: "/consultancy" },
    { num: "06", title: "Digital Innovation, Data & AI", link: "/digital-ai" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-[var(--color-primary-navy)] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Solutions Built Around Performance
          </motion.h2>
          <div className="w-24 h-1 bg-[var(--color-gold-primary)] mx-auto" />
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
                className="block h-full bg-white border border-gray-100 p-10 rounded-xl shadow-[0_10px_30px_rgba(3,28,54,0.04)] hover:shadow-[0_20px_40px_rgba(3,28,54,0.08)] transition-all duration-500 group relative overflow-hidden"
              >
                {/* Top Border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-gold-primary)] transform origin-left scale-x-100 transition-transform duration-500" />
                
                {/* Gradient Reveal */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-navy)]/5 to-transparent opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <span className="text-4xl font-black text-[var(--color-gold-primary)]/20 transition-colors duration-500 mb-6 font-mono">
                    {service.num}
                  </span>
                  
                  <h3 className="text-xl font-bold text-[var(--color-primary-navy)] mb-4 flex-grow pr-8 leading-snug">
                    {service.title}
                  </h3>
                  
                  <div className="flex items-center text-[var(--color-primary-corporate)] font-bold text-sm uppercase tracking-wider mt-6">
                    <span className="mr-2">Explore</span>
                    <span className="transform translate-x-1 group-hover:translate-x-3 transition-transform duration-300">→</span>
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
