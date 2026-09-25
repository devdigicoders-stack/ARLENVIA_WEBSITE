import React from 'react';
import { motion } from 'framer-motion';

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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-primary-navy)] mb-4">
            Supporting Organizations Across Multiple Sectors
          </h2>
          <div className="w-24 h-1 bg-[var(--color-gold-primary)] mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              {/* Image Background */}
              <img 
                src={sector.img}
                alt={sector.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-navy)] via-[var(--color-primary-navy)]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
                <h3 className="text-lg lg:text-xl font-semibold mb-2 group-hover:-translate-y-2 transition-transform duration-300">
                  {sector.title}
                </h3>
                <div className="flex items-center text-[var(--color-gold-light)] font-medium text-sm opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300">
                  Learn More <span className="ml-2">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
