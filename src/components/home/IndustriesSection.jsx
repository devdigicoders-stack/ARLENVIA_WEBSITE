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
        <div className="mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
              <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
                Sectors
              </span>
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-[#020E20] leading-tight tracking-tight">
              Creating Capability Across Sectors
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative h-64 lg:h-[340px] rounded-sm overflow-hidden group cursor-pointer border border-[#E5E7EB] hover:border-[var(--color-gold-primary)]/30 transition-colors duration-500"
            >
                {/* Background Image */}
                <img 
                  src={industry.img}
                  alt={industry.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-[0.16,1,0.3,1] group-hover:scale-[1.07]"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-[#020E20]/50 group-hover:bg-[#073866]/70 transition-colors duration-700 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020E20]/90 via-[#020E20]/40 to-transparent group-hover:from-[#020E20] transition-colors duration-700" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-white font-heading font-bold text-xl leading-snug transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:text-[var(--color-gold-light)]">
                    {industry.name}
                  </h3>
                  
                  {/* Arrow Reveal */}
                  <div className="absolute bottom-6 right-8 opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                    <span className="text-[var(--color-gold-primary)] text-xl">→</span>
                  </div>
                </div>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
