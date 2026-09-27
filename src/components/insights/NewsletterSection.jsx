import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-[#F7F6F2] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          className="bg-white p-12 lg:p-20 border border-[#E5E7EB] max-w-4xl mx-auto relative group overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-[2px] h-0 bg-[var(--color-gold-primary)] group-hover:h-full transition-all duration-700 ease-out" />
          <div className="absolute bottom-0 right-0 w-[2px] h-0 bg-[var(--color-gold-primary)] group-hover:h-full transition-all duration-700 ease-out" />
          
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
              <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
                Stay Informed
              </span>
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-[#020E20] mb-6 leading-[1.1] tracking-tight">
              Insights Delivered
            </h2>
            
            <p className="text-[#667085] mb-12 text-[17px] font-light max-w-lg">
              Receive practical perspectives on quality, management systems, and performance directly to your inbox.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow bg-transparent border-b border-[#E5E7EB] py-3 text-[#020E20] placeholder-[#667085] font-light focus:outline-none focus:border-[var(--color-gold-primary)] transition-colors text-[16px]"
                required
              />
              <button 
                type="submit" 
                className="group relative inline-flex items-center justify-center bg-[#020E20] text-white px-8 py-3 font-heading font-bold text-[12px] uppercase tracking-widest overflow-hidden whitespace-nowrap min-w-[140px]"
              >
                <span className="absolute inset-0 w-full h-full bg-[var(--color-gold-primary)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                <span className="relative z-10 group-hover:text-[#020E20] transition-colors duration-500">
                  {subscribed ? "Subscribed" : "Subscribe"}
                </span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
