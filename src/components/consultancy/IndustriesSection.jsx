import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaCogs, FaLandmark, FaIndustry, FaGraduationCap, FaClinicMedical, FaHotel, FaBriefcase } from 'react-icons/fa';

const IndustriesSection = () => {
  const industries = [
    { name: "Infrastructure & Construction", icon: <FaBuilding /> },
    { name: "Engineering & Technical", icon: <FaCogs /> },
    { name: "Government", icon: <FaLandmark /> },
    { name: "Manufacturing", icon: <FaIndustry /> },
    { name: "Education", icon: <FaGraduationCap /> },
    { name: "Healthcare", icon: <FaClinicMedical /> },
    { name: "Hospitality", icon: <FaHotel /> },
    { name: "SMEs", icon: <FaBriefcase /> }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-2xl lg:text-3xl font-bold text-[var(--color-primary-navy)] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Industries We Support
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {industries.map((ind, index) => (
            <motion.div
              key={index}
              className="bg-[var(--color-warm-white)] p-6 rounded-lg text-center border border-gray-100 hover:border-[var(--color-gold-primary)]/50 hover:shadow-md hover:bg-white transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="text-3xl mb-4 text-[var(--color-primary-navy)]/60 group-hover:text-[var(--color-gold-primary)] transition-colors duration-300 flex justify-center">{ind.icon}</div>
              <h3 className="text-sm font-semibold text-[var(--color-primary-navy)] group-hover:text-[var(--color-primary-corporate)]">{ind.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
