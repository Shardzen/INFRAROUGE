import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 bg-black">
      {/* Background technical labels */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none opacity-10">
        <div className="absolute top-[15%] left-[5%] font-mono text-[10px] tracking-[1em] text-white rotate-90 origin-left">
          EST_2026_RENNES_FR
        </div>
        <div className="absolute bottom-[15%] right-[5%] font-mono text-[10px] tracking-[1em] text-white -rotate-90 origin-right">
          UNDERGROUND_COLLECTIVE
        </div>
      </div>

      {/* Color accent blobs */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-infrared-red/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-infrared-blue/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-16">
          <div className="space-y-6">
            <div className="reveal-text">
              <h1 className="text-[15vw] sm:text-[12vw] font-display font-black tracking-tighter leading-[0.8] flex flex-col items-center">
                <span className="text-white">INFRA</span>
                <span className="text-outline hover:text-white transition-all duration-700">ROUGE</span>
              </h1>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 font-mono text-[10px] tracking-[0.4em] uppercase">
              <span className="text-infrared-red opacity-90">Sonore</span>
              <span className="w-1 h-1 rounded-full bg-white/20"></span>
              <span className="text-white opacity-80">Visuel</span>
              <span className="w-1 h-1 rounded-full bg-white/20"></span>
              <span className="text-infrared-yellow opacity-90">Digital</span>
            </div>
          </div>

          <p className="max-w-xl text-lg sm:text-2xl text-gray-400 font-light leading-relaxed px-4 reveal-text animate-delay-200">
            Exploration des limites de la scène contemporaine. <br />
            <span className="text-white/60">L'élégance au service du chaos.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-10 reveal-text animate-delay-500">
            <Link to="/artists" className="btn-premium px-12 py-5">
              Explorer
            </Link>
            <Link to="/events" className="btn-premium px-12 py-5">
              L'Agenda
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute left-1/2 bottom-0 w-[1px] h-40 bg-gradient-to-t from-infrared-red/40 via-white/10 to-transparent transform -translate-x-1/2"></div>
    </section>
  );
};

export default HeroSection;
