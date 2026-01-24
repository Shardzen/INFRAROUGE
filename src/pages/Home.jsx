import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { artists } from '../data/artists';

const Home = () => {
  const featuredMusic = artists.music.slice(0, 3);
  const featuredVisual = artists.visualArts.slice(0, 3);
  const featuredVideo = artists.videography.slice(0, 3);

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
              className="w-full h-full object-cover"
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
