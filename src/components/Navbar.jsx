import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ACCUEIL', path: '/' },
    { name: 'À PROPOS', path: '/about' },
    { name: 'ARTISTES', path: '/artists' },
    { name: 'ÉVÉNEMENTS', path: '/events' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-infrared-darker/80 backdrop-blur-custom shadow-glow'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="relative group">
            <div className="text-xl sm:text-2xl font-bold tracking-tighter">
              <span className="text-gradient">INFRAROUGE</span>
            </div>
            <div className="absolute -inset-2 bg-thermal-radial opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-mono text-xs lg:text-sm tracking-wider relative group transition-colors ${
                  location.pathname === link.path
                    ? 'text-infrared-hot'
                    : 'text-gray-300 hover:text-infrared-orange'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <div className="absolute -bottom-1 left-0 right-0 h-px bg-thermal-gradient" />
                )}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-0.5 bg-infrared-hot transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-infrared-orange transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-infrared-magenta transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 bg-infrared-darker/95 backdrop-blur-custom transition-all duration-500 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-4">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-mono text-xl sm:text-2xl tracking-wider transition-all duration-300 ${
                location.pathname === link.path
                  ? 'text-gradient scale-110'
                  : 'text-gray-300 hover:text-infrared-hot'
              }`}
              style={{
                transitionDelay: mobileMenuOpen ? `${index * 100}ms` : '0ms',
                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
                opacity: mobileMenuOpen ? 1 : 0,
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
