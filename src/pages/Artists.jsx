import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { artists as fallbackArtists } from '../data/artists';

const Artists = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [artists, setArtists] = useState(fallbackArtists);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "artists"));
        if (!querySnapshot.empty) {
          const artistsData = { music: [], visualArts: [], photography: [], videography: [] };
          querySnapshot.forEach((doc) => {
            const data = { ...doc.data(), id: doc.id };
            const cat = data.categoryKey || 'music';
            if (artistsData[cat]) artistsData[cat].push(data);
          });
          setArtists(artistsData);
        }
      } catch (e) {
        console.error("Error fetching artists:", e);
      }
      setLoading(false);
    };
    fetchArtists();
  }, []);

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

  const handleRandomArtist = () => {
    const all = getAllArtists();
    const randomIndex = Math.floor(Math.random() * all.length);
    const randomArtist = all[randomIndex];
    navigate(`/artist/${randomArtist.categoryKey}/${randomArtist.id}`);
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
    <div className="pt-24 sm:pt-32 pb-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="mb-12 sm:mb-16 text-center space-y-4 sm:space-y-6">
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter font-display text-gradient px-4">
              ARTISTES
            </h1>
            <div className="absolute -inset-8 bg-thermal-radial opacity-20 blur-3xl animate-pulse-glow" />
          </div>

          <div className="h-1 w-24 sm:w-32 bg-thermal-gradient mx-auto rounded-full" />

          <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto font-mono px-4">
            Découvrez les créateurs qui façonnent l'underground contemporain
          </p>
        </div>

        <div className="mb-8 sm:mb-12 space-y-4 sm:space-y-6">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Rechercher un artiste, style..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-infrared-deep/50 border border-infrared-purple/30 rounded-lg text-white placeholder-gray-500 focus:border-infrared-hot focus:outline-none transition-colors font-mono text-xs sm:text-sm"
            />
            <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-infrared-hot"
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

          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            <button
              onClick={handleRandomArtist}
              className="group px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-mono text-xs tracking-widest uppercase transition-all duration-300 relative overflow-hidden border border-infrared-hot/50 text-infrared-hot hover:bg-infrared-hot hover:text-white animate-pulse-glow"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>✨</span>
                DÉCOUVERTE ALÉATOIRE
              </span>
            </button>
            <div className="w-full sm:w-auto h-px sm:h-auto sm:w-px bg-infrared-purple/30 my-2 sm:my-0 sm:mx-2" />
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`group px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-mono text-xs tracking-widest uppercase transition-all duration-300 relative overflow-hidden ${
                  selectedCategory === cat.key
                    ? 'bg-thermal-gradient text-white shadow-glow'
                    : 'bg-infrared-deep/50 border border-infrared-purple/30 text-gray-400 hover:border-infrared-hot/50 hover:text-infrared-hot'
                }`}
              >
                <span className="relative z-10 flex items-center gap-1 sm:gap-2">
                  <span className="text-base sm:text-lg">{cat.icon}</span>
                  <span className="hidden xs:inline">{cat.label}</span>
                </span>
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm font-mono text-gray-500 max-w-2xl mx-auto px-2">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
                    <span className={`px-2 sm:px-3 py-1 text-xs font-mono border border-infrared-purple/50 rounded bg-infrared-darker/50 text-gray-300 backdrop-blur-sm ${getCategoryClass(artist.categoryKey)}`}>
                      {artist.category}
                    </span>
                    
                    {artist.categoryKey === 'music' && (
                      <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-xl sm:text-2xl text-infrared-hot animate-pulse-glow">
                        ♪
                      </div>
                    )}
                    {artist.categoryKey === 'visualArts' && (
                      <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-xl sm:text-2xl text-infrared-orange animate-float">
                        ◈
                      </div>
                    )}
                    {artist.categoryKey === 'photography' && (
                      <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-xl sm:text-2xl text-infrared-magenta">
                        ◇
                      </div>
                    )}
                    {artist.categoryKey === 'videography' && (
                      <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-xl sm:text-2xl text-infrared-yellow">
                        ▸
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold text-gradient ${getCategoryClass(artist.categoryKey)}`}>
                      {artist.name}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-gray-300 line-clamp-2">
                      {artist.description}
                    </p>

                    {artist.genres && (
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {artist.genres.slice(0, 3).map((genre, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs font-mono border border-infrared-purple/30 rounded bg-infrared-darker/30 backdrop-blur-sm"
                          >
                            {genre}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex gap-2 pt-1 sm:pt-2">
                      {artist.socials?.soundcloud && (
                        <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center border border-infrared-hot/30 rounded text-xs font-mono text-infrared-hot backdrop-blur-sm bg-infrared-darker/30">
                          SC
                        </div>
                      )}
                      {artist.socials?.instagram && (
                        <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center border border-infrared-orange/30 rounded text-xs font-mono text-infrared-orange backdrop-blur-sm bg-infrared-darker/30">
                          IG
                        </div>
                      )}
                      {artist.socials?.youtube && (
                        <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center border border-infrared-magenta/30 rounded text-xs font-mono text-infrared-magenta backdrop-blur-sm bg-infrared-darker/30">
                          YT
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-thermal-gradient transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 border border-infrared-hot/30 rounded-full flex items-center justify-center backdrop-blur-sm bg-infrared-darker/50 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-90">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-infrared-hot"
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
            <div className="text-4xl sm:text-6xl text-infrared-purple/30">◇</div>
            <p className="text-gray-500 font-mono text-xs sm:text-sm px-4">
              Aucun artiste trouvé pour cette recherche
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
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

export default Artists;
