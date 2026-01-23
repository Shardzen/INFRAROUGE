import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Background avec parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920&q=80)',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        {/* Overlay gradients multiples pour effet magazine */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/80"></div>
        <div className="absolute inset-0 bg-violet-900/20"></div>
      </div>

      {/* Grille animée en fond */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(0deg, transparent 24%, rgba(124, 58, 237, 0.4) 25%, rgba(124, 58, 237, 0.4) 26%, transparent 27%, transparent 74%, rgba(124, 58, 237, 0.4) 75%, rgba(124, 58, 237, 0.4) 76%, transparent 77%, transparent),
                 linear-gradient(90deg, transparent 24%, rgba(124, 58, 237, 0.4) 25%, rgba(124, 58, 237, 0.4) 26%, transparent 27%, transparent 74%, rgba(124, 58, 237, 0.4) 75%, rgba(124, 58, 237, 0.4) 76%, transparent 77%, transparent)
               `,
               backgroundSize: '80px 80px'
             }}>
        </div>
      </div>

      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-violet-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Contenu principal */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            {/* Badge "Nouvelle Édition" */}
            <div className="inline-flex items-center space-x-2 bg-violet-900/40 backdrop-blur-sm border border-violet-500/30 rounded-full px-4 py-2 mb-8 animate-fadeInUp">
              <TrendingUp className="w-4 h-4 text-violet-400" />
              <span className="text-sm text-violet-300 font-medium">Édition 2026 • Artistes Émergents</span>
            </div>

            {/* Titre principal avec effet magazine */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 animate-fadeInUp"
                style={{ animationDelay: '0.2s' }}>
              <span className="block bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent"
                    style={{
                      textShadow: '0 0 40px rgba(124, 58, 237, 0.3)'
                    }}>
                INFRAROUGE
              </span>
            </h1>

            {/* Ligne décorative */}
            <div className="w-32 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mb-8 animate-fadeInUp"
                 style={{ animationDelay: '0.4s' }}></div>

            {/* Sous-titre */}
            <p className="text-xl md:text-3xl lg:text-4xl text-gray-300 font-light mb-8 leading-relaxed animate-fadeInUp"
               style={{ animationDelay: '0.6s' }}>
              Magazine culturel dédié aux{' '}
              <span className="text-violet-400 font-medium">artistes émergents</span>
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed animate-fadeInUp"
               style={{ animationDelay: '0.8s' }}>
              Découvrez les talents de demain dans la musique, les arts plastiques, 
              le street art et la photographie. Une plateforme pour ceux qui créent 
              l'avenir de la culture.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fadeInUp" style={{ animationDelay: '1s' }}>
              <Link
                to="/musique"
                className="group flex items-center space-x-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg shadow-violet-900/50 hover:shadow-violet-900/70 hover:scale-105"
              >
                <span>Découvrir les Artistes</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/a-propos"
                className="group flex items-center space-x-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 border border-white/20 hover:border-violet-500/50"
              >
                <span>En Savoir Plus</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-16 animate-fadeInUp" style={{ animationDelay: '1.2s' }}>
              <Stat number="8+" label="Artistes" />
              <Stat number="4" label="Disciplines" />
              <Stat number="2026" label="Édition" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-violet-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

// Composant Stat
const Stat = ({ number, label }) => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-bold text-white mb-1">
      {number}
    </div>
    <div className="text-sm text-gray-400 uppercase tracking-wider">
      {label}
    </div>
  </div>
);

export default HeroSection;