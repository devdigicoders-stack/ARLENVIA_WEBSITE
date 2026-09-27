import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import imgConstruction from '../../assets/images/ind_construction.jpg';
import imgEngineering from '../../assets/images/ind_engineering.jpg';
import imgGovernment from '../../assets/images/ind_government.jpg';
import imgManufacturing from '../../assets/images/ind_manufacturing.jpg';
import imgEducation from '../../assets/images/ind_education.jpg';
import imgHealthcare from '../../assets/images/ind_healthcare.jpg';
import imgHospitality from '../../assets/images/ind_hospitality.jpg';
import imgSmes from '../../assets/images/training_section.jpg';

const WhoWeServe = () => {
  const sectors = [
    { title: "Infrastructure & Construction", img: imgConstruction },
    { title: "Engineering & Technical", img: imgEngineering },
    { title: "Government & Public Sector", img: imgGovernment },
    { title: "Manufacturing", img: imgManufacturing },
    { title: "Education & Training", img: imgEducation },
    { title: "Healthcare", img: imgHealthcare },
    { title: "Hospitality & Services", img: imgHospitality },
    { title: "SMEs & Professionals", img: imgSmes }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl lg:text-5xl font-heading font-semibold text-[#020E20] leading-[1.1] tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Sectors We Serve
          </motion.h2>
          <motion.div 
            className="w-16 h-px bg-[var(--color-gold-primary)] mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 lg:gap-2">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              className="group relative aspect-[4/5] overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link to="/consultancy" className="block w-full h-full">
                {/* Image Background */}
                <img 
                  src={sector.img}
                  alt={sector.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-[2s] ease-out"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020E20]/90 via-[#020E20]/30 to-transparent transition-opacity duration-700" />
                
                {/* Gold Overlay on Hover */}
                <div className="absolute inset-0 bg-[var(--color-gold-primary)] mix-blend-multiply opacity-0 group-hover:opacity-60 transition-opacity duration-700" />
                
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end text-white z-10">
                  <div className="flex justify-between items-end">
                    <h3 className="text-lg lg:text-xl font-heading font-bold max-w-[150px] leading-snug">
                      {sector.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:border-white transition-all duration-500 overflow-hidden">
                      <span className="text-white text-sm -translate-x-full group-hover:translate-x-0 transition-transform duration-500 delay-100">→</span>
                    </div>
                  </div>
                  {/* Underline reveal */}
                  <div className="w-0 h-[2px] bg-white mt-4 group-hover:w-full transition-all duration-700 ease-out" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
