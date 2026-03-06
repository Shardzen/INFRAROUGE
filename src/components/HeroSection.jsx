import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] text-[20vw] font-display text-white/[0.02] leading-none select-none">
          INFRAROUGE
        </div>
        <div className="absolute bottom-[10%] right-[-5%] text-[20vw] font-display text-white/[0.02] leading-none select-none">
          COLLECTIVE
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          <div className="space-y-4">
            <h1 className="text-[12vw] sm:text-[15vw] font-display font-black tracking-tighter leading-[0.8] mb-4">
              <span className="block text-white">INFRA</span>
              <span className="block text-outline">ROUGE</span>
            </h1>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-gray-500 font-mono text-[10px] sm:text-xs tracking-[0.4em] uppercase">
              <span>Rennes, France</span>
              <span className="hidden sm:block w-12 h-[1px] bg-white/20"></span>
              <span>Underground Scene</span>
              <span className="hidden sm:block w-12 h-[1px] bg-white/20"></span>
              <span>Est. 2026</span>
            </div>
          </div>

          <p className="max-w-xl text-lg sm:text-xl text-gray-400 font-light leading-relaxed px-4">
            Exploration des limites sonores et visuelles de la scène contemporaine. Une plateforme dédiée à l'élégance du chaos.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-8">
            <Link to="/artists" className="btn-premium">
              Les Artistes
            </Link>
            <Link to="/events" className="btn-premium">
              L'Agenda
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute left-1/2 bottom-0 w-[1px] h-32 bg-gradient-to-t from-white/40 to-transparent transform -translate-x-1/2"></div>
    </section>
  );
};

export default HeroSection;
