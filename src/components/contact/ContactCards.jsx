import React from 'react';
import { motion } from 'framer-motion';

const ContactCards = () => {
  return (
    <section className="py-24 bg-[var(--color-warm-white)] -mt-10 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Email Us */}
          <motion.div
            className="bg-white p-10 rounded-2xl border border-gray-100 shadow-[0_15px_40px_rgba(3,28,54,0.05)] text-center hover:shadow-[0_20px_50px_rgba(3,28,54,0.1)] transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 rounded-full bg-[var(--color-primary-navy)] text-white flex items-center justify-center mx-auto mb-6 group-hover:bg-[var(--color-gold-primary)] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[var(--color-primary-navy)] mb-4">Email Us</h3>
            <div className="text-gray-600 mb-6 flex flex-col gap-2">
              <a href="mailto:info@arlenvia.com" className="hover:text-[var(--color-gold-primary)] transition-colors">info@arlenvia.com</a>
              <a href="mailto:arlene@arlenvia.com" className="hover:text-[var(--color-gold-primary)] transition-colors">arlene@arlenvia.com</a>
            </div>
            <a href="mailto:info@arlenvia.com" className="inline-block px-6 py-2 border-2 border-[var(--color-primary-navy)] text-[var(--color-primary-navy)] font-semibold rounded-full hover:bg-[var(--color-primary-navy)] hover:text-white transition-colors">
              Send Email
            </a>
          </motion.div>

          {/* Call Us */}
          <motion.div
            className="bg-white p-10 rounded-2xl border border-gray-100 shadow-[0_15px_40px_rgba(3,28,54,0.05)] text-center hover:shadow-[0_20px_50px_rgba(3,28,54,0.1)] transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-16 h-16 rounded-full bg-[var(--color-primary-navy)] text-white flex items-center justify-center mx-auto mb-6 group-hover:bg-[var(--color-gold-primary)] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.25-3.95-6.847-6.847l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[var(--color-primary-navy)] mb-4">Call Us</h3>
            <div className="text-gray-600 mb-6 font-medium text-lg h-[48px] flex items-center justify-center">
              <a href="tel:+639060139793" className="hover:text-[var(--color-gold-primary)] transition-colors">+63-9060139793</a>
            </div>
            <a href="tel:+639060139793" className="inline-block px-6 py-2 border-2 border-[var(--color-primary-navy)] text-[var(--color-primary-navy)] font-semibold rounded-full hover:bg-[var(--color-primary-navy)] hover:text-white transition-colors">
              Call Now
            </a>
          </motion.div>

          {/* Visit Our Office */}
          <motion.div
            className="bg-[var(--color-primary-navy)] p-10 rounded-2xl border border-[var(--color-primary-navy)] shadow-[0_15px_40px_rgba(3,28,54,0.15)] text-center text-white hover:shadow-[0_20px_50px_rgba(3,28,54,0.3)] transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-16 h-16 rounded-full bg-[var(--color-gold-primary)] text-white flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Visit Our Office</h3>
            <div className="text-gray-300 mb-6 text-sm leading-relaxed h-[72px] flex flex-col justify-center items-center">
              <span className="font-semibold text-white">Philippines Office</span>
              Avida Residences Sta. Monica<br/>
              Brgy. Antipolo del Sur, Lipa City<br/>
              Batangas, Philippines 4217
            </div>
            <a href="#map" className="inline-block px-6 py-2 border-2 border-[var(--color-gold-primary)] text-[var(--color-gold-primary)] font-semibold rounded-full hover:bg-[var(--color-gold-primary)] hover:text-[var(--color-primary-navy)] transition-colors mt-2">
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCards;
