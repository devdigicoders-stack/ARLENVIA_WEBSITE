import React from 'react';
import { motion } from 'framer-motion';

const QuickContactStrip = () => {
  return (
    <section className="bg-[var(--color-primary-navy)] py-8 border-y border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
          <motion.div 
            className="text-white font-bold text-xl lg:text-2xl text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Have a question or need assistance?
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a href="tel:+639060139793" className="w-full sm:w-auto text-center px-6 py-3 bg-white/10 hover:bg-[var(--color-gold-primary)] text-white hover:text-[var(--color-primary-navy)] rounded-md font-semibold transition-colors flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.25-3.95-6.847-6.847l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              +63-9060139793
            </a>
            
            <a href="mailto:info@arlenvia.com" className="w-full sm:w-auto text-center px-6 py-3 bg-white/10 hover:bg-[var(--color-gold-primary)] text-white hover:text-[var(--color-primary-navy)] rounded-md font-semibold transition-colors flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              info@arlenvia.com
            </a>
            
            <button onClick={() => window.scrollTo({top: 500, behavior: 'smooth'})} className="w-full sm:w-auto text-center px-6 py-3 bg-[var(--color-gold-primary)] text-[var(--color-primary-navy)] hover:bg-white rounded-md font-bold transition-colors">
              Send Enquiry
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuickContactStrip;
