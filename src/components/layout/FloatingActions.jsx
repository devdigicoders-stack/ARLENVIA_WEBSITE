import React, { useState, useEffect } from 'react';
import { FiArrowUp, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className={`w-12 h-12 bg-[#020E20] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[var(--color-gold-primary)] hover:text-[#020E20] hover:-translate-y-1 transition-all duration-300 group relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        title="Scroll to Top"
      >
        <FiArrowUp className="text-xl" />
      </button>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/639060139793" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#20b858] hover:-translate-y-1 transition-all duration-300 group relative"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
        <span className="absolute right-14 bg-white text-[#020E20] text-[12px] font-bold px-3 py-1.5 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-[#E5E7EB]">
          WhatsApp Us
        </span>
      </a>

      {/* Call Button */}
      <a 
        href="tel:+639060139793" 
        className="w-12 h-12 bg-[#007BFF] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#0069D9] hover:-translate-y-1 transition-all duration-300 group relative"
        title="Call Us"
      >
        <FiPhone className="text-xl" />
        <span className="absolute right-14 bg-white text-[#020E20] text-[12px] font-bold px-3 py-1.5 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-[#E5E7EB]">
          Call Us
        </span>
      </a>
    </div>
  );
};

export default FloatingActions;
