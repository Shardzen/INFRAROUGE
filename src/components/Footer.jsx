import { Link } from 'react-router-dom';
import { Instagram, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const categories = [
    { name: 'Musique', path: '/musique' },
    { name: 'Arts Plastiques', path: '/arts-plastiques' },
    { name: 'Street Art', path: '/street-art' },
    { name: 'Photographie', path: '/photographie' },
  ];

  const quickLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À Propos', path: '/a-propos' },
  ];

  return (
    <footer className="relative bg-black border-t border-violet-900/20">
      {/* Effet lumineux en haut */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* À propos */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
              INFRAROUGE
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Magazine culturel dédié à la mise en lumière des artistes émergents. 
              Une plateforme pour découvrir les talents de demain.
            </p>
            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-violet-900/30 hover:bg-violet-900/50 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:contact@infrarouge-mag.com"
                className="w-10 h-10 rounded-full bg-violet-900/30 hover:bg-violet-900/50 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Catégories */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Catégories</h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.path}>
                  <Link
                    to={category.path}
                    className="text-gray-400 hover:text-violet-400 transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span className="w-0 h-px bg-violet-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Liens rapides */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-violet-400 transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span className="w-0 h-px bg-violet-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Newsletter</h4>
            <p className="text-gray-400 text-sm">
              Restez informé des nouveaux artistes et événements.
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-2 bg-white/5 border border-violet-900/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors duration-200"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-violet-900/50"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>

        {/* Séparateur */}
        <div className="h-px bg-gradient-to-r from-transparent via-violet-900/30 to-transparent mb-8"></div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>© {currentYear} INFRAROUGE. Tous droits réservés.</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline flex items-center">
              Fait avec <Heart className="w-4 h-4 mx-1 text-violet-500 animate-pulse" /> pour l'art
            </span>
          </div>

          {/* Links légaux */}
          <div className="flex items-center space-x-4 text-gray-400 text-sm">
            <a href="#" className="hover:text-violet-400 transition-colors duration-200">
              Mentions légales
            </a>
            <span>•</span>
            <a href="#" className="hover:text-violet-400 transition-colors duration-200">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>

      {/* Effet lumineux en bas */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;