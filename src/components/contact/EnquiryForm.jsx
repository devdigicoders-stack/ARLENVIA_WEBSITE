import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    // In a real app, this would POST to /api/enquiries
    console.log("Submitting enquiry:", formData);
    setSubmitted(true);
    
    // Reset after showing message
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '', email: '', phone: '', company: '', service: '', subject: '', message: ''
      });
    }, 5000);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
        {/* Left Side: Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[var(--color-primary-navy)] mb-4">Send an Enquiry</h2>
            <p className="text-gray-600">Please fill out the form below and our team will get back to you promptly.</p>
          </div>

          {submitted ? (
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-md">
              <h3 className="text-lg font-bold text-green-800 mb-2">Thank You!</h3>
              <p className="text-green-700">Thank you for contacting Arlenvia. Your enquiry has been received.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-primary-navy)] mb-2">Full Name *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-[var(--color-primary-corporate)] focus:ring-1 focus:ring-[var(--color-primary-corporate)] bg-gray-50" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-primary-navy)] mb-2">Email Address *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-[var(--color-primary-corporate)] focus:ring-1 focus:ring-[var(--color-primary-corporate)] bg-gray-50" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-primary-navy)] mb-2">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-[var(--color-primary-corporate)] focus:ring-1 focus:ring-[var(--color-primary-corporate)] bg-gray-50" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-primary-navy)] mb-2">Company / Organization</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-[var(--color-primary-corporate)] focus:ring-1 focus:ring-[var(--color-primary-corporate)] bg-gray-50" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--color-primary-navy)] mb-2">Service Interested In *</label>
                <select name="service" required value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-[var(--color-primary-corporate)] focus:ring-1 focus:ring-[var(--color-primary-corporate)] bg-gray-50 appearance-none">
                  <option value="" disabled>Select a service...</option>
                  <option value="Management Systems Consultancy">Management Systems Consultancy</option>
                  <option value="Training & Professional Development">Training & Professional Development</option>
                  <option value="Audit & Assessment">Audit & Assessment</option>
                  <option value="Business Performance Improvement">Business Performance Improvement</option>
                  <option value="Process Improvement">Process Improvement</option>
                  <option value="Digital Innovation & AI">Digital Innovation & AI</option>
                  <option value="Customized Requirement">Customized Requirement</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--color-primary-navy)] mb-2">Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-[var(--color-primary-corporate)] focus:ring-1 focus:ring-[var(--color-primary-corporate)] bg-gray-50" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--color-primary-navy)] mb-2">Message *</label>
                <textarea name="message" required rows="5" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-[var(--color-primary-corporate)] focus:ring-1 focus:ring-[var(--color-primary-corporate)] bg-gray-50 resize-y" />
              </div>

              <button type="submit" className="bg-[var(--color-primary-navy)] text-white px-8 py-4 rounded-md font-bold hover:bg-[var(--color-primary-deep)] transition-colors shadow-md w-full sm:w-auto">
                Submit Enquiry
              </button>
            </form>
          )}
        </motion.div>

        {/* Right Side: Information Panel / Visual */}
        <motion.div
          className="bg-[var(--color-primary-deep)] rounded-2xl p-10 lg:p-14 text-white relative overflow-hidden flex flex-col justify-center shadow-xl"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary-corporate)] opacity-20 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--color-gold-primary)] opacity-10 rounded-full blur-[60px]" />
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6 text-[var(--color-gold-light)]">We're Here to Help</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              Whether you're looking to implement a new management system, train your internal team, or improve business performance through digital innovation, our experts are ready to assist.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[var(--color-gold-primary)]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Tailored Solutions</h4>
                  <p className="text-sm text-gray-400">We don't offer generic templates; we provide practical solutions designed for your specific business reality.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[var(--color-gold-primary)]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Expert Guidance</h4>
                  <p className="text-sm text-gray-400">Our consultants bring years of industry experience to help you achieve measurable performance improvement.</p>
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
