import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHardHat, 
  FaCogs, 
  FaLandmark, 
  FaIndustry, 
  FaGraduationCap, 
  FaHeartbeat, 
  FaHotel, 
  FaBuilding 
} from 'react-icons/fa';

import imgConstruction from '../../assets/images/ind_construction.jpg';
import imgEngineering from '../../assets/images/ind_engineering.jpg';
import imgGovernment from '../../assets/images/ind_government.jpg';
import imgManufacturing from '../../assets/images/ind_manufacturing.jpg';
import imgEducation from '../../assets/images/ind_education.jpg';
import imgHealthcare from '../../assets/images/ind_healthcare.jpg';
import imgHospitality from '../../assets/images/ind_hospitality.jpg';
import imgSmes from '../../assets/images/training_section.jpg';

const IndustriesSection = () => {
  const industries = [
    { name: "Infrastructure & Construction", Icon: FaHardHat, img: imgConstruction },
    { name: "Engineering & Technical", Icon: FaCogs, img: imgEngineering },
    { name: "Government", Icon: FaLandmark, img: imgGovernment },
    { name: "Manufacturing", Icon: FaIndustry, img: imgManufacturing },
    { name: "Education", Icon: FaGraduationCap, img: imgEducation },
    { name: "Healthcare", Icon: FaHeartbeat, img: imgHealthcare },
    { name: "Hospitality", Icon: FaHotel, img: imgHospitality },
    { name: "SMEs", Icon: FaBuilding, img: imgSmes }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-[var(--color-primary-navy)] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Industries We Serve
          </motion.h2>
          <div className="w-24 h-1 bg-[var(--color-gold-primary)] mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="relative h-64 lg:h-80 rounded-2xl overflow-hidden group cursor-default shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-[var(--color-gold-primary)]/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              {/* Background Image */}
              <img 
                src={industry.img}
                alt={industry.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Dark Overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-deep)] via-[var(--color-primary-navy)]/80 to-[var(--color-primary-navy)]/30 group-hover:via-[var(--color-primary-navy)]/60 transition-colors duration-500" />
              
              {/* Large Faint Icon Background */}
              <div className="absolute -right-8 -bottom-8 text-[var(--color-gold-primary)]/10 group-hover:text-[var(--color-gold-primary)]/20 transition-colors duration-500 pointer-events-none">
                <industry.Icon size={180} />
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 group-hover:-translate-y-2 group-hover:bg-[var(--color-gold-primary)] transition-all duration-300 border border-white/20">
                  <industry.Icon className="text-white text-xl" />
                </div>
                <h3 className="text-white font-bold text-lg lg:text-xl leading-tight group-hover:-translate-y-2 transition-transform duration-300">
                  {industry.name}
                </h3>
                <div className="w-0 h-1 bg-[var(--color-gold-primary)] mt-4 group-hover:w-12 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
