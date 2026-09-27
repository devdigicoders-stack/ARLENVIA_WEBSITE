import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/logo/logo.png';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting enquiry:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '', email: '', phone: '', company: '', service: '', subject: '', message: ''
      });
    }, 5000);
  };

  const inputClasses = "w-full bg-transparent border-b border-[#E5E7EB] py-3 text-[#020E20] placeholder-[#667085] font-light focus:outline-none focus:border-[var(--color-gold-primary)] transition-colors text-[15px] rounded-none";

  return (
    <section id="form" className="py-24 lg:py-32 bg-white relative overflow-hidden border-t border-[#E5E7EB]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Premium Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-px bg-[var(--color-gold-primary)]" />
                <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
                  Contact Form
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-[#020E20] mb-6 leading-[1.1] tracking-tight">
                Send an Enquiry
              </h2>
              <p className="text-[#667085] text-[17px] font-light leading-relaxed">
                Please fill out the form below and our consulting team will get back to you promptly.
              </p>
            </div>

            {submitted ? (
              <div className="bg-[#F7F6F2] border-l-4 border-[var(--color-gold-primary)] p-8">
                <h3 className="text-xl font-heading font-bold text-[#020E20] mb-2 uppercase tracking-widest">Thank You</h3>
                <p className="text-[#667085] font-light">Your enquiry has been successfully received. We will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <input type="text" name="name" placeholder="Full Name *" required value={formData.name} onChange={handleChange} className={inputClasses} />
                  </div>
                  <div>
                    <input type="email" name="email" placeholder="Email Address *" required value={formData.email} onChange={handleChange} className={inputClasses} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className={inputClasses} />
                  </div>
                  <div>
                    <input type="text" name="company" placeholder="Company / Organization" value={formData.company} onChange={handleChange} className={inputClasses} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <select name="service" required value={formData.service} onChange={handleChange} className={`${inputClasses} appearance-none cursor-pointer ${!formData.service ? 'text-[#667085]' : 'text-[#020E20]'}`}>
                      <option value="" disabled>Select Service Interest...</option>
                      <option value="Management Systems Consultancy">Management Systems Consultancy</option>
                      <option value="Training & Professional Development">Training & Professional Development</option>
                      <option value="Audit & Assessment">Audit & Assessment</option>
                      <option value="Business Performance Improvement">Business Performance Improvement</option>
                      <option value="Digital Innovation & AI">Digital Innovation & AI</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className={inputClasses} />
                  </div>
                </div>

                <div>
                  <textarea name="message" placeholder="How can we help you? *" required rows="4" value={formData.message} onChange={handleChange} className={`${inputClasses} resize-y bg-transparent`} />
                </div>

                <button type="submit" className="group relative inline-flex items-center justify-center bg-[#020E20] text-white px-10 py-4 font-heading font-bold text-[12px] uppercase tracking-widest overflow-hidden w-full sm:w-auto">
                  <span className="absolute inset-0 w-full h-full bg-[var(--color-gold-primary)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                  <span className="relative z-10 flex items-center gap-3 group-hover:text-[#020E20] transition-colors duration-500">
                    Submit Enquiry
                    <span className="text-lg leading-none transform transition-transform duration-500 group-hover:translate-x-1">→</span>
                  </span>
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Side: Information Panel */}
          <motion.div
            className="bg-[#020E20] p-12 lg:p-16 text-white relative overflow-hidden h-full min-h-[500px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo Watermark */}
            <div className="absolute -right-20 -bottom-20 opacity-[0.05] pointer-events-none">
              <img src={logo} alt="Arlenvia Watermark" className="w-[500px] h-auto grayscale" />
            </div>

            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-gold-primary)] opacity-5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-[2px] bg-[var(--color-gold-primary)] mb-10" />
              
              <h3 className="text-3xl lg:text-4xl font-heading font-semibold mb-8 text-white leading-tight">We're Here to Help</h3>
              
              <p className="text-white/60 text-[16px] leading-[1.8] font-light mb-16 border-l border-[var(--color-gold-primary)]/30 pl-6">
                Whether you're looking to implement a new management system, train your internal team, or improve business performance through digital innovation, our experts are ready to assist.
              </p>
              
              <div className="space-y-12 mt-auto">
                <div className="group">
                  <h4 className="font-heading font-bold text-[14px] uppercase tracking-widest text-[var(--color-gold-primary)] mb-3">Tailored Solutions</h4>
                  <p className="text-white/50 leading-relaxed font-light text-[14px]">We don't offer generic templates; we provide practical solutions designed for your specific business reality.</p>
                </div>
                
                <div className="group">
                  <h4 className="font-heading font-bold text-[14px] uppercase tracking-widest text-[var(--color-gold-primary)] mb-3">Expert Guidance</h4>
                  <p className="text-white/50 leading-relaxed font-light text-[14px]">Our consultants bring years of industry experience to help you achieve measurable performance improvement.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
