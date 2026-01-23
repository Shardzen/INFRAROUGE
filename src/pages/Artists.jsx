import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Music, Palette, Filter } from 'lucide-react';
import { artists } from '../data/mockData';

export default function Artists() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'TOUS', icon: Filter },
    { id: 'Musique', label: 'MUSIQUE', icon: Music },
    { id: 'Street Art', label: 'STREET ART', icon: Palette }
  ];

  const filteredArtists = selectedCategory === 'all' 
    ? artists 
    : artists.filter(a => a.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-8xl md:text-9xl font-black mb-6 leading-none">
            ARTISTES
          </h1>
          <div className="w-40 h-2 bg-yellow-400 mb-8" />
          <p className="text-2xl text-gray-400 max-w-3xl">
            Découvrez les voix et les visions qui façonnent la culture underground d'aujourd'hui.
          </p>
        </motion.div>

        {/* FILTRES */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-16 pb-8 border-b-2 border-purple-500/20"
        >
          {categories.map(cat => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-3 px-6 py-3 border-2 font-bold text-lg transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-yellow-400 text-black border-yellow-400'
                    : 'bg-transparent text-white border-white/30 hover:border-yellow-400 hover:text-yellow-400'
                }`}
              >
                <Icon size={20} />
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* GRILLE ARTISTES */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredArtists.map((artist, index) => (
            <motion.div
              key={artist.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <Link to={`/artiste/${artist.id}`}>
                <div className="relative overflow-hidden border-2 border-white/10 group-hover:border-yellow-400 transition-colors">
                  {/* IMAGE */}
                  <div className="relative h-96 overflow-hidden">
                    <img 
                      src={artist.coverImage}
                      alt={artist.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    
                    {/* OVERLAY INFO */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 border-2 border-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-yellow-400 text-3xl">→</span>
                        </div>
                        <p className="text-yellow-400 font-bold text-lg">DÉCOUVRIR</p>
                      </div>
                    </div>
                  </div>

                  {/* INFO CARD */}
                  <div className="p-6 bg-black border-t-2 border-purple-500/30">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-purple-500 text-xs font-bold">
                        {artist.category}
                      </span>
                      <span className="px-3 py-1 bg-white/10 text-xs font-bold">
                        {artist.genre}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-black mb-3 group-hover:text-yellow-400 transition-colors">
                      {artist.name}
                    </h3>
                    
                    <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                      {artist.bio.split('\n')[0]}
                    </p>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-2">
                      {artist.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-xs text-gray-500 font-mono">
                          #{tag.replace(/\s+/g, '')}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* EMPTY STATE */}
        {filteredArtists.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-3xl text-gray-600 font-bold">
              Aucun artiste dans cette catégorie pour le moment.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
