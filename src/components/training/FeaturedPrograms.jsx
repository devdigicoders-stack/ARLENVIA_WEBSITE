import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FeaturedPrograms = () => {
  const programs = [
    {
      title: "ISO 9001 Internal Auditor Training",
      duration: "[Duration]",
      mode: "[Delivery Mode]",
      desc: "Develop the skills to perform internal audits of Quality Management Systems effectively."
    },
    {
      title: "ISO 45001 Awareness Training",
      duration: "[Duration]",
      mode: "[Delivery Mode]",
      desc: "Understand the requirements and benefits of an Occupational Health & Safety Management System."
    },
    {
      title: "Root Cause Analysis Workshop",
      duration: "[Duration]",
      mode: "[Delivery Mode]",
      desc: "Learn practical techniques to identify and eliminate the underlying causes of problems."
    },
    {
      title: "Risk-Based Auditing",
      duration: "[Duration]",
      mode: "[Delivery Mode]",
      desc: "Focus your audit efforts where they matter most by adopting a risk-based approach."
    },
    {
      title: "KPI & Performance Measurement",
      duration: "[Duration]",
      mode: "[Delivery Mode]",
      desc: "Design and implement meaningful metrics that drive organizational performance."
    },
    {
      title: "Lead Auditor Development",
      duration: "[Duration]",
      mode: "[Delivery Mode]",
      desc: "Advanced training for professionals leading audit teams and managing audit programs."
    }
  ];

  return (
    <section className="py-24 bg-[var(--color-primary-navy)] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured Training Programs
          </motion.h2>
          <div className="w-24 h-1 bg-[var(--color-gold-primary)] mx-auto" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16 px-4"
          >
            {programs.map((prog, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="bg-[var(--color-primary-deep)] border border-white/10 rounded-xl p-8 h-full flex flex-col group hover:border-[var(--color-gold-primary)]/50 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-[var(--color-gold-light)] transition-colors">
                    {prog.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="inline-block py-1 px-3 bg-white/5 rounded text-xs text-gray-300 font-medium">
                      ⏱ {prog.duration}
                    </span>
                    <span className="inline-block py-1 px-3 bg-white/5 rounded text-xs text-gray-300 font-medium">
                      📍 {prog.mode}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-8">
                    {prog.desc}
                  </p>
                  
                  <button className="text-[var(--color-gold-primary)] font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                    View Details <span>→</span>
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .swiper-pagination-bullet { background: rgba(255,255,255,0.5); }
        .swiper-pagination-bullet-active { background: var(--color-gold-primary); }
        .swiper-button-next, .swiper-button-prev { color: var(--color-gold-primary); transform: scale(0.7); }
      `}} />
    </section>
  );
};

export default FeaturedPrograms;
