import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FiClock, FiMapPin, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const FeaturedPrograms = () => {
  const programs = [
    {
      title: "ISO 9001 Internal Auditor Training",
      duration: "2-3 Days",
      mode: "In-house / Online",
      desc: "Develop the skills to perform internal audits of Quality Management Systems effectively."
    },
    {
      title: "ISO 45001 Awareness Training",
      duration: "1 Day",
      mode: "In-house / Online",
      desc: "Understand the requirements and benefits of an Occupational Health & Safety Management System."
    },
    {
      title: "Root Cause Analysis Workshop",
      duration: "2 Days",
      mode: "In-house",
      desc: "Learn practical techniques to identify and eliminate the underlying causes of problems."
    },
    {
      title: "Risk-Based Auditing",
      duration: "2 Days",
      mode: "In-house / Online",
      desc: "Focus your audit efforts where they matter most by adopting a risk-based approach."
    },
    {
      title: "KPI & Performance Measurement",
      duration: "2 Days",
      mode: "In-house",
      desc: "Design and implement meaningful metrics that drive organizational performance."
    },
    {
      title: "Lead Auditor Development",
      duration: "5 Days",
      mode: "In-house",
      desc: "Advanced training for professionals leading audit teams and managing audit programs."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#F7F6F2] overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
              <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
                Core Courses
              </span>
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-[#020E20] leading-[1.1] tracking-tight">
              Featured Training Programs
            </h2>
          </motion.div>
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
            className="pb-20 px-4 !overflow-visible"
          >
            {programs.map((prog, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="bg-white border border-[#E5E7EB] p-10 h-full flex flex-col group hover:border-[var(--color-gold-primary)]/50 hover:shadow-xl transition-all duration-500 relative overflow-hidden cursor-grab active:cursor-grabbing">
                  {/* Accent Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-gold-primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  
                  <h3 className="text-[22px] font-heading font-bold text-[#020E20] mb-6 leading-snug group-hover:text-[var(--color-gold-primary)] transition-colors duration-300">
                    {prog.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    <span className="inline-flex items-center gap-2 py-1.5 px-3 bg-[#F7F6F2] text-[#020E20] text-xs font-bold tracking-wider uppercase">
                      <FiClock className="text-[var(--color-gold-primary)]" /> {prog.duration}
                    </span>
                    <span className="inline-flex items-center gap-2 py-1.5 px-3 bg-[#F7F6F2] text-[#020E20] text-xs font-bold tracking-wider uppercase">
                      <FiMapPin className="text-[var(--color-gold-primary)]" /> {prog.mode}
                    </span>
                  </div>
                  
                  <p className="text-[#667085] text-[15px] leading-relaxed flex-grow mb-10 font-light">
                    {prog.desc}
                  </p>
                  
                  <Link to="/contact" className="text-[#020E20] font-heading font-bold text-[13px] uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 group-hover:text-[var(--color-gold-primary)] transition-all mt-auto w-fit">
                    Request Details <span className="text-[16px] leading-none pb-0.5">→</span>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .swiper-pagination-bullet { background: rgba(2, 14, 32, 0.2); width: 10px; height: 10px; transition: all 0.3s ease; }
        .swiper-pagination-bullet-active { background: var(--color-gold-primary); transform: scale(1.2); }
        .swiper-button-next, .swiper-button-prev { color: var(--color-primary-navy); transform: scale(0.6); opacity: 0.5; transition: opacity 0.3s; }
        .swiper-button-next:hover, .swiper-button-prev:hover { opacity: 1; }
        .swiper-button-next { right: -20px; }
        .swiper-button-prev { left: -20px; }
        @media (max-width: 1024px) {
           .swiper-button-next, .swiper-button-prev { display: none; }
        }
      `}} />
    </section>
  );
};

export default FeaturedPrograms;
