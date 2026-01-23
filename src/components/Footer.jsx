import { Link } from 'react-router-dom';
import { Instagram, Youtube, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { name: 'Accueil', path: '/' },
        { name: 'Musique', path: '/musique' },
        { name: 'Arts Plastiques', path: '/arts-plastiques' },
        { name: 'Street Art', path: '/street-art' },
      ]
    },
    {
      title: 'À Propos',
      links: [
        { name: 'Notre Mission', path: '/a-propos' },
        { name: 'Contact', path: '/a-propos#contact' },
      ]
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'Youtube' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:contact@infrarouge.art', label: 'Email' },
  ];

  return (
    <footer className="bg-dark-card border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block group">
              <h3 className="text-3xl font-display font-bold gradient-text mb-4 group-hover:text-shadow-glow transition-all duration-300">
                INFRAROUGE
              </h3>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Magazine web dédié aux artistes émergents. Musique, arts plastiques, street art et photographie. 
              Découvrez les talents de demain.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-dark-bg border border-dark-border flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-300 group"
                >
                  <social.icon size={18} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-display font-semibold text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300 inline-block hover:translate-x-1 transform"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} INFRAROUGE. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-primary-400 transition-colors duration-300">
              Mentions légales
            </a>
            <a href="#" className="text-gray-500 hover:text-primary-400 transition-colors duration-300">
              Confidentialité
            </a>
          </div>
        </div>
      </div>

      {/* Gradient effect at bottom */}
      <div className="h-1 bg-gradient-premium"></div>
    </footer>
  );
};

export default Footer;
