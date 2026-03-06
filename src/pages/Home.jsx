import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { artists } from '../data/artists';
import { events } from '../data/events';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const featuredMusic = artists.music.slice(0, 3);
  const featuredVisual = artists.visualArts.slice(0, 3);
  const upcomingEvents = events.slice(0, 2);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ArtistCard = ({ artist, categoryKey, size = 'normal', index }) => {
    const cardRef = useRef(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
      let requestRef;
      const updateParallax = () => {
        if (cardRef.current) {
          const rect = cardRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          // Calcule la position relative de la carte par rapport au centre de l'écran
          const relativePos = (rect.top + rect.height / 2) / windowHeight - 0.5;
          setOffset(relativePos * 40); // 40px de décalage max
        }
        requestRef = requestAnimationFrame(updateParallax);
      };
      requestRef = requestAnimationFrame(updateParallax);
      return () => cancelAnimationFrame(requestRef);
    }, []);

    return (
      <Link
        ref={cardRef}
        to={`/artist/${categoryKey}/${artist.id}`}
        className={`editorial-card parallax-container group relative overflow-hidden ${size === 'large' ? 'aspect-[4/5] sm:col-span-2' : 'aspect-[4/5]'}`}
      >
        <div className="thermal-reveal absolute inset-0 z-10" />

        {artist.coverImage ? (
          <img 
            src={artist.coverImage} 
            alt={artist.name}
            className="parallax-img transition-transform duration-700 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
            style={{ transform: `translateY(${offset}px)` }}
          />
        ) : (
          <div className="w-full h-full bg-[#111]" />
        )}


      <div className="absolute inset-0 z-20 p-6 sm:p-10 flex flex-col justify-between">
        <div className="font-mono text-[10px] tracking-[0.4em] text-white/50 uppercase">
          {artist.category}
        </div>
        
        <div className="space-y-4">
          <h3 className="text-3xl sm:text-5xl font-display font-black tracking-tighter text-white leading-none">
            {artist.name}
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 font-light max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {artist.description}
          </p>
          <div className="flex items-center gap-4 text-[10px] font-mono tracking-widest uppercase text-infrared-hot opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <span>Explorer</span>
            <div className="h-[1px] w-8 bg-current"></div>
          </div>
        </div>
      </div>

      {/* Technical corner label */}
      <div className="absolute top-6 right-6 z-20 font-mono text-[8px] text-white/20 tracking-widest uppercase">
        REF_{artist.id.slice(0, 6)}
      </div>
    </Link>
  );

  return (
    <div className="relative">
      <HeroSection />

      {/* Marquee Section (Text Défilant) */}
      <div className="py-20 overflow-hidden bg-white/[0.02] border-y border-white/5">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="text-[10vw] font-display font-black text-white/5 uppercase mx-10">
              Underground Scene • Contemporain • Expérimental • Infrarouge • 
            </div>
          ))}
        </div>
      </div>

      {/* Featured Artists Section */}
      <section className="py-20 sm:py-40 px-4 sm:px-10">
        <div className="container mx-auto">
          <div className="mb-20 sm:mb-32 space-y-4">
            <h2 className="text-6xl sm:text-9xl font-display font-black tracking-tighter text-white uppercase leading-[0.8]">
              Artistes<br /><span className="text-outline">Focus</span>
            </h2>
            <p className="max-w-md text-gray-500 font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase ml-2 sm:ml-4">
              Sélection de créateurs qui redéfinissent l'esthétique contemporaine.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
            <ArtistCard artist={featuredMusic[0]} categoryKey="music" size="large" />
            <div className="space-y-6 sm:space-y-10 sm:pt-20">
              <ArtistCard artist={featuredMusic[1]} categoryKey="music" />
              <ArtistCard artist={featuredMusic[2]} categoryKey="music" />
            </div>
            <div className="space-y-6 sm:space-y-10 lg:pt-40">
              <ArtistCard artist={featuredVisual[0]} categoryKey="visualArts" />
              <ArtistCard artist={featuredVisual[1]} categoryKey="visualArts" />
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Split Section */}
      <section className="py-20 sm:py-40 border-t border-white/5 relative">
        <div className="container mx-auto px-4 sm:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 space-y-12 order-2 lg:order-1">
              <div className="space-y-6">
                <h2 className="text-5xl sm:text-8xl font-display font-black tracking-tighter text-white uppercase">
                  L'Agenda<br /><span className="text-infrared-hot">Nocturne</span>
                </h2>
                <p className="text-gray-400 text-lg font-light leading-relaxed max-w-lg">
                  Les expériences INFRAROUGE sont des moments uniques, entre performance visuelle et immersion sonore.
                </p>
              </div>

              <div className="space-y-8">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="group border-b border-white/10 pb-8 flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="font-mono text-[10px] text-infrared-orange uppercase tracking-widest">
                        {new Date(event.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })} / {event.location}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-infrared-hot transition-colors duration-300">
                        {event.title}
                      </h3>
                    </div>
                    <a href={event.ticketUrl} target="_blank" rel="noopener noreferrer" className="btn-premium py-2 px-6 text-[8px]">
                      Réserver
                    </a>
                  </div>
                ))}
              </div>

              <Link to="/events" className="inline-block pt-8 font-mono text-[10px] tracking-widest uppercase border-b border-white/30 hover:border-white transition-all duration-300">
                Découvrir tous les événements →
              </Link>
            </div>

            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=1200&q=80" 
                  alt="Crowd" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-10 left-10">
                  <span className="text-[10vw] font-display font-black text-white/20">LIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section - Photography (Fullscreen vibe) */}
      <section className="py-20 sm:py-40 bg-white text-black">
        <div className="container mx-auto px-4 sm:px-10">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-20">
            <h2 className="text-6xl sm:text-[12vw] font-display font-black tracking-tighter uppercase leading-[0.7]">
              PHOTO<br />GRAPHIE
            </h2>
            <Link to="/artists" className="mb-4 font-mono text-xs tracking-widest uppercase border-b border-black/30 hover:border-black transition-all">
              Portfolio complet
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-[600px] sm:h-[800px]">
            <div className="h-full overflow-hidden group">
              <img src={artists.photography[0].coverImage} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div className="h-full overflow-hidden group pt-20">
              <img src={artists.photography[1].coverImage} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div className="h-full hidden lg:block overflow-hidden group pt-40">
              <img src={artists.photography[0].heroImage} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* Submission Panel */}
      <section className="py-20 sm:py-40 px-4 sm:px-10">
        <div className="container mx-auto">
          <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#111] to-black p-10 sm:p-20 border border-white/5">
            <div className="absolute top-0 right-0 p-10 font-mono text-[8px] text-white/20 text-right">
              RECRUITMENT_PHASE_01<br />
              SYS: INFRAROUGE_V1.0
            </div>
            <div className="max-w-2xl space-y-10">
              <h2 className="text-5xl sm:text-8xl font-display font-black tracking-tighter text-white uppercase leading-none">
                On cherche des<br /><span className="text-gradient">Visionnaires</span>
              </h2>
              <p className="text-gray-400 text-lg sm:text-xl font-light">
                INFRAROUGE n'est pas qu'un site. C'est un mouvement. Tu es artiste, vidéaste ou musicien ? Envoie-nous ton univers.
              </p>
              <button className="btn-premium">
                Rejoindre le collectif
              </button>
            </div>
            <div className="absolute bottom-[-10%] right-[-5%] text-[30vw] font-display font-black text-white/[0.03] select-none">
              JOIN
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-20 border-t border-white/5 text-center space-y-8">
        <div className="flex justify-center gap-10 font-mono text-[10px] tracking-widest text-gray-500 uppercase">
          <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
          <Link to="/artists" className="hover:text-white transition-colors">Artistes</Link>
          <Link to="/events" className="hover:text-white transition-colors">Agenda</Link>
          <Link to="/about" className="hover:text-white transition-colors">À Propos</Link>
        </div>
        <div className="text-[8px] font-mono text-gray-700 tracking-[0.5em] uppercase">
          INFRAROUGE COLLECTIVE © 2026 / ALL RIGHTS RESERVED
        </div>
      </footer>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
