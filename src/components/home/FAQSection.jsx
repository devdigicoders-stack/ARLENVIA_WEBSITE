import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "What services does Arlenvia provide?",
      a: "Arlenvia specializes in Management Systems & Quality Consultancy, Professional Training, Audit & Assessment Services, Business Improvement, and Digital & AI solutions. We focus on bridging the gap between compliance requirements and actual business capability."
    },
    {
      q: "Can training be customized for our organization?",
      a: "Yes. While we offer standard certification and awareness courses, our most impactful work involves customizing training programs to directly address your organization's specific operational realities, culture, and business objectives."
    },
    {
      q: "Does Arlenvia provide audit and assessment support?",
      a: "Absolutely. We offer comprehensive audit services, including gap assessments, internal audit program management, supplier audits, and pre-assessment support to ensure you are fully prepared for external certification audits."
    },
    {
      q: "What management systems does Arlenvia support?",
      a: "We support a wide range of international standards, including ISO 9001 (Quality), ISO 14001 (Environment), ISO 45001 (Health & Safety), ISO 55001 (Asset Management), and industry-specific standards like ISO 29001."
    },
    {
      q: "How can we request a consultation?",
      a: "You can request a consultation by using the contact form on our website, sending an email to info@arlenvia.com, or calling our Philippines office. We typically begin with a brief discovery call to understand your needs."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#F7F6F2]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center items-center gap-4 mb-6">
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
              <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
                FAQ
              </span>
              <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-[#020E20] leading-[1.1] tracking-tight">
              Frequently Asked Questions
            </h2>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-[#E5E7EB]"
            >
              <button
                className="w-full text-left py-6 flex justify-between items-center group focus:outline-none"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className={`text-[19px] font-heading font-bold pr-8 transition-colors duration-300 ${activeIndex === index ? 'text-[var(--color-gold-primary)]' : 'text-[#020E20] group-hover:text-[var(--color-primary-corporate)]'}`}>
                  {faq.q}
                </span>
                <span className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${activeIndex === index ? 'border-[var(--color-gold-primary)] bg-[var(--color-gold-primary)] text-white rotate-45' : 'border-[#E5E7EB] text-[#020E20] group-hover:border-[var(--color-gold-primary)] group-hover:text-[var(--color-gold-primary)]'}`}>
                  {activeIndex === index ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-[#667085] text-[16px] leading-relaxed font-light">
                      {faq.a}
                    </p>
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

export default FAQSection;
