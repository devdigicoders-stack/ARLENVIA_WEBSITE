import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaUsers, FaTools } from 'react-icons/fa';

const TrainingDelivery = () => {
  const modes = [
    { 
      title: "Corporate / In-House Training", 
      desc: "Delivered directly at your facility, this approach is focused entirely on your organization's specific systems, processes, and business challenges. It offers maximum relevance, confidentiality, and team alignment for your core staff.",
      icon: <FaBuilding />
    },
    { 
      title: "Public Training Programs", 
      desc: "Open enrollment sessions that are ideal for individuals or small groups seeking standard competency development. These programs provide an excellent opportunity to network with peers from other organizations and share industry best practices.",
      icon: <FaUsers />
    },
    { 
      title: "Customized Workshops", 
      desc: "Highly tailored, interactive sessions explicitly designed to address specific operational problems, compliance issues, or strategic competency gaps. We integrate your real-world data and documents directly into the learning experience.",
      icon: <FaTools />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-[var(--color-primary-navy)] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Flexible Delivery Options
          </motion.h2>
          <div className="w-24 h-1 bg-[var(--color-gold-primary)] mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {modes.map((mode, index) => (
            <motion.div
              key={index}
              className="bg-[var(--color-warm-white)] p-10 rounded-2xl border-t-4 border-[var(--color-primary-corporate)] hover:border-[var(--color-gold-primary)] transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 min-h-[340px] flex flex-col group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl text-[var(--color-primary-navy)]/20 mb-6 group-hover:text-[var(--color-gold-primary)] transition-colors duration-300">
                {mode.icon}
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-primary-navy)] mb-4 leading-tight">
                {mode.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
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
