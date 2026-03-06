import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { events as fallbackEvents } from '../data/events';

const Events = () => {
  const [filter, setFilter] = useState('all');
  const [events, setEvents] = useState(fallbackEvents);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Événements | INFRAROUGE';
    
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "events"));
        if (!querySnapshot.empty) {
          const eventsList = [];
          querySnapshot.forEach((doc) => {
            eventsList.push({ ...doc.data(), id: doc.id });
          });
          setEvents(eventsList);
        }
      } catch (e) {
        console.error("Error fetching events:", e);
      }
      setLoading(false);
    };
    fetchEvents();

    return () => {
      document.title = 'INFRAROUGE';
    };
  }, []);

  const locations = ['all', ...new Set(events.map(e => e.location.split(',')[1]?.trim() || 'Rennes'))];

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(e => e.location.includes(filter));

  return (
    <div className="pt-32 pb-20 bg-[#050505] min-h-screen relative overflow-hidden">
      {/* Background Decorative */}
      <div className="light-leak leak-1 opacity-10" />
      
      <div className="container mx-auto px-4 sm:px-10 relative z-10">
        <div className="mb-20 sm:mb-32 space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="space-y-4">
              <span className="text-infrared-hot font-mono text-xs tracking-[0.5em] uppercase">Timeline_Live</span>
              <h1 className="text-7xl sm:text-[12vw] font-display font-black tracking-tighter text-white uppercase leading-[0.8]">
                Agenda<br /><span className="text-outline">Nocturne</span>
              </h1>
            </div>
            
            <div className="flex gap-4">
              {locations.map((loc) => (
                <button
                  key={loc}
                  onClick={() => setFilter(loc)}
                  className={`px-6 py-2 rounded-full font-mono text-[10px] tracking-widest uppercase transition-all duration-500 ${
                    filter === loc ? 'bg-white text-black shadow-glow' : 'text-gray-500 border border-white/5 hover:text-white'
                  }`}
                >
                  {loc === 'all' ? 'Toutes les villes' : loc}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Events */}
        <div className="space-y-24">
          {filteredEvents.map((event, index) => (
            <div key={event.id} className="group relative flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
              {/* Date Column */}
              <div className="lg:w-1/4 space-y-2">
                <div className="text-gray-800 font-display font-black text-6xl sm:text-8xl group-hover:text-white/10 transition-colors">
                  {new Date(event.date).getDate()}
                </div>
                <div className="font-mono text-xs tracking-[0.4em] text-infrared-hot uppercase">
                  {new Date(event.date).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
                </div>
              </div>

              {/* Visual Column */}
              <div className="lg:w-1/3 aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 relative">
                <img 
                  src={event.coverImage} 
                  alt={event.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute top-6 left-6 px-4 py-1 bg-black/50 backdrop-blur-md rounded-full font-mono text-[8px] text-white tracking-widest">
                  {event.status}
                </div>
              </div>

              {/* Info Column */}
              <div className="flex-1 space-y-8 py-4">
                <div className="space-y-4">
                  <div className="font-mono text-[10px] text-gray-500 tracking-widest uppercase flex items-center gap-4">
                    <span>{event.location}</span>
                    <span className="w-1 h-1 rounded-full bg-infrared-hot" />
                    <span>{event.time}</span>
                  </div>
                  <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tighter text-white uppercase leading-none">
                    {event.title}
                  </h2>
                  <div className="text-infrared-orange font-mono text-xs tracking-[0.3em] uppercase">
                    {event.artist}
                  </div>
                </div>

                <p className="text-gray-400 text-lg font-light leading-relaxed max-w-xl">
                  {event.description}
                </p>

                <div className="flex items-center gap-10">
                  <div className="space-y-1">
                    <div className="text-gray-600 font-mono text-[8px] uppercase tracking-widest">Accès</div>
                    <div className="text-2xl font-display font-bold text-white">{event.price}</div>
                  </div>
                  <a 
                    href={event.ticketUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-premium px-10"
                  >
                    BILLETERIE
                  </a>
                </div>
              </div>

              {/* Giant background index */}
              <div className="absolute -right-20 top-0 text-[30vw] font-display font-black text-white/[0.01] pointer-events-none select-none">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
