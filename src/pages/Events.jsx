import React, { useState, useEffect } from 'react';
import { events } from '../data/events';

const Events = () => {
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Événements | INFRAROUGE';
    return () => {
      document.title = 'INFRAROUGE';
    };
  }, []);

  const locations = ['all', ...new Set(events.map(e => e.location.split(',')[1]?.trim() || 'Rennes'))];

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(e => e.location.includes(filter));

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <div className="pt-24 sm:pt-32 pb-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 sm:mb-20 text-center space-y-4 sm:space-y-6">
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter font-display text-gradient px-4">
              AGENDA LIVE
            </h1>
            <div className="absolute -inset-8 bg-thermal-radial opacity-20 blur-3xl animate-pulse-glow" />
          </div>

          <div className="h-1 w-24 sm:w-32 bg-thermal-gradient mx-auto rounded-full" />

          <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto font-mono px-4">
            Ne manquez aucune performance de la scène underground rennaise et au-delà
          </p>
        </div>

        {/* Filtres par ville */}
        <div className="flex justify-center gap-3 mb-12 sm:mb-16">
          {locations.map((loc) => (
            <button
              key={loc}
              onClick={() => setFilter(loc)}
              className={`px-6 py-2 rounded-full font-mono text-xs tracking-widest uppercase transition-all duration-300 ${
                filter === loc
                  ? 'bg-thermal-gradient text-white shadow-glow'
                  : 'bg-infrared-deep/50 border border-infrared-purple/30 text-gray-400 hover:border-infrared-hot/50 hover:text-infrared-hot'
              }`}
            >
              {loc === 'all' ? 'TOUTES LES VILLES' : loc}
            </button>
          ))}
        </div>

        {/* Liste des événements */}
        <div className="space-y-8 sm:space-y-12">
          {filteredEvents.map((event, index) => (
            <div 
              key={event.id}
              className="group relative flex flex-col lg:flex-row gap-6 lg:gap-10 p-4 sm:p-6 border border-infrared-purple/30 rounded-2xl bg-infrared-deep/30 hover:border-infrared-hot/50 transition-all duration-500 overflow-hidden"
              style={{
                opacity: 0,
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
              }}
            >
              {/* Image d'illustration */}
              <div className="w-full lg:w-1/3 aspect-video lg:aspect-square rounded-xl overflow-hidden relative">
                <img 
                  src={event.coverImage} 
                  alt={event.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-infrared-darker via-transparent to-transparent" />
                
                {/* Badge Status */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-infrared-darker/80 backdrop-blur-md border border-infrared-hot/30 rounded text-[10px] font-mono text-infrared-hot tracking-widest uppercase">
                    {event.status}
                  </span>
                </div>
              </div>

              {/* Détails de l'événement */}
              <div className="flex-1 flex flex-col justify-between py-2">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-mono text-infrared-orange">
                    <div className="flex items-center gap-2">
                      <span>🗓</span>
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center gap-2">
                      <span>🕒</span>
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <span>📍</span>
                      {event.location}
                    </div>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-white font-display">
                    {event.title}
                  </h2>

                  <div className="font-mono text-infrared-magenta uppercase tracking-widest text-sm">
                    {event.artist} — <span className="text-gray-500">{event.category}</span>
                  </div>

                  <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl">
                    {event.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-6 border-t border-infrared-purple/20 pt-6">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-500 font-mono text-xs uppercase tracking-widest">Prix :</span>
                    <span className="text-2xl font-bold text-white">{event.price}</span>
                  </div>

                  <a
                    href={event.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center px-8 py-4 bg-thermal-gradient rounded-xl text-white font-mono text-sm tracking-widest hover:shadow-glow-strong transition-all duration-300 transform active:scale-95 group"
                  >
                    RÉSERVER SUR TICKETMASTER
                    <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>

              {/* Effet d'arrière-plan interactif */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-thermal-radial opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-20 space-y-4">
            <div className="text-4xl sm:text-6xl text-infrared-purple/30">◇</div>
            <p className="text-gray-500 font-mono text-xs sm:text-sm px-4">
              Aucun événement trouvé pour cette ville
            </p>
            <button
              onClick={() => setFilter('all')}
              className="text-infrared-hot hover:text-infrared-orange transition-colors text-xs sm:text-sm"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
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
      `}</style>
    </div>
  );
};

export default Events;
