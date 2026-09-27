import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaMap } from 'react-icons/fa';
import logoImage from '../../assets/logo/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#020E20] text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 */}
          <div className="text-center md:text-left">
            <Link to="/" className="flex justify-center md:justify-start mb-6">
              <img 
                src={logoImage} 
                alt="Arlenvia Logo" 
                className="h-16 object-contain" 
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Turning compliance into performance. We deliver practical management systems, auditing, and customized training solutions for sustainable business improvement.
            </p>
          </div>

          {/* Column 2 */}
          <div className="text-center md:text-left">
            <h4 className="text-[13px] font-heading font-bold text-[var(--color-gold-primary)] uppercase tracking-[0.15em] mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/70 font-light text-[15px]">
              <li><Link to="/" className="hover:text-[var(--color-gold-primary)] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[var(--color-gold-primary)] transition-colors">About</Link></li>
              <li><Link to="/consultancy" className="hover:text-[var(--color-gold-primary)] transition-colors">Consultancy</Link></li>
              <li><Link to="/training" className="hover:text-[var(--color-gold-primary)] transition-colors">Training</Link></li>
              <li><Link to="/insights" className="hover:text-[var(--color-gold-primary)] transition-colors">Insights</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="text-center md:text-left">
            <h4 className="text-[13px] font-heading font-bold text-[var(--color-gold-primary)] uppercase tracking-[0.15em] mb-6">Services</h4>
            <ul className="space-y-4 text-white/70 font-light text-[15px]">
              <li><Link to="/consultancy" className="hover:text-[var(--color-gold-primary)] transition-colors">Management Systems</Link></li>
              <li><Link to="/consultancy" className="hover:text-[var(--color-gold-primary)] transition-colors">Audit & Assessment</Link></li>
              <li><Link to="/consultancy" className="hover:text-[var(--color-gold-primary)] transition-colors">Process Improvement</Link></li>
              <li><Link to="/digital-ai" className="hover:text-[var(--color-gold-primary)] transition-colors">Digital & AI</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="text-center md:text-left">
            <h4 className="text-[13px] font-heading font-bold text-[var(--color-gold-primary)] uppercase tracking-[0.15em] mb-6">Contact</h4>
            <ul className="space-y-5 text-white/70 font-light text-[15px]">
              <li className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-3">
                <FaPhoneAlt className="text-[var(--color-gold-primary)] md:mt-1 shrink-0" />
                <span className="hover:text-white transition-colors cursor-pointer">+63-9060139793</span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-3">
                <FaEnvelope className="text-[var(--color-gold-primary)] md:mt-1 shrink-0" />
                <div className="text-center md:text-left flex flex-col gap-1">
                  <a href="mailto:info@arlenvia.com" className="hover:text-[var(--color-gold-primary)] transition-colors">info@arlenvia.com</a>
                  <a href="mailto:arlene@arlenvia.com" className="hover:text-[var(--color-gold-primary)] transition-colors">arlene@arlenvia.com</a>
                </div>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-3">
                <FaMapMarkerAlt className="text-[var(--color-gold-primary)] md:mt-1 shrink-0" />
                <p className="text-center md:text-left leading-relaxed">
                  Avida Residences Sta. Monica,<br/>
                  Brgy. Antipolo del Sur,<br/>
                  Lipa City, Batangas,<br/>
                  Philippines 4217
                </p>
              </li>
            </ul>
            <div className="mt-8 flex justify-center md:justify-start">
              <a href="#" className="inline-flex items-center gap-2 text-[12px] font-heading font-bold uppercase tracking-widest text-[var(--color-gold-primary)] group">
                <span className="border-b border-transparent group-hover:border-[var(--color-gold-primary)] transition-colors pb-0.5">View on Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center md:flex md:justify-between items-center text-white/40 text-sm font-light">
          <p>© {new Date().getFullYear()} Arlenvia Training Consultancy Services. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
