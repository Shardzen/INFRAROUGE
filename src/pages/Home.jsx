import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { artists } from '../data/artists';
import { events } from '../data/events';

const Home = () => {
  const featuredMusic = artists.music.slice(0, 3);
  const featuredVisual = artists.visualArts.slice(0, 3);
  const featuredPhoto = artists.photography.slice(0, 3);
  const featuredVideo = artists.videography.slice(0, 3);
  const upcomingEvents = events.slice(0, 2);

  const SectionHeader = ({ title, subtitle, icon, colorClass }) => (
    <div className="mb-12 sm:mb-20 space-y-4">
      <div className="flex items-center gap-6">
        <h2 className={`text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter font-display uppercase ${colorClass}`}>
          {title}
        </h2>
        <div className={`h-[2px] flex-1 bg-gradient-to-r from-current to-transparent opacity-20 ${colorClass}`} />
        <span className={`text-3xl sm:text-4xl hidden sm:block ${colorClass}`}>{icon}</span>
      </div>
      <p className="text-gray-500 font-mono text-xs sm:text-sm tracking-[0.3em] uppercase">
        {subtitle}
      </p>
    </div>
  );

  const ArtistCard = ({ artist, categoryKey }) => {
    return (
      <Link
        to={`/artist/${categoryKey}/${artist.id}`}
        className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-infrared-deep transition-all duration-700"
      >
        {/* Deep background shadow for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 z-10" />
        
        {artist.coverImage ? (
          <img 
            src={artist.coverImage} 
            alt={artist.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
          />
        ) : (
          <div className="w-full h-full bg-infrared-gradient opacity-20" />
        )}

        <div className="absolute inset-0 z-20 p-6 sm:p-8 flex flex-col justify-end">
          <div className="space-y-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-[10px] font-mono border border-white/20 rounded-full text-white/70 backdrop-blur-md">
                {artist.category}
              </span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-bold text-white font-display leading-tight">
              {artist.name}
            </h3>
            
            <p className="text-sm text-gray-400 line-clamp-2 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              {artist.description}
            </p>

            <div className="pt-2 flex items-center gap-2 text-infrared-hot opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
              <span className="font-mono text-[10px] tracking-widest uppercase">Voir le profil</span>
              <div className="h-px w-8 bg-current" />
            </div>
          </div>
        </div>

        {/* Top left technical label */}
        <div className="absolute top-4 left-4 z-20 font-mono text-[8px] text-white/30 tracking-widest uppercase pointer-events-none">
          SYS_ID: {artist.id.slice(0, 8)}
        </div>
      </Link>
    );
  };

  return (
    <div className="bg-[#0a0a0f]">
      <HeroSection />

      {/* Featured Music */}
      <section className="py-20 sm:py-32 px-4 sm:px-6">
        <div className="container mx-auto">
          <SectionHeader 
            title="Musique" 
            subtitle="Explorations sonores et productions électroniques" 
            icon="♪"
            colorClass="text-infrared-hot"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {featuredMusic.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} categoryKey="music" />
            ))}
          </div>
        </div>
      </section>

      {/* Visual Arts with different background */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-infrared-purple/5 pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <SectionHeader 
            title="Arts Plastiques" 
            subtitle="Créations visuelles et explorations contemporaines" 
            icon="◈"
            colorClass="text-infrared-orange"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {featuredVisual.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} categoryKey="visualArts" />
            ))}
          </div>
        </div>
      </section>

      {/* Photography */}
      <section className="py-20 sm:py-32 px-4 sm:px-6">
        <div className="container mx-auto">
          <SectionHeader 
            title="Photographie" 
            subtitle="Captures visuelles et atmosphères urbaines" 
            icon="◇"
            colorClass="text-infrared-magenta"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {featuredPhoto.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} categoryKey="photography" />
            ))}
          </div>
        </div>
      </section>

      {/* Videography */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 bg-black/40">
        <div className="container mx-auto">
          <SectionHeader 
            title="Vidéographie" 
            subtitle="Storytelling visuel et créations cinématiques" 
            icon="▸"
            colorClass="text-infrared-yellow"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {featuredVideo.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} categoryKey="videography" />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events - Snappier design */}
      <section className="py-20 sm:py-40 px-4 sm:px-6 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3 space-y-8">
              <h2 className="text-5xl sm:text-7xl font-bold tracking-tighter font-display text-white uppercase leading-none">
                Agenda <br /><span className="text-infrared-hot">Live</span>
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Expériences immersives et performances underground à Rennes. 
              </p>
              <Link
                to="/events"
                className="inline-flex items-center gap-4 group"
              >
                <span className="w-12 h-12 flex items-center justify-center rounded-full border border-infrared-hot text-infrared-hot group-hover:bg-infrared-hot group-hover:text-white transition-all duration-300">
                  →
                </span>
                <span className="font-mono text-xs tracking-widest uppercase group-hover:text-infrared-hot transition-colors">Voir tout l'agenda</span>
              </Link>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 gap-6">
              {upcomingEvents.map((event) => (
                <div 
                  key={event.id}
                  className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-infrared-hot/30 transition-all duration-500 flex flex-col sm:flex-row gap-8 items-center"
                >
                  <div className="w-full sm:w-48 aspect-square rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img src={event.coverImage} alt={event.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 space-y-4 text-center sm:text-left">
                    <div className="font-mono text-xs text-infrared-orange tracking-[0.2em] uppercase">
                      {new Date(event.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })} / {event.location}
                    </div>
                    <h3 className="text-3xl font-bold text-white font-display uppercase">{event.title}</h3>
                    <a
                      href={event.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-8 py-3 bg-white text-black font-mono text-[10px] tracking-widest uppercase hover:bg-infrared-hot hover:text-white transition-all duration-300"
                    >
                      Réserver
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight - Clean Industrial */}
      <section className="py-20 sm:py-32 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="industrial-panel p-10 sm:p-20 rounded-3xl border-none overflow-hidden relative group">
            <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto relative z-10">
              <div className="px-4 py-1 border border-infrared-hot/50 rounded-full font-mono text-[10px] text-infrared-hot tracking-widest uppercase">
                Artistic Submission
              </div>
              <h2 className="text-5xl sm:text-8xl font-bold tracking-tighter font-display text-white leading-none uppercase">
                Rejoignez le <span className="text-gradient">Collectif</span>
              </h2>
              <p className="text-gray-400 text-lg sm:text-xl font-light">
                Vous créez ? Nous diffusons. Soumettez votre travail et intégrez la plateforme INFRAROUGE.
              </p>
              <button className="px-10 py-4 bg-white text-black font-mono text-xs tracking-[0.3em] uppercase hover:bg-infrared-orange hover:text-white transition-all duration-500">
                Soumettre un portfolio
              </button>
            </div>
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-10 left-10 font-mono text-[8px] text-white">001_SCAN_TALENT</div>
              <div className="absolute bottom-10 right-10 font-mono text-[8px] text-white">INF_DEV_2026</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer-like bottom section */}
      <section className="py-20 text-center">
        <h2 className="text-sm font-mono text-gray-600 tracking-[1em] uppercase">
          Infrarouge Collective © 2026
        </h2>
      </section>
    </div>
  );
};

export default Home;
