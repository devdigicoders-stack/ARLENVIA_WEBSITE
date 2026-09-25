import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import logoImage from '../../assets/logo/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Consultancy', path: '/consultancy' },
    { name: 'Training', path: '/training' },
    { name: 'Digital & AI', path: '/digital-ai' },
    { name: 'Insights', path: '/insights' },
  ];

  const headerClass = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled || !isHomePage 
      ? 'bg-[var(--color-primary-navy)] py-4 shadow-lg' 
      : 'bg-transparent py-6'
  }`;

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={logoImage} 
            alt="Arlenvia Logo" 
            className="h-10 md:h-12 lg:h-16 object-contain filter drop-shadow-md" 
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-lg text-white/90 font-medium ml-auto mr-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`hover:text-[var(--color-gold-primary)] transition-colors relative group ${
                location.pathname === link.path ? 'text-[var(--color-gold-primary)]' : ''
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-gold-primary)] transition-all duration-300 group-hover:w-full ${
                location.pathname === link.path ? 'w-full' : ''
              }`}></span>
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <Link to="/contact">
            <Button variant="outline" className="!py-2 !px-5 text-base uppercase tracking-wide">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle (Placeholder) */}
        <div className="lg:hidden text-white cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
