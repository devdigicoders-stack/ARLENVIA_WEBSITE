import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaMap } from 'react-icons/fa';
import logoImage from '../../assets/logo/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-primary-deep)] text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <img 
                src={logoImage} 
                alt="Arlenvia Logo" 
                className="h-20 object-contain filter drop-shadow-md" 
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Turning compliance into performance. We deliver practical management systems, auditing, and customized training solutions for sustainable business improvement.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-semibold text-[var(--color-gold-light)] mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/consultancy" className="hover:text-white transition-colors">Consultancy</Link></li>
              <li><Link to="/training" className="hover:text-white transition-colors">Training</Link></li>
              <li><Link to="/insights" className="hover:text-white transition-colors">Insights</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-semibold text-[var(--color-gold-light)] mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/consultancy" className="hover:text-white transition-colors">Management Systems</Link></li>
              <li><Link to="/consultancy" className="hover:text-white transition-colors">Audit & Assessment</Link></li>
              <li><Link to="/consultancy" className="hover:text-white transition-colors">Process Improvement</Link></li>
              <li><Link to="/digital-ai" className="hover:text-white transition-colors">Digital & AI</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-semibold text-[var(--color-gold-light)] mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="text-[var(--color-gold-primary)] mt-1 shrink-0" />
                +63-9060139793
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-[var(--color-gold-primary)] mt-1 shrink-0" />
                <div>
                  <a href="mailto:info@arlenvia.com" className="block hover:text-white">info@arlenvia.com</a>
                  <a href="mailto:arlene@arlenvia.com" className="block hover:text-white">arlene@arlenvia.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[var(--color-gold-primary)] mt-1 shrink-0" />
                <p>Avida Residences Sta. Monica,<br/>Brgy. Antipolo del Sur,<br/>Lipa City, Batangas,<br/>Philippines 4217</p>
              </li>
            </ul>
            <div className="mt-6">
              <a href="#" className="text-[var(--color-gold-primary)] text-sm font-medium hover:underline flex items-center gap-2">
                <FaMap /> View on Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Arlenvia Training Consultancy Services. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
