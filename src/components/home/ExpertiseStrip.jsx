import React from 'react';
import { motion } from 'framer-motion';

const ExpertiseStrip = () => {
  const expertises = [
    "Management Systems",
    "Professional Training",
    "Audit & Assessment",
    "Business Improvement",
    "Digital & AI",
  ];

  return (
    <div className="bg-[#020E20] py-5 border-y border-white/5 overflow-hidden relative select-none">
      <div className="flex gap-16 items-center whitespace-nowrap px-4 w-max animate-marquee">
        {[...expertises, ...expertises, ...expertises, ...expertises].map((item, index) => (
          <div key={index} className="flex items-center gap-16">
            <span className="text-[var(--color-gold-light)] font-heading font-semibold text-[13px] tracking-[0.15em] uppercase opacity-90">
              {item}
            </span>
            <span className="w-1 h-1 bg-[var(--color-gold-primary)]/40 rounded-full rotate-45"></span>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ExpertiseStrip;
