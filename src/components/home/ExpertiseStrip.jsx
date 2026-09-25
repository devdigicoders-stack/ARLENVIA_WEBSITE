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
    <div className="bg-[var(--color-primary-navy)] py-4 border-b border-white/10 overflow-hidden relative">
      <div className="flex gap-12 items-center whitespace-nowrap px-4 w-max animate-marquee">
        {/* We map twice to create an infinite loop effect easily if the list is short, or just repeat the content */}
        {[...expertises, ...expertises, ...expertises].map((item, index) => (
          <div key={index} className="flex items-center gap-12">
            <span className="text-[var(--color-gold-light)] font-medium text-sm tracking-widest uppercase">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ExpertiseStrip;
