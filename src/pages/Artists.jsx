import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { artists } from '../data/artists';

const Artists = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { key: 'all', label: 'TOUS', icon: '◆' },
    { key: 'music', label: 'MUSIQUE', icon: '♪' },
    { key: 'visualArts', label: 'ARTS PLASTIQUES', icon: '◈' },
    { key: 'photography', label: 'PHOTOGRAPHIE', icon: '◇' },
    { key: 'videography', label: 'VIDÉOGRAPHIE', icon: '▸' },
  ];

  const getAllArtists = () => {
    const all = [];
    Object.keys(artists).forEach((category) => {
      artists[category].forEach((artist) => {
        all.push({ ...artist, categoryKey: category });
      });
    });
    return all;
  };

  const getFilteredArtists = () => {
    let filtered = [];
    
    if (selectedCategory === 'all') {
      filtered = getAllArtists();
    } else {
      filtered = (artists[selectedCategory] || []).map((artist) => ({
        ...artist,
        categoryKey: selectedCategory,
      }));
    }

    if (searchTerm) {
      filtered = filtered.filter((artist) =>
        artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artist.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (artist.genres && artist.genres.some((g) => g.toLowerCase().includes(searchTerm.toLowerCase())))
      );
    }

    return filtered;
  };

  const filteredArtists = getFilteredArtists();

  const getCategoryClass = (categoryKey) => {
    const classes = {
      music: 'category-music',
      visualArts: 'category-visual',
      photography: 'category-photo',
      videography: 'category-video',
    };
    return classes[categoryKey] || '';
  };

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="mb-16 text-center space-y-6">
          <div className="relative inline-block">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter font-display text-gradient">
              ARTISTES
            </h1>
            <div className="absolute -inset-8 bg-thermal-radial opacity-20 blur-3xl animate-pulse-glow" />
          </div>

          <div className="h-1 w-32 bg-thermal-gradient mx-auto rounded-full" />

          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-mono">
            Découvrez les créateurs qui façonnent l'underground contemporain
          </p>
        </div>

        <div className="mb-12 space-y-6">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Rechercher un artiste, style, discipline..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 bg-infrared-deep/50 border border-infrared-purple/30 rounded-lg text-white placeholder-gray-500 focus:border-infrared-hot focus:outline-none transition-colors font-mono text-sm"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <svg
                className="w-5 h-5 text-infrared-hot"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`group px-6 py-3 rounded-lg font-mono text-xs tracking-widest uppercase transition-all duration-300 relative overflow-hidden ${
                  selectedCategory === cat.key
                    ? 'bg-thermal-gradient text-white shadow-glow'
                    : 'bg-infrared-deep/50 border border-infrared-purple/30 text-gray-400 hover:border-infrared-hot/50 hover:text-infrared-hot'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-lg">{cat.icon}</span>
                  {cat.label}
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between text-sm font-mono text-gray-500 max-w-2xl mx-auto">
            <span>
              {filteredArtists.length} artiste{filteredArtists.length > 1 ? 's' : ''} trouvé
              {filteredArtists.length > 1 ? 's' : ''}
            </span>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-infrared-hot hover:text-infrared-orange transition-colors"
              >
                Effacer la recherche
              </button>
            )}
          </div>
        </div>

        {filteredArtists.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtists.map((artist, index) => (
              <Link
                key={`${artist.categoryKey}-${artist.id}`}
                to={`/artist/${artist.categoryKey}/${artist.id}`}
                className="artist-card group relative aspect-square overflow-hidden rounded-lg border border-infrared-purple/30 hover:border-infrared-hot/50 transition-all duration-500"
                style={{
                  opacity: 0,
                  animation: `fadeInUp 0.6s ease-out ${index * 0.05}s forwards`,
                }}
              >
                <div className="absolute inset-0 bg-infrared-gradient">
                  <div className="absolute inset-0 bg-gradient-to-t from-infrared-darker via-infrared-darker/80 to-transparent" />
                </div>

                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className={`px-3 py-1 text-xs font-mono border border-infrared-purple/50 rounded bg-infrared-darker/50 text-gray-300 ${getCategoryClass(artist.categoryKey)}`}>
                      {artist.category}
                    </span>
                    
                    {artist.categoryKey === 'music' && (
                      <div className="w-10 h-10 flex items-center justify-center text-2xl text-infrared-hot animate-pulse-glow">
                        ♪
                      </div>
                    )}
                    {artist.categoryKey === 'visualArts' && (
                      <div className="w-10 h-10 flex items-center justify-center text-2xl text-infrared-orange animate-float">
                        ◈
                      </div>
                    )}
                    {artist.categoryKey === 'photography' && (
                      <div className="w-10 h-10 flex items-center justify-center text-2xl text-infrared-magenta">
                        ◇
                      </div>
                    )}
                    {artist.categoryKey === 'videography' && (
                      <div className="w-10 h-10 flex items-center justify-center text-2xl text-infrared-yellow">
                        ▸
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <h3 className={`text-2xl md:text-3xl font-bold text-gradient ${getCategoryClass(artist.categoryKey)}`}>
                      {artist.name}
                    </h3>
                    
                    <p className="text-sm text-gray-300 line-clamp-2">
                      {artist.description}
                    </p>

                    {artist.genres && (
                      <div className="flex flex-wrap gap-2">
                        {artist.genres.slice(0, 3).map((genre, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs font-mono border border-infrared-purple/30 rounded bg-infrared-darker/30"
                          >
                            {genre}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex gap-2 pt-2">
                      {artist.socials?.soundcloud && (
                        <div className="w-8 h-8 flex items-center justify-center border border-infrared-hot/30 rounded text-xs font-mono text-infrared-hot">
                          SC
                        </div>
                      )}
                      {artist.socials?.instagram && (
                        <div className="w-8 h-8 flex items-center justify-center border border-infrared-orange/30 rounded text-xs font-mono text-infrared-orange">
                          IG
                        </div>
                      )}
                      {artist.socials?.youtube && (
                        <div className="w-8 h-8 flex items-center justify-center border border-infrared-magenta/30 rounded text-xs font-mono text-infrared-magenta">
                          YT
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-thermal-gradient transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="absolute top-4 right-4 w-10 h-10 border border-infrared-hot/30 rounded-full flex items-center justify-center backdrop-blur-sm bg-infrared-darker/50 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-90">
                  <svg
                    className="w-5 h-5 text-infrared-hot"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 space-y-4">
            <div className="text-6xl text-infrared-purple/30">◇</div>
            <p className="text-gray-500 font-mono text-sm">
              Aucun artiste trouvé pour cette recherche
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="text-infrared-hot hover:text-infrared-orange transition-colors text-sm"
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

export default Artists;
