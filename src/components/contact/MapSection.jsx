import React from 'react';
import { motion } from 'framer-motion';

const MapSection = () => {
  return (
    <section id="map" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-[var(--color-primary-navy)] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Find Our Philippines Office
          </motion.h2>
          <div className="flex items-center justify-center gap-2 text-[var(--color-primary-corporate)] font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[var(--color-gold-primary)]">
              <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            Avida Residences Sta. Monica, Lipa City, Batangas, Philippines
          </div>
        </div>

        <motion.div 
          className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100 aspect-video lg:aspect-[21/9] relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Real Google Maps Embed */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d15486.20457497258!2d121.1643916!3d13.9317929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6c62c97486e9%3A0xc3f7a3f85dfbd33!2sAvida%20Residences%20Sta.%20Monica!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Arlenvia Office Location"
            className="absolute inset-0"
          ></iframe>
        </motion.div>

        <div className="text-center mt-10">
          <h3 className="text-xl font-bold text-[var(--color-primary-navy)] mb-2">Arlenvia Training Consultancy Services – Philippines Office</h3>
          <p className="text-gray-600 mb-6">Avida Residences Sta. Monica, Brgy. Antipolo del Sur, Lipa City, Batangas, Philippines 4217</p>
          <a href="https://maps.google.com/?q=Avida+Residences+Sta.+Monica,+Lipa+City,+Batangas,+Philippines" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-[var(--color-gold-primary)] text-white font-bold rounded-full hover:bg-[var(--color-primary-navy)] transition-colors shadow-md">
            View on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
