import React from 'react';
import { motion } from 'framer-motion';

const ContactCards = () => {
  return (
    <section className="py-24 lg:py-32 bg-white relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto -mt-32 lg:-mt-48 relative z-20">
          
          {/* Email Us */}
          <motion.div
            className="bg-white p-10 border border-[#E5E7EB] shadow-xl text-center group flex flex-col items-center hover:border-[var(--color-gold-primary)]/50 transition-colors duration-500 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-gold-primary)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            
            <div className="w-12 h-12 bg-[#020E20] text-white flex items-center justify-center mx-auto mb-8 group-hover:bg-[var(--color-gold-primary)] transition-colors duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            
            <h3 className="text-[14px] font-heading font-bold text-[#020E20] mb-4 uppercase tracking-widest">Email Us</h3>
            
            <div className="text-[#667085] mb-8 flex flex-col gap-2 font-light text-[15px]">
              <a href="mailto:info@arlenvia.com" className="hover:text-[var(--color-gold-primary)] transition-colors">info@arlenvia.com</a>
              <a href="mailto:arlene@arlenvia.com" className="hover:text-[var(--color-gold-primary)] transition-colors">arlene@arlenvia.com</a>
            </div>
            
            <a href="mailto:info@arlenvia.com" className="mt-auto inline-flex items-center gap-2 text-[12px] font-heading font-bold text-[#020E20] uppercase tracking-widest hover:text-[var(--color-gold-primary)] transition-colors">
              Send Email <span className="text-lg leading-none">→</span>
            </a>
          </motion.div>

          {/* Call Us */}
          <motion.div
            className="bg-white p-10 border border-[#E5E7EB] shadow-xl text-center group flex flex-col items-center hover:border-[var(--color-gold-primary)]/50 transition-colors duration-500 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-gold-primary)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

            <div className="w-12 h-12 bg-[#020E20] text-white flex items-center justify-center mx-auto mb-8 group-hover:bg-[var(--color-gold-primary)] transition-colors duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.25-3.95-6.847-6.847l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            
            <h3 className="text-[14px] font-heading font-bold text-[#020E20] mb-4 uppercase tracking-widest">Call Us</h3>
            
            <div className="text-[#667085] mb-8 font-light text-[17px] h-[48px] flex items-center justify-center">
              <a href="tel:+639060139793" className="hover:text-[var(--color-gold-primary)] transition-colors">+63-9060139793</a>
            </div>
            
            <a href="tel:+639060139793" className="mt-auto inline-flex items-center gap-2 text-[12px] font-heading font-bold text-[#020E20] uppercase tracking-widest hover:text-[var(--color-gold-primary)] transition-colors">
              Call Now <span className="text-lg leading-none">→</span>
            </a>
          </motion.div>

          {/* Visit Our Office */}
          <motion.div
            className="bg-[#020E20] p-10 border border-[#020E20] shadow-xl text-center text-white flex flex-col items-center relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-gold-primary)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="w-12 h-12 bg-[var(--color-gold-primary)] text-white flex items-center justify-center mx-auto mb-8 relative z-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            
            <h3 className="text-[14px] font-heading font-bold text-white mb-4 uppercase tracking-widest relative z-10">Visit Our Office</h3>
            
            <div className="text-white/70 mb-8 text-[14px] leading-[1.8] font-light h-[72px] flex flex-col justify-center items-center relative z-10">
              <span className="font-semibold text-[var(--color-gold-primary)] uppercase tracking-widest text-[11px] mb-2">Philippines Office</span>
              Avida Residences Sta. Monica<br/>
              Lipa City, Batangas
            </div>
            
            <a href="#map" className="mt-auto inline-flex items-center gap-2 text-[12px] font-heading font-bold text-[var(--color-gold-primary)] uppercase tracking-widest hover:text-white transition-colors relative z-10">
              Get Directions <span className="text-lg leading-none">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCards;
