import React, { useState } from 'react';

const Events = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const events = [
    {
      id: 1,
      title: 'Adés The Planet',
      date: 'Jeudi 29 janv. ',
      time: 'de 20:30 à 21:45',
      venue: '360 Rennes',
      city: '6 Cours des Alliés, 35000 Rennes, France',
      category: 'Concert',
      description: 'Une nuit immersive au cœur de l\'underground parisien. Trois scènes, douze artistes, une expérience sonore inoubliable.',
      lineup: ['NEON SPECTRE', 'CRIMSON PULSE', 'THERMAL DECAY'],
      price: '25€',
      status: 'On Sale',
    },
    {
      id: 2,
      title: 'Selector #3 Digé M0m0 X Xy01',
      date: 'Jeudi 29 janv.',
      time: 'de 21:00 à 00:30',
      venue: 'Uzine',
      city: '13 Quai Lamennais, 35000 Rennes, France',
      category: 'Showcase',
      description: 'SELECTOR est une soirée pensée comme une carte blanche de sélection curatée par Digé m0m0.',
      lineup: ['XY01 ', 'Digé M0m0'],
      price: 'Gratuit',
      status: 'On Sale',
    },
    {
      id: 3,
      title: 'Hld',
      date: 'Vendredi 30 janv.',
      time: 'de 20:00 à 23:00',
      venue: '360 Rennes',
      city: '6 Cours des Alliés, 35000 Rennes, France',
      category: 'Événement',
      description: 'Propulsé par sa série « SEKLENLAND » et soutenu par Booska-P, le phénomène de Clamart HLD débarque au 360 de Rennes avec son univers street avant la sortie de son nouvel album.',
      lineup: ['HLD'],
      price: '24,00 €',
      status: 'Sold Out',
    },
    {
      id: 4,
      title: 'Rilès - Survival Tour',
      date: 'Jeudi 5 févr. ',
      time: 'de 20:00 à 23:00',
      venue: 'Le Liberté',
      city: '1 Esplanade Charles de Gaulle, 35000 Rennes, France',
      category: 'Concert',
      description: 'RILÈS + STEVE IBRAHIM',
      lineup: ['Rilès'],
      price: 'Debout 44,00 €',
      status: 'On Sale',
    },
  ];

  const categories = ['all', ...new Set(events.map((event) => event.category))];

  const filteredEvents =
    selectedFilter === 'all'
      ? events
      : events.filter((event) => event.category === selectedFilter);

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="mb-16 text-center space-y-6">
          <div className="relative inline-block">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-gradient">
              ÉVÉNEMENTS
            </h1>
            <div className="absolute -inset-8 bg-thermal-radial opacity-20 blur-3xl animate-pulse-glow" />
          </div>

          <div className="h-1 w-32 bg-thermal-gradient mx-auto rounded-full" />

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Rejoignez-nous pour des expériences sonores underground inoubliables
          </p>
        </div>

        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-5 py-2 rounded-lg font-mono text-xs tracking-widest uppercase transition-all duration-300 ${
                selectedFilter === category
                  ? 'bg-thermal-gradient text-white shadow-glow'
                  : 'bg-infrared-deep/50 border border-infrared-purple/30 text-gray-400 hover:border-infrared-hot/50 hover:text-infrared-hot'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              className="group relative border border-infrared-purple/30 rounded-lg overflow-hidden hover:border-infrared-hot/50 transition-all duration-500"
              style={{
                opacity: 0,
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
              }}
            >
              <div className="absolute inset-0 bg-thermal-radial opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-500" />

              <div className="relative z-10 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  <div className="md:col-span-3 space-y-2">
                    <div className="font-mono text-3xl font-bold text-gradient">
                      {event.date.split(' ')[0]}
                    </div>
                    <div className="font-mono text-sm text-gray-400 uppercase">
                      {event.date.split(' ').slice(1).join(' ')}
                    </div>
                    <div className="font-mono text-xs text-infrared-hot">{event.time}</div>
                    <div className="pt-2">
                      <span
                        className={`inline-block px-3 py-1 rounded text-xs font-mono ${
                          event.status === 'On Sale'
                            ? 'bg-infrared-hot/20 text-infrared-hot border border-infrared-hot/30'
                            : 'bg-infrared-purple/20 text-infrared-purple border border-infrared-purple/30'
                        }`}
                      >
                        {event.status === 'On Sale' ? 'EN VENTE' : 'BIENTÔT'}
                      </span>
                    </div>
                  </div>

                  <div className="md:col-span-6 space-y-4">
                    <div>
                      <div className="font-mono text-xs tracking-widest text-infrared-orange mb-2 uppercase">
                        {event.category}
                      </div>
                      <h2 className="text-3xl font-bold tracking-tighter mb-3 text-white group-hover:text-gradient transition-colors">
                        {event.title}
                      </h2>
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>
                          {event.venue}, {event.city}
                        </span>
                      </div>
                      <p className="text-gray-400 leading-relaxed">{event.description}</p>
                    </div>

                    <div>
                      <div className="font-mono text-xs tracking-widest text-infrared-hot mb-2 uppercase">
                        Line-up
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {event.lineup.map((artist, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm border border-infrared-purple/50 rounded bg-infrared-darker/50 text-gray-300"
                          >
                            {artist}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gradient mb-1">{event.price}</div>
                      <div className="text-xs text-gray-500 font-mono">Prévente</div>
                    </div>

                    <button
                      className={`w-full md:w-auto px-6 py-3 rounded-lg font-mono text-sm tracking-widest transition-all duration-300 ${
                        event.status === 'On Sale'
                          ? 'bg-thermal-gradient text-white hover:shadow-glow-strong'
                          : 'bg-infrared-purple/30 text-gray-500 border border-infrared-purple/30 cursor-not-allowed'
                      }`}
                      disabled={event.status !== 'On Sale'}
                    >
                      {event.status === 'On Sale' ? 'RÉSERVER' : 'BIENTÔT'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-thermal-gradient transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center space-y-6">
          <div className="relative inline-block">
            <h2 className="text-4xl font-bold tracking-tighter text-gradient">
              NE MANQUEZ RIEN
            </h2>
            <div className="absolute -inset-4 bg-thermal-radial opacity-20 blur-3xl animate-pulse-glow" />
          </div>
          <p className="text-gray-400">
            Inscrivez-vous à notre newsletter pour être informé des prochains événements
          </p>
          <button className="px-8 py-4 bg-thermal-gradient rounded-lg text-white font-mono text-sm tracking-widest hover:shadow-glow-strong transition-all duration-300">
            S'INSCRIRE
          </button>
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
      `}</style>
    </div>
  );
};

export default Events;
