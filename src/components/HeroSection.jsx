import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <div
        className="absolute inset-0 bg-thermal-radial opacity-30 blur-3xl"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.5s ease-out',
        }}
      />

      <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 bg-infrared-magenta rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-infrared-hot rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="space-y-2">
            <div className="font-mono text-xs sm:text-sm tracking-widest text-infrared-orange mb-4 opacity-80 px-2">
              UNDERGROUND • CONTEMPORAIN • EXPÉRIMENTAL
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none px-2">
              <span className="text-gradient glow-text">INFRAROUGE</span>
            </h1>
            
            <div className="h-1 w-24 sm:w-32 bg-thermal-gradient mx-auto rounded-full" />
          </div>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
            Une expérience sonore et visuelle. Là où l'underground rencontre l'élégance nocturne.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 sm:pt-8 px-4">
            <Link
              to="/artists"
              className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 bg-infrared-purple/30 border border-infrared-hot/50 rounded-lg overflow-hidden hover:border-infrared-hot transition-all duration-300"
            >
              <span className="relative z-10 font-mono text-xs sm:text-sm tracking-widest text-infrared-hot group-hover:text-white transition-colors">
                DÉCOUVRIR LES ARTISTES
              </span>
              <div className="absolute inset-0 bg-thermal-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              to="/events"
              className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 border border-infrared-purple rounded-lg overflow-hidden hover:border-infrared-orange transition-all duration-300"
            >
              <span className="relative z-10 font-mono text-xs sm:text-sm tracking-widest text-gray-300 group-hover:text-infrared-orange transition-colors">
                PROCHAINS ÉVÉNEMENTS
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-infrared-darker to-transparent" />
    </section>
  );
};

export default HeroSection;
