import React from 'react';
import { motion } from 'framer-motion';

const MapSection = () => {
  return (
    <section id="map" className="py-24 lg:py-32 bg-[#F7F6F2]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
              <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
                Location
              </span>
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-[#020E20] mb-6 leading-[1.1] tracking-tight">
              Find Our Philippines Office
            </h2>
            <div className="flex items-center justify-center gap-2 text-[#667085] font-light text-[15px]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[var(--color-gold-primary)]">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              Avida Residences Sta. Monica, Lipa City, Batangas, Philippines
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="border border-[#E5E7EB] bg-white p-4 shadow-xl aspect-video lg:aspect-[21/9] relative group overflow-hidden"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative Corner Borders */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-[2px] border-l-[2px] border-[#020E20] z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-[2px] border-r-[2px] border-[#020E20] z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[2px] border-l-[2px] border-[#020E20] z-10 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[2px] border-r-[2px] border-[#020E20] z-10 pointer-events-none" />

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
            className="w-full h-full grayscale-[50%] group-hover:grayscale-[0%] transition-all duration-1000"
          ></iframe>
        </motion.div>

        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-[14px] font-heading font-bold text-[#020E20] mb-4 uppercase tracking-widest">Arlenvia Training Consultancy Services – Philippines Office</h3>
          <p className="text-[#667085] mb-8 font-light text-[15px]">Avida Residences Sta. Monica, Brgy. Antipolo del Sur, Lipa City, Batangas, Philippines 4217</p>
          
          <a href="https://maps.google.com/?q=Avida+Residences+Sta.+Monica,+Lipa+City,+Batangas,+Philippines" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[12px] font-heading font-bold uppercase tracking-widest text-[#020E20] hover:text-[var(--color-gold-primary)] transition-colors group/btn w-fit mx-auto">
            View on Google Maps
            <span className="w-8 h-px bg-[#020E20] group-hover/btn:bg-[var(--color-gold-primary)] group-hover/btn:w-12 transition-all duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
