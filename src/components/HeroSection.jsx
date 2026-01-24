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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-thermal-radial opacity-30 blur-3xl"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.5s ease-out',
        }}
      />

      <div className="absolute top-20 left-10 w-64 h-64 bg-infrared-magenta rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-infrared-hot rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-2">
            <div className="font-mono text-sm tracking-widest text-infrared-orange mb-4 opacity-80">
              UNDERGROUND • CONTEMPORAIN • EXPÉRIMENTAL
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none">
              <span className="text-gradient glow-text">INFRAROUGE</span>
            </h1>
            
            <div className="h-1 w-32 bg-thermal-gradient mx-auto rounded-full" />
          </div>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Une expérience sonore et visuelle. Là où l'underground rencontre l'élégance nocturne.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link
              to="/artists"
              className="group relative px-8 py-4 bg-infrared-purple/30 border border-infrared-hot/50 rounded-lg overflow-hidden hover:border-infrared-hot transition-all duration-300"
            >
              <span className="relative z-10 font-mono text-sm tracking-widest text-infrared-hot group-hover:text-white transition-colors">
                DÉCOUVRIR LES ARTISTES
              </span>
              <div className="absolute inset-0 bg-thermal-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              to="/events"
              className="group relative px-8 py-4 border border-infrared-purple rounded-lg overflow-hidden hover:border-infrared-orange transition-all duration-300"
            >
              <span className="relative z-10 font-mono text-sm tracking-widest text-gray-300 group-hover:text-infrared-orange transition-colors">
                PROCHAINS ÉVÉNEMENTS
              </span>
            </Link>
          </div>

          <div className="pt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-infrared-hot/50 rounded-full mx-auto relative">
              <div className="w-1.5 h-3 bg-infrared-hot rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-infrared-darker to-transparent" />
    </section>
  );
};

export default HeroSection;
