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
        console.error("Firebase error:", e);
      }
      setLoading(false);
    };
    fetchArtists();
  }, []);

  const categories = [
    { key: 'all', label: 'Tout', icon: '◆' },
    { key: 'music', label: 'Musique', icon: '♪' },
    { key: 'visualArts', label: 'Visuels', icon: '◈' },
    { key: 'photography', label: 'Photo', icon: '◇' },
    { key: 'videography', label: 'Vidéo', icon: '▸' },
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

  const filteredArtists = (selectedCategory === 'all' 
    ? getAllArtists() 
    : (artists[selectedCategory] || []).map(a => ({...a, categoryKey: selectedCategory}))
  ).filter(a => 
    a.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    a.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-32 pb-20 bg-[#050505] min-h-screen">
      <div className="container mx-auto px-4 sm:px-10">
        {/* Header Style Magazine */}
        <div className="mb-20 sm:mb-32 space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="space-y-4">
              <span className="text-infrared-hot font-mono text-xs tracking-[0.5em] uppercase">Archive_Global</span>
              <h1 className="text-7xl sm:text-[12vw] font-display font-black tracking-tighter text-white uppercase leading-[0.8]">
                Index<br /><span className="text-outline">Artistes</span>
              </h1>
            </div>
            <div className="max-w-xs space-y-6">
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase leading-relaxed">
                Base de données exhaustive des créateurs du collectif Infrarouge. Scanné et mis à jour en temps réel.
              </p>
              <div className="relative">
                <input
                  type="text"
                  placeholder="RECHERCHER_"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/[0.03] border-b border-white/10 py-4 font-mono text-[10px] tracking-widest text-white focus:outline-none focus:border-infrared-hot transition-all uppercase placeholder:text-gray-800"
                />
              </div>
            </div>
          </div>

          {/* Filtres Centrés */}
          <div className="flex flex-wrap gap-4 border-y border-white/5 py-8">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-8 py-2 rounded-full font-mono text-[10px] tracking-widest uppercase transition-all duration-500 ${
                  selectedCategory === cat.key
                    ? 'bg-white text-black shadow-glow'
                    : 'text-gray-500 hover:text-white border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Liste des Artistes (Layout Éditorial) */}
        <div className="space-y-1 bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
          {filteredArtists.map((artist, index) => (
            <Link
              key={artist.id}
              to={`/artist/${artist.categoryKey}/${artist.id}`}
              className="group relative flex flex-col md:flex-row items-center gap-8 p-8 sm:p-12 bg-[#050505] hover:bg-white/[0.02] transition-all duration-700"
            >
              <div className="text-gray-800 font-display font-black text-4xl sm:text-6xl group-hover:text-infrared-hot transition-colors duration-500">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              <div className="w-full md:w-48 aspect-square rounded-2xl overflow-hidden bg-gray-900 flex-shrink-0">
                <img 
                  src={artist.coverImage} 
                  alt={artist.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-60 group-hover:opacity-100"
                />
              </div>

              <div className="flex-1 space-y-4 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tighter text-white uppercase group-hover:translate-x-4 transition-transform duration-700">
                    {artist.name}
                  </h2>
                  <span className="hidden md:block px-3 py-1 border border-white/10 rounded-full font-mono text-[8px] text-gray-500 uppercase">
                    {artist.category}
                  </span>
                </div>
                <p className="text-gray-500 text-sm max-w-xl font-light line-clamp-1">
                  {artist.description}
                </p>
              </div>

              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden lg:block">
                <div className="w-16 h-16 rounded-full border border-infrared-hot flex items-center justify-center text-infrared-hot group-hover:bg-infrared-hot group-hover:text-white transition-all">
                  →
                </div>
              </div>

              {/* Background text on hover */}
              <div className="absolute right-10 top-1/2 -translate-y-1/2 text-[10vw] font-display font-black text-white/[0.01] pointer-events-none group-hover:text-white/[0.03] transition-all uppercase select-none">
                {artist.id.slice(0, 4)}
              </div>
            </Link>
          ))}
        </div>

        {filteredArtists.length === 0 && (
          <div className="text-center py-40 border border-white/5 rounded-3xl">
            <p className="font-mono text-[10px] text-gray-600 tracking-[0.5em] uppercase">No_Artist_Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Artists;
