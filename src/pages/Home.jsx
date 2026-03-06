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

  const ArtistCard = ({ artist, categoryKey }) => {
    const getCategoryIcon = (cat) => {
      const icons = {
        music: '♪',
        visualArts: '◈',
        photography: '◇',
        videography: '▸',
      };
      return icons[cat] || '◆';
    };

    return (
      <Link
        to={`/artist/${categoryKey}/${artist.id}`}
        className="group relative aspect-square overflow-hidden rounded-lg border border-infrared-purple/30 hover:border-infrared-hot/50 transition-all duration-500"
      >
        {/* Image de fond si disponible */}
        {artist.coverImage ? (
          <div className="absolute inset-0">
            <img 
              src={artist.coverImage} 
              alt={artist.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-infrared-darker via-infrared-darker/80 to-infrared-darker/40" />
          </div>
        ) : (
          <div className="absolute inset-0 bg-infrared-gradient">
            <div className="absolute inset-0 bg-gradient-to-t from-infrared-darker via-infrared-darker/80 to-transparent" />
          </div>
        )}

        <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="px-2 sm:px-3 py-1 text-xs font-mono border border-infrared-purple/50 rounded bg-infrared-darker/50 text-gray-300 backdrop-blur-sm">
              {artist.category}
            </span>
            
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-xl sm:text-2xl text-infrared-hot">
              {getCategoryIcon(categoryKey)}
            </div>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient">
              {artist.name}
            </h3>
            
            <p className="text-xs sm:text-sm text-gray-300 line-clamp-2">
              {artist.description}
            </p>

            {artist.genres && (
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {artist.genres.slice(0, 2).map((genre, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs font-mono border border-infrared-purple/30 rounded bg-infrared-darker/30 backdrop-blur-sm"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-thermal-gradient transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </Link>
    );
  };

  return (
    <div>
      <HeroSection />

      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="mb-8 sm:mb-12 space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-infrared-purple" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter font-display text-gradient flex items-center gap-2 sm:gap-3">
                <span className="text-2xl sm:text-3xl">♪</span>
                MUSIQUE
              </h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-infrared-purple" />
            </div>
            <p className="text-center text-gray-400 font-mono text-xs sm:text-sm tracking-wide">
              Explorations sonores et productions électroniques underground
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {featuredMusic.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} categoryKey="music" />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/artists"
              className="inline-block group relative px-6 sm:px-8 py-3 sm:py-4 border border-infrared-purple rounded-lg overflow-hidden hover:border-infrared-hot transition-all duration-300"
            >
              <span className="relative z-10 font-mono text-xs sm:text-sm tracking-widest text-gray-300 group-hover:text-infrared-hot transition-colors">
                DÉCOUVRIR TOUS LES ARTISTES MUSIQUE
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-infrared-purple/5" />
        
        <div className="container mx-auto relative z-10">
          <div className="mb-8 sm:mb-12 space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-infrared-hot" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter font-display text-gradient flex items-center gap-2 sm:gap-3">
                <span className="text-2xl sm:text-3xl">◈</span>
                ARTS PLASTIQUES
              </h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-infrared-hot" />
            </div>
            <p className="text-center text-gray-400 font-mono text-xs sm:text-sm tracking-wide">
              Créations visuelles et explorations artistiques contemporaines
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {featuredVisual.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} categoryKey="visualArts" />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/artists"
              className="inline-block group relative px-6 sm:px-8 py-3 sm:py-4 bg-infrared-purple/30 border border-infrared-hot/50 rounded-lg overflow-hidden hover:border-infrared-hot transition-all duration-300"
            >
              <span className="relative z-10 font-mono text-xs sm:text-sm tracking-widest text-infrared-hot group-hover:text-white transition-colors">
                DÉCOUVRIR TOUS LES ARTISTES VISUELS
              </span>
              <div className="absolute inset-0 bg-thermal-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="mb-8 sm:mb-12 space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-infrared-magenta" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter font-display text-gradient flex items-center gap-2 sm:gap-3">
                <span className="text-2xl sm:text-3xl">◇</span>
                PHOTOGRAPHIE
              </h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-infrared-magenta" />
            </div>
            <p className="text-center text-gray-400 font-mono text-xs sm:text-sm tracking-wide">
              Captures visuelles et atmosphères urbaines underground
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {featuredPhoto.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} categoryKey="photography" />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/artists"
              className="inline-block group relative px-6 sm:px-8 py-3 sm:py-4 border border-infrared-purple rounded-lg overflow-hidden hover:border-infrared-magenta transition-all duration-300"
            >
              <span className="relative z-10 font-mono text-xs sm:text-sm tracking-widest text-gray-300 group-hover:text-infrared-magenta transition-colors">
                DÉCOUVRIR TOUS LES PHOTOGRAPHES
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="mb-8 sm:mb-12 space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-infrared-orange" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter font-display text-gradient flex items-center gap-2 sm:gap-3">
                <span className="text-2xl sm:text-3xl">▸</span>
                VIDÉOGRAPHIE
              </h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-infrared-orange" />
            </div>
            <p className="text-center text-gray-400 font-mono text-xs sm:text-sm tracking-wide">
              Storytelling visuel et créations cinématiques
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {featuredVideo.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} categoryKey="videography" />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/artists"
              className="inline-block group relative px-6 sm:px-8 py-3 sm:py-4 border border-infrared-purple rounded-lg overflow-hidden hover:border-infrared-orange transition-all duration-300"
            >
              <span className="relative z-10 font-mono text-xs sm:text-sm tracking-widest text-gray-300 group-hover:text-infrared-orange transition-colors">
                DÉCOUVRIR TOUS LES VIDÉASTES
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-infrared-purple to-transparent opacity-30" />
        
        <div className="container mx-auto">
          <div className="mb-10 sm:mb-16 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter font-display text-white">
                PROCHAINS <span className="text-infrared-hot">LIVE</span>
              </h2>
              <p className="text-gray-400 font-mono text-xs sm:text-sm tracking-widest uppercase">
                Expériences immersives à Rennes & au-delà
              </p>
            </div>
            
            <Link
              to="/events"
              className="group flex items-center gap-3 px-6 py-3 border border-infrared-purple/30 rounded-full hover:border-infrared-hot transition-all duration-300"
            >
              <span className="font-mono text-xs tracking-widest text-gray-400 group-hover:text-white">VOIR TOUT L'AGENDA</span>
              <span className="text-infrared-hot group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {upcomingEvents.map((event) => (
              <div 
                key={event.id}
                className="group relative flex flex-col sm:flex-row gap-6 p-4 rounded-2xl bg-infrared-deep/20 border border-infrared-purple/20 hover:border-infrared-hot/40 transition-all duration-500 hover:shadow-glow-strong overflow-hidden"
              >
                {/* Image avec scanline effect on hover */}
                <div className="w-full sm:w-40 h-40 rounded-xl overflow-hidden relative flex-shrink-0">
                  <img 
                    src={event.coverImage} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-infrared-deep/40 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Scanline animation only on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="w-full h-1 bg-infrared-hot/50 absolute top-0 left-0 animate-scanline" />
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-between py-1">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-[10px] font-mono tracking-widest text-infrared-orange uppercase">
                      <span>{new Date(event.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}</span>
                      <span className="w-1 h-1 rounded-full bg-infrared-purple/50" />
                      <span>{event.location.split(',')[0]}</span>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-infrared-hot transition-colors duration-300">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 font-light">
                      {event.description}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-white/90">{event.price}</span>
                    <a
                      href={event.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-infrared-purple/30 border border-infrared-hot/50 rounded-lg text-infrared-hot font-mono text-[10px] tracking-widest hover:bg-thermal-gradient hover:text-white hover:border-transparent transition-all duration-300"
                    >
                      RÉSERVER
                    </a>
                  </div>
                </div>

                {/* Background glow on hover */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-infrared-hot opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 relative">
        <div className="container mx-auto">
          <div className="industrial-panel p-8 sm:p-12 rounded-lg border-infrared-purple/30 overflow-hidden relative group">
            {/* Decorative Technical Elements */}
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-infrared-purple/40 text-right pointer-events-none">
              REF_ID: INF-2026-X<br />
              STATUS: SCANNING_FOR_TALENT<br />
              LOC: RENNES_UNDERGROUND
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="flex-1 space-y-6">
                <div className="inline-block px-3 py-1 bg-infrared-hot/10 border border-infrared-hot/30 text-infrared-hot font-mono text-xs tracking-widest uppercase">
                  Spotlight Recruitment
                </div>
                <h2 className="text-4xl sm:text-6xl font-bold tracking-tighter font-display text-white">
                  VOUS ÊTES <span className="text-infrared-hot">L'UNDERGROUND</span> ?
                </h2>
                <p className="text-gray-400 text-lg sm:text-xl max-w-2xl font-light leading-relaxed">
                  INFRAROUGE recherche constamment de nouveaux visages. Musique, arts visuels, photo ou vidéo : soumettez votre portfolio et rejoignez la plateforme.
                </p>
                
                <div className="pt-4 flex flex-wrap gap-6 items-center">
                  <button className="btn-industrial group">
                    <span className="relative z-10 flex items-center gap-3">
                      SOUMETTRE MON TRAVAIL
                      <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </button>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-[1px] bg-infrared-purple/30" />
                    <span className="font-mono text-[10px] text-gray-500 tracking-[0.3em] uppercase">
                      No gatekeeping. Just art.
                    </span>
                  </div>
                </div>
              </div>

              {/* Visual representation - Fake Barcode / Technical UI */}
              <div className="w-full lg:w-1/3 flex flex-col items-end gap-4 opacity-50 group-hover:opacity-100 transition-opacity duration-700">
                <div className="w-full h-24 bg-gradient-to-r from-transparent via-infrared-purple/20 to-infrared-purple/40 rounded border border-infrared-purple/30 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-around">
                    {[...Array(20)].map((_, i) => (
                      <div key={i} className={`w-[1px] bg-infrared-hot/30 ${i % 3 === 0 ? 'h-full' : 'h-1/2'}`} />
                    ))}
                  </div>
                </div>
                <div className="font-mono text-[8px] tracking-[0.5em] text-infrared-orange">
                  SYSTEM_INITIALIZED_2026_VERSION_1.0.0
                </div>
              </div>
            </div>

            {/* Background glitch effect element */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-infrared-purple opacity-0 group-hover:opacity-10 blur-[100px] transition-opacity duration-1000" />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-6 sm:space-y-8">
          <div className="relative inline-block">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter font-display text-gradient">
              REJOIGNEZ LE MOUVEMENT
            </h2>
            <div className="absolute -inset-4 bg-thermal-radial opacity-20 blur-3xl animate-pulse-glow" />
          </div>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Plongez dans l'univers underground contemporain. Où la créativité rencontre l'innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 sm:pt-8">
            <Link
              to="/about"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-thermal-gradient rounded-lg overflow-hidden transition-all duration-300 hover:shadow-glow-strong"
            >
              <span className="relative z-10 font-mono text-xs sm:text-sm tracking-widest text-white">
                EN SAVOIR PLUS
              </span>
            </Link>

            <Link
              to="/artists"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 border border-infrared-purple rounded-lg overflow-hidden hover:border-infrared-orange transition-all duration-300"
            >
              <span className="relative z-10 font-mono text-xs sm:text-sm tracking-widest text-gray-300 group-hover:text-infrared-orange transition-colors">
                DÉCOUVRIR LES ARTISTES
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
