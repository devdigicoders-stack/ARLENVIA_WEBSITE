import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQPreview = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What consultancy services does Arlenvia provide?",
      a: "Arlenvia provides practical support for establishing, improving, maintaining, or transitioning management systems (including ISO 9001, 14001, 45001, and more), as well as business performance improvement, process mapping, and risk management."
    },
    {
      q: "Can training programs be customized for our organization?",
      a: "Yes, we specialize in customized organizational training based on your specific business objectives, management-system requirements, operational risks, competency gaps, and performance issues."
    },
    {
      q: "Does Arlenvia provide audit and assessment support?",
      a: "Absolutely. We offer internal and process audits, supplier audits, compliance gap assessments, readiness assessments, and follow-up reviews to support better organizational decisions."
    },
    {
      q: "Can we enquire about multiple services?",
      a: "Yes. Our services are often integrated. You can indicate multiple areas of interest in the contact form, and we will discuss a comprehensive approach tailored to your needs."
    },
    {
      q: "How can we request a consultation?",
      a: "You can request a consultation by filling out the enquiry form on this page, emailing us at info@arlenvia.com, or calling our Philippines office directly. We will schedule a discussion to understand your specific requirements."
    }
  ];

  return (
    <section className="py-24 bg-[var(--color-warm-white)]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-[var(--color-primary-navy)] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="w-24 h-1 bg-[var(--color-gold-primary)] mx-auto" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-[var(--color-primary-navy)] pr-4">{faq.q}</span>
                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[var(--color-gold-primary)]' : 'text-gray-400'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQPreview;
