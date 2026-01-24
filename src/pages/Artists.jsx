import React, { useState } from 'react';
import { artists } from '../data/artists';
import MosaicGrid from '../components/MosaicGrid';

const Artists = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', ...new Set(artists.map((artist) => artist.category))];

  const filteredArtists = artists.filter((artist) => {
    const matchesCategory = selectedCategory === 'all' || artist.category === selectedCategory;
    const matchesSearch =
      artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artist.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artist.genres.some((genre) => genre.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="mb-16 text-center space-y-6">
          <div className="relative inline-block">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-gradient">
              ARTISTES
            </h1>
            <div className="absolute -inset-8 bg-thermal-radial opacity-20 blur-3xl animate-pulse-glow" />
          </div>

          <div className="h-1 w-32 bg-thermal-gradient mx-auto rounded-full" />

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Découvrez les artistes qui façonnent la scène underground contemporaine
          </p>
        </div>

        <div className="mb-12 space-y-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Rechercher un artiste, genre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-3 bg-infrared-deep/50 border border-infrared-purple/30 rounded-lg text-white placeholder-gray-500 focus:border-infrared-hot focus:outline-none transition-colors font-mono text-sm"
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

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-mono text-xs tracking-widest uppercase transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-thermal-gradient text-white shadow-glow'
                      : 'bg-infrared-deep/50 border border-infrared-purple/30 text-gray-400 hover:border-infrared-hot/50 hover:text-infrared-hot'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-sm font-mono text-gray-500">
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
          <MosaicGrid items={filteredArtists} type="artist" />
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
    </div>
  );
};

export default Artists;
