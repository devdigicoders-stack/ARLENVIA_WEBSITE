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
    <section className="py-24 bg-[var(--color-warm-white)]">
      <div className="container mx-auto px-6">
        <motion.div 
          className="bg-white rounded-2xl p-10 md:p-16 text-center max-w-4xl mx-auto border border-gray-100 shadow-[0_15px_40px_rgba(3,28,54,0.05)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 mx-auto bg-[var(--color-gold-primary)]/10 rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[var(--color-gold-primary)]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
          
          <h2 className="text-3xl font-bold text-[var(--color-primary-navy)] mb-4">
            Stay Informed
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Receive practical insights, training updates and Arlenvia news directly in your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-5 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-[var(--color-primary-corporate)] bg-gray-50 text-gray-800"
              required
            />
            <button 
              type="submit" 
              className="bg-[var(--color-primary-navy)] hover:bg-[var(--color-primary-deep)] text-white px-8 py-3 rounded-md font-bold transition-colors shadow-md whitespace-nowrap"
            >
              {subscribed ? "Subscribed!" : "Subscribe"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
