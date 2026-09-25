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

  const inputClasses = "w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-[var(--color-gold-primary)] focus:ring-2 focus:ring-[var(--color-gold-primary)]/20 transition-all duration-300 text-[var(--color-primary-navy)] font-medium placeholder-gray-400";

  return (
    <section id="form" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
        {/* Left Side: Premium Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 lg:p-12 rounded-3xl shadow-[0_20px_60px_rgba(3,28,54,0.06)] border border-gray-100"
        >
          <div className="mb-10 text-center sm:text-left">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[var(--color-primary-navy)] mb-4">Send an Enquiry</h2>
            <p className="text-gray-500 text-lg">Please fill out the form below and our consulting team will get back to you promptly.</p>
          </div>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
              <p className="text-green-700">Your enquiry has been successfully received. We will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <input type="text" name="name" placeholder="Full Name *" required value={formData.name} onChange={handleChange} className={inputClasses} />
                </div>
                <div>
                  <input type="email" name="email" placeholder="Email Address *" required value={formData.email} onChange={handleChange} className={inputClasses} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className={inputClasses} />
                </div>
                <div>
                  <input type="text" name="company" placeholder="Company / Organization" value={formData.company} onChange={handleChange} className={inputClasses} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <select name="service" required value={formData.service} onChange={handleChange} className={`${inputClasses} appearance-none cursor-pointer ${!formData.service ? 'text-gray-400' : ''}`}>
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
                <textarea name="message" placeholder="How can we help you? *" required rows="4" value={formData.message} onChange={handleChange} className={`${inputClasses} resize-y`} />
              </div>

              <button type="submit" className="w-full bg-[var(--color-primary-navy)] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[var(--color-primary-deep)] hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_20px_rgba(3,28,54,0.15)] flex items-center justify-center gap-3 group">
                Submit Enquiry
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </form>
          )}
        </motion.div>

        {/* Right Side: Information Panel with Watermark */}
        <motion.div
          className="bg-gradient-to-br from-[var(--color-primary-navy)] to-[var(--color-primary-deep)] rounded-3xl p-10 lg:p-14 text-white relative overflow-hidden flex flex-col justify-center shadow-2xl h-full min-h-[500px]"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo Watermark */}
          <div className="absolute -right-20 -bottom-20 opacity-[0.03] pointer-events-none">
            <img src={logo} alt="Arlenvia Watermark" className="w-[500px] h-auto grayscale" />
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-gold-primary)] opacity-10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10">
            <div className="w-16 h-1 bg-[var(--color-gold-primary)] mb-8" />
            <h3 className="text-3xl lg:text-4xl font-extrabold mb-6 text-white leading-tight">We're Here to Help</h3>
            <p className="text-white/80 text-lg leading-relaxed mb-12 font-light">
              Whether you're looking to implement a new management system, train your internal team, or improve business performance through digital innovation, our experts are ready to assist.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[var(--color-gold-primary)] shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-white">Tailored Solutions</h4>
                  <p className="text-white/70 leading-relaxed">We don't offer generic templates; we provide practical solutions designed for your specific business reality.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[var(--color-gold-primary)] shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.827M15.25 15.25a2.121 2.121 0 01-3 0 2.121 2.121 0 010-3 2.121 2.121 0 013 0 2.121 2.121 0 010 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-white">Expert Guidance</h4>
                  <p className="text-white/70 leading-relaxed">Our consultants bring years of industry experience to help you achieve measurable performance improvement.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnquiryForm;
