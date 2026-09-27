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
    <section className="py-24 lg:py-32 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24 items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sticky top-32"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
              <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
                Support
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-[#020E20] mb-6 leading-[1.1] tracking-tight">
              Frequently Asked <span className="italic font-light text-[var(--color-gold-primary)]">Questions</span>
            </h2>
            
            <p className="text-[#667085] font-light text-[17px] leading-relaxed mb-8">
              Find quick answers to common questions about our consultancy, training, and assessment services.
            </p>
            
            <a href="#form" className="group relative inline-flex items-center justify-center bg-[#020E20] text-white px-8 py-3 font-heading font-bold text-[12px] uppercase tracking-widest overflow-hidden whitespace-nowrap w-fit">
              <span className="absolute inset-0 w-full h-full bg-[var(--color-gold-primary)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
              <span className="relative z-10 group-hover:text-[#020E20] transition-colors duration-500">
                Still have questions?
              </span>
            </a>
          </motion.div>

          <div className="border-t border-[#E5E7EB]">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border-b border-[#E5E7EB] group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <button
                  className="w-full py-8 text-left flex justify-between items-center focus:outline-none group-hover:text-[var(--color-gold-primary)] transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-heading font-bold text-[18px] text-[#020E20] group-hover:text-[var(--color-gold-primary)] transition-colors pr-8">
                    {faq.q}
                  </span>
                  <span className={`transform transition-transform duration-500 ease-[0.16,1,0.3,1] w-8 h-8 rounded-full border border-[#E5E7EB] flex items-center justify-center shrink-0 ${openIndex === index ? 'rotate-45 bg-[#020E20] border-[#020E20] text-white' : 'text-[#020E20]'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 text-[#667085] font-light text-[16px] leading-[1.8] pr-12">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPreview;
