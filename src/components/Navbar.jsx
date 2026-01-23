import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Users, Palette, Camera, Image, Info, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu lors du changement de page
  useEffect(() => {
    setIsOpen(false);
    setShowCategoriesDropdown(false);
  }, [location]);

  const categories = [
    { name: 'Musique', path: '/musique', icon: <Users className="w-4 h-4" /> },
    { name: 'Arts Plastiques', path: '/arts-plastiques', icon: <Palette className="w-4 h-4" /> },
    { name: 'Street Art', path: '/street-art', icon: <Image className="w-4 h-4" /> },
    { name: 'Photographie', path: '/photographie', icon: <Camera className="w-4 h-4" /> },
  ];

  const isActivePath = (path) => location.pathname === path;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-violet-900/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="relative">
                <h1 className="text-2xl md:text-3xl font-bold tracking-wider bg-gradient-to-r from-violet-500 via-purple-500 to-violet-500 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105"
                    style={{
                      textShadow: '0 0 30px rgba(124, 58, 237, 0.5)'
                    }}>
                  INFRAROUGE
                </h1>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              </div>
              <span className="ml-3 text-xs text-gray-400 hidden md:block">Magazine Culturel</span>
            </Link>

            {/* Menu Desktop */}
            <div className="hidden lg:flex items-center space-x-1">
              <NavLink to="/" active={isActivePath('/')} icon={<Home className="w-4 h-4" />}>
                Accueil
              </NavLink>

              {/* Dropdown Catégories */}
              <div className="relative group">
                <button
                  onMouseEnter={() => setShowCategoriesDropdown(true)}
                  onMouseLeave={() => setShowCategoriesDropdown(false)}
                  className="flex items-center space-x-1 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-violet-900/30 transition-all duration-200"
                >
                  <Palette className="w-4 h-4" />
                  <span>Catégories</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showCategoriesDropdown ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                <div
                  onMouseEnter={() => setShowCategoriesDropdown(true)}
                  onMouseLeave={() => setShowCategoriesDropdown(false)}
                  className={`absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-md border border-violet-900/30 rounded-lg shadow-xl shadow-violet-900/20 overflow-hidden transition-all duration-300 ${
                    showCategoriesDropdown 
                      ? 'opacity-100 translate-y-0 pointer-events-auto' 
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                >
                  {categories.map((category, index) => (
                    <Link
                      key={category.path}
                      to={category.path}
                      className={`flex items-center space-x-3 px-4 py-3 hover:bg-violet-900/30 transition-all duration-200 border-b border-violet-900/20 last:border-b-0 ${
                        isActivePath(category.path) ? 'bg-violet-900/20 text-violet-400' : 'text-gray-300 hover:text-white'
                      }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {category.icon}
                      <span className="flex-1">{category.name}</span>
                      {isActivePath(category.path) && (
                        <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              <NavLink to="/a-propos" active={isActivePath('/a-propos')} icon={<Info className="w-4 h-4" />}>
                À Propos
              </NavLink>
            </div>

            {/* Bouton Menu Mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-violet-900/30 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Barre de progression décorative */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        )}
      </nav>

      {/* Menu Mobile Overlay */}
      <div className={`fixed inset-0 z-30 lg:hidden transition-all duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/90 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Menu Content */}
        <div className={`absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-violet-900/30 transition-all duration-300 ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
            <MobileNavLink to="/" active={isActivePath('/')} icon={<Home className="w-5 h-5" />}>
              Accueil
            </MobileNavLink>

            {/* Catégories en mobile */}
            <div className="pt-2 pb-2">
              <p className="text-xs text-gray-500 uppercase tracking-wider px-4 mb-2">Catégories</p>
              {categories.map((category) => (
                <MobileNavLink
                  key={category.path}
                  to={category.path}
                  active={isActivePath(category.path)}
                  icon={category.icon}
                >
                  {category.name}
                </MobileNavLink>
              ))}
            </div>

            <MobileNavLink to="/a-propos" active={isActivePath('/a-propos')} icon={<Info className="w-5 h-5" />}>
              À Propos
            </MobileNavLink>
          </div>
        </div>
      </div>
    </>
  );
};

// Composant NavLink pour Desktop
const NavLink = ({ to, active, icon, children }) => (
  <Link
    to={to}
    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
      active 
        ? 'bg-violet-900/30 text-white' 
        : 'text-gray-300 hover:text-white hover:bg-violet-900/20'
    }`}
  >
    {icon}
    <span>{children}</span>
    {active && <div className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse"></div>}
  </Link>
);

// Composant NavLink pour Mobile
const MobileNavLink = ({ to, active, icon, children }) => (
  <Link
    to={to}
    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
      active 
        ? 'bg-violet-900/30 text-white border-l-4 border-violet-500' 
        : 'text-gray-300 hover:text-white hover:bg-violet-900/20 border-l-4 border-transparent'
    }`}
  >
    {icon}
    <span className="flex-1">{children}</span>
    {active && <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></div>}
  </Link>
);

export default Navbar;