import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Music, Palette, Camera, Image as ImageIcon } from 'lucide-react';

const MosaicGrid = ({ artists, limit = 8, showCategory = true }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const displayedArtists = limit ? artists.slice(0, limit) : artists;

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Musique':
        return <Music className="w-4 h-4" />;
      case 'Arts Plastiques':
        return <Palette className="w-4 h-4" />;
      case 'Photographie':
        return <Camera className="w-4 h-4" />;
      case 'Street Art':
        return <ImageIcon className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Musique':
        return 'from-violet-600 to-purple-600';
      case 'Arts Plastiques':
        return 'from-pink-600 to-rose-600';
      case 'Photographie':
        return 'from-blue-600 to-cyan-600';
      case 'Street Art':
        return 'from-orange-600 to-red-600';
      default:
        return 'from-gray-600 to-gray-700';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {displayedArtists.map((artist, index) => (
        <Link
          key={artist.id}
          to={`/artiste/${artist.slug}`}
          className={`group relative overflow-hidden rounded-xl bg-gray-900 transition-all duration-500 hover:scale-105 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            animationDelay: `${index * 100}ms`,
            aspectRatio: index % 3 === 0 ? '1/1.3' : '1/1'
          }}
          onMouseEnter={() => setHoveredId(artist.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          {/* Image de fond */}
          <div className="absolute inset-0">
            <img
              src={artist.coverImage}
              alt={artist.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay gradient */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300`}></div>
            
            {/* Overlay coloré au hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(artist.category)} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
          </div>

          {/* Badge catégorie */}
          {showCategory && (
            <div className="absolute top-4 right-4 z-10">
              <div className={`flex items-center space-x-1 bg-gradient-to-r ${getCategoryColor(artist.category)} px-3 py-1.5 rounded-full text-white text-xs font-medium shadow-lg`}>
                {getCategoryIcon(artist.category)}
                <span>{artist.category}</span>
              </div>
            </div>
          )}

          {/* Badge Featured */}
          {artist.featured && (
            <div className="absolute top-4 left-4 z-10">
              <div className="bg-yellow-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-black text-xs font-bold shadow-lg">
                ⭐ FEATURED
              </div>
            </div>
          )}

          {/* Contenu */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
            {/* Nom de l'artiste */}
            <h3 className="text-2xl font-bold text-white mb-2 transform transition-transform duration-300 group-hover:translate-x-2">
              {artist.name}
            </h3>

            {/* Genre */}
            <p className="text-sm text-gray-300 mb-4 transform transition-transform duration-300 group-hover:translate-x-2">
              {artist.genre}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4 transform transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
              {artist.tags.slice(0, 3).map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-white/10 backdrop-blur-sm text-white px-2 py-1 rounded-full border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Bio preview (visible au hover) */}
            <p className={`text-sm text-gray-300 line-clamp-2 mb-4 transition-all duration-500 ${
              hoveredId === artist.id ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
            }`}>
              {artist.bio.split('\n')[0]}
            </p>

            {/* Bouton CTA */}
            <div className={`flex items-center space-x-2 text-white font-medium transition-all duration-300 ${
              hoveredId === artist.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}>
              <span>Découvrir</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Barre décorative animée */}
          <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${getCategoryColor(artist.category)} transform origin-left transition-transform duration-500 ${
            hoveredId === artist.id ? 'scale-x-100' : 'scale-x-0'
          }`}></div>

          {/* Effet de brillance au hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MosaicGrid;