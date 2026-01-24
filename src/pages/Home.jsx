import React from 'react';
import HeroSection from '../components/HeroSection';
import MosaicGrid from '../components/MosaicGrid';

const Home = () => {
  const featuredArtists = [
    {
      id: 1,
      name: 'NEON SPECTRE',
      category: 'Techno',
      genres: ['Techno', 'Industrial', 'Dark'],
      description: 'Architecte sonore de l\'obscurité électronique',
      image: null,
    },
    {
      id: 2,
      name: 'VOID ECHO',
      category: 'Ambient',
      genres: ['Ambient', 'Drone', 'Experimental'],
      description: 'Exploration des espaces sonores immersifs',
      image: null,
    },
    {
      id: 3,
      name: 'CRIMSON PULSE',
      category: 'Drum & Bass',
      genres: ['DnB', 'Neurofunk', 'Dark Step'],
      description: 'Rythmes cinétiques et basses profondes',
      image: null,
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'NOCTURNE SESSIONS',
      date: '15 FÉV 2026',
      category: 'Festival',
      description: 'Une nuit immersive au cœur de l\'underground',
      image: null,
    },
    {
      id: 2,
      title: 'THERMAL WAVES',
      date: '22 FÉV 2026',
      category: 'Showcase',
      description: 'Découverte de nouveaux talents émergents',
      image: null,
    },
    {
      id: 3,
      title: 'INFRARED EXPERIENCE',
      date: '08 MAR 2026',
      category: 'Événement',
      description: 'Une expérience audiovisuelle totale',
      image: null,
    },
  ];

  return (
    <div>
      <HeroSection />

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="mb-12 space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-infrared-purple" />
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gradient">
                ARTISTES EN VEDETTE
              </h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-infrared-purple" />
            </div>
            <p className="text-center text-gray-400 font-mono text-sm tracking-wide">
              Découvrez les acteurs de la scène underground contemporaine
            </p>
          </div>

          <MosaicGrid items={featuredArtists} type="artist" />

          <div className="text-center mt-12">
            <a
              href="/artists"
              className="inline-block group relative px-8 py-4 border border-infrared-purple rounded-lg overflow-hidden hover:border-infrared-hot transition-all duration-300"
            >
              <span className="relative z-10 font-mono text-sm tracking-widest text-gray-300 group-hover:text-infrared-hot transition-colors">
                VOIR TOUS LES ARTISTES
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-infrared-purple/5" />
        
        <div className="container mx-auto relative z-10">
          <div className="mb-12 space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-infrared-hot" />
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gradient">
                ÉVÉNEMENTS À VENIR
              </h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-infrared-hot" />
            </div>
            <p className="text-center text-gray-400 font-mono text-sm tracking-wide">
              Rejoignez-nous pour des expériences sonores inoubliables
            </p>
          </div>

          <MosaicGrid items={upcomingEvents} type="event" />

          <div className="text-center mt-12">
            <a
              href="/events"
              className="inline-block group relative px-8 py-4 bg-infrared-purple/30 border border-infrared-hot/50 rounded-lg overflow-hidden hover:border-infrared-hot transition-all duration-300"
            >
              <span className="relative z-10 font-mono text-sm tracking-widest text-infrared-hot group-hover:text-white transition-colors">
                CALENDRIER COMPLET
              </span>
              <div className="absolute inset-0 bg-thermal-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gradient">
              REJOIGNEZ LE MOUVEMENT
            </h2>
            <div className="absolute -inset-4 bg-thermal-radial opacity-20 blur-3xl animate-pulse-glow" />
          </div>

          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Plongez dans l'univers underground contemporain. Où l'obscurité rencontre l'innovation sonore.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="#"
              className="group relative px-8 py-4 bg-thermal-gradient rounded-lg overflow-hidden transition-all duration-300 hover:shadow-glow-strong"
            >
              <span className="relative z-10 font-mono text-sm tracking-widest text-white">
                S'ABONNER À LA NEWSLETTER
              </span>
            </a>

            <a
              href="#"
              className="group relative px-8 py-4 border border-infrared-purple rounded-lg overflow-hidden hover:border-infrared-orange transition-all duration-300"
            >
              <span className="relative z-10 font-mono text-sm tracking-widest text-gray-300 group-hover:text-infrared-orange transition-colors">
                SUIVRE SUR INSTAGRAM
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
