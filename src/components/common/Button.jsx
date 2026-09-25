import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = "px-6 py-3 rounded font-medium transition-all duration-300 inline-flex items-center justify-center";
  
  const variants = {
    primary: "bg-[var(--color-gold-primary)] text-white hover:bg-[var(--color-gold-light)] shadow-lg shadow-[var(--color-gold-primary)]/20 hover:-translate-y-1",
    outline: "border-2 border-[var(--color-gold-primary)] text-[var(--color-gold-primary)] hover:bg-[var(--color-gold-primary)] hover:text-white hover:-translate-y-1",
    secondary: "bg-[var(--color-primary-corporate)] text-white hover:bg-[var(--color-primary-navy)] shadow-md hover:-translate-y-1",
  };

  return (
    <motion.button 
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
