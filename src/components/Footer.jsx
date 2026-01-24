import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: 'Accueil', path: '/' },
      { name: 'À propos', path: '/about' },
      { name: 'Artistes', path: '/artists' },
      { name: 'Événements', path: '/events' },
    ],
    social: [
      { name: 'Instagram', url: '#', icon: 'IG' },
      { name: 'SoundCloud', url: '#', icon: 'SC' },
      { name: 'Spotify', url: '#', icon: 'SP' },
      { name: 'YouTube', url: '#', icon: 'YT' },
    ],
  };

  return (
    <footer className="relative bg-infrared-deep border-t border-infrared-purple/30 mt-20">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          <div className="space-y-4 text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-bold tracking-tighter">
              <span className="text-gradient">INFRAROUGE</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Une expérience underground contemporaine. Là où la musique rencontre l'obscurité élégante.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="font-mono text-xs sm:text-sm tracking-widest text-infrared-hot mb-4">
              NAVIGATION
            </h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-infrared-orange text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
            <h3 className="font-mono text-xs sm:text-sm tracking-widest text-infrared-hot mb-4">
              SOCIAL
            </h3>
            <div className="flex gap-3 justify-center sm:justify-start">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 flex items-center justify-center border border-infrared-purple/50 hover:border-infrared-hot rounded-lg text-xs font-mono text-gray-400 hover:text-infrared-hot transition-all hover:shadow-glow"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-infrared-purple/20 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-500 text-xs font-mono">
            © {currentYear} INFRAROUGE. Tous droits réservés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-infrared-hot transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-infrared-hot transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-infrared-hot transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-infrared-hot to-transparent opacity-50" />
    </footer>
  );
};

export default Footer;
