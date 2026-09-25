import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import aboutImage from '../../assets/images/about_arlenvia.jpg';

const WhoWeAre = () => {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-warm-white)]">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Image & Badge */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl relative group">
            <img 
              src={aboutImage}
              alt="Consultancy Meeting"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary-navy)]/30 to-transparent mix-blend-overlay" />
          </div>
          
          {/* Floating Badge */}
          <motion.div 
            className="absolute -bottom-6 -right-6 lg:-right-10 bg-white p-6 rounded-xl shadow-[0_20px_50px_rgba(3,28,54,0.1)] max-w-[280px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-12 h-12 bg-[var(--color-gold-primary)]/10 rounded-full flex items-center justify-center mb-4 text-[var(--color-gold-primary)] text-2xl">
              ✦
            </div>
            <p className="font-semibold text-[var(--color-primary-navy)] text-lg leading-tight">
              Practical • Relevant • Results-Oriented
            </p>
          </motion.div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[var(--color-gold-primary)] font-bold tracking-wider text-sm uppercase mb-4 block">
            Who We Are
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-primary-navy)] mb-6 leading-tight">
            Turning Management-System Requirements Into Real Business Value
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
            <p>
              At Arlenvia Training Consultancy Services, we believe that compliance should not be an administrative burden. It should be a strategic tool that drives organizational capability and business performance.
            </p>
            <p>
              We go beyond simply helping you achieve certification. We connect compliance to better decision-making, operational efficiency, robust risk management, enhanced customer confidence, and overall sustainable improvement. Our solutions are designed to integrate seamlessly with your core business objectives.
            </p>
          </div>
          <Link to="/consultancy">
            <Button variant="primary">
              Explore Our Services <span className="ml-2">→</span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
