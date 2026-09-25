import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../common/Button';
import logoImage from '../../assets/logo/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

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
    <>
      <header className={headerClass}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center z-50 relative">
            <img 
              src={logoImage} 
              alt="Arlenvia Logo" 
              className="h-10 md:h-12 lg:h-16 object-contain filter drop-shadow-md" 
            />
          </Link>

          {/* Desktop Navigation */}
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
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--color-gold-primary)] transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Contact Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button variant="outline" className="!py-2 !px-5 text-base uppercase tracking-wide">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="lg:hidden text-[var(--color-gold-primary)] cursor-pointer z-50 relative p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-center relative">
              <span className={`w-full h-[2px] bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
              <span className={`w-full h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-[2px] bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 bg-[var(--color-primary-navy)] lg:hidden flex flex-col"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex-1 overflow-y-auto px-6 pt-32 pb-12 flex flex-col justify-center gap-8">
              <nav className="flex flex-col gap-6 text-center">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                  >
                    <Link 
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-2xl font-bold transition-colors ${
                        location.pathname === link.path ? 'text-[var(--color-gold-primary)]' : 'text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              
              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * navLinks.length, duration: 0.3 }}
              >
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="bg-[var(--color-gold-primary)] text-[var(--color-primary-navy)] font-bold py-4 px-10 rounded-full text-lg w-full max-w-sm mx-auto shadow-lg shadow-[var(--color-gold-primary)]/20 active:scale-95 transition-transform">
                    Contact Us
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
