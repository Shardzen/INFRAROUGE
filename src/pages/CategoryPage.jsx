import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MosaicGrid from '../components/MosaicGrid';
import { getArtistsByCategory } from '../data/artists';
import { Music, Palette, Camera, Image as ImageIcon, Filter, SlidersHorizontal } from 'lucide-react';

const CategoryPage = ({ category }) => {
  const [artists, setArtists] = useState([]);
  const [filteredArtists, setFilteredArtists] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const categoryArtists = getArtistsByCategory(category);
    setArtists(categoryArtists);
    setFilteredArtists(categoryArtists);
  }, [category]);

  useEffect(() => {
    if (selectedGenre === 'all') {
      setFilteredArtists(artists);
    } else {
      setFilteredArtists(artists.filter(artist => artist.genre === selectedGenre));
    }
  }, [selectedGenre, artists]);

  const getCategoryIcon = () => {
    switch (category) {
      case 'Musique':
        return <Music className="w-12 h-12" />;
      case 'Arts Plastiques':
        return <Palette className="w-12 h-12" />;
      case 'Photographie':
        return <Camera className="w-12 h-12" />;
      case 'Street Art':
        return <ImageIcon className="w-12 h-12" />;
      default:
        return null;
    }
  };

  const getCategoryColor = () => {
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

  const getCategoryImage = () => {
    switch (category) {
      case 'Musique':
        return 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1600&q=80';
      case 'Arts Plastiques':
        return 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1600&q=80';
      case 'Photographie':
        return 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1600&q=80';
      case 'Street Art':
        return 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=1600&q=80';
      default:
        return 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1600&q=80';
    }
  };

  const getCategoryDescription = () => {
    switch (category) {
      case 'Musique':
        return 'Découvrez les sons de demain. Producteurs, rappeurs et compositeurs qui redéfinissent les genres musicaux.';
      case 'Arts Plastiques':
        return 'Explorez les visions créatives contemporaines. Peintres, sculpteurs et artistes multimédias qui repoussent les frontières de l\'expression artistique.';
      case 'Photographie':
        return 'Capturez l\'instant avec les photographes émergents qui documentent notre époque avec un regard unique.';
      case 'Street Art':
        return 'L\'art urbain s\'exprime. Graffeurs, muralistes et artistes de rue qui transforment nos villes en galeries à ciel ouvert.';
      default:
        return 'Découvrez les artistes émergents qui façonnent la culture de demain.';
    }
  };

  // Extraire les genres uniques
  const uniqueGenres = ['all', ...new Set(artists.map(artist => artist.genre))];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={getCategoryImage()}
            alt={category}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black"></div>
          <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor().replace('from-', 'from-').replace('to-', 'to-')} opacity-30`}></div>
        </div>

        {/* Grille animée */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `
                   linear-gradient(0deg, transparent 24%, rgba(124, 58, 237, 0.4) 25%, rgba(124, 58, 237, 0.4) 26%, transparent 27%, transparent 74%, rgba(124, 58, 237, 0.4) 75%, rgba(124, 58, 237, 0.4) 76%, transparent 77%, transparent),
                   linear-gradient(90deg, transparent 24%, rgba(124, 58, 237, 0.4) 25%, rgba(124, 58, 237, 0.4) 26%, transparent 27%, transparent 74%, rgba(124, 58, 237, 0.4) 75%, rgba(124, 58, 237, 0.4) 76%, transparent 77%, transparent)
                 `,
                 backgroundSize: '80px 80px'
               }}>
          </div>
        </div>

        {/* Contenu */}
        <div className="relative h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
            <div className="max-w-4xl">
              {/* Icône catégorie */}
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${getCategoryColor()} mb-6 shadow-lg`}>
                {getCategoryIcon()}
              </div>

              {/* Titre */}
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6"
                  style={{
                    textShadow: '0 0 40px rgba(0, 0, 0, 0.8), 0 4px 6px rgba(0, 0, 0, 0.5)'
                  }}>
                {category}
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                {getCategoryDescription()}
              </p>

              {/* Stats */}
              <div className="flex items-center space-x-8 mt-8">
                <div>
                  <div className="text-3xl font-bold text-white">{artists.length}</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Artistes</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div>
                  <div className="text-3xl font-bold text-white">{artists.filter(a => a.featured).length}</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Featured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-20 z-30 bg-black/95 backdrop-blur-md border-b border-violet-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Résultats */}
            <div className="text-white">
              <span className="text-xl font-semibold">{filteredArtists.length}</span>
              <span className="text-gray-400 ml-2">
                {filteredArtists.length === 1 ? 'artiste' : 'artistes'}
              </span>
            </div>

            {/* Bouton Filtres Mobile */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center space-x-2 bg-violet-900/30 hover:bg-violet-900/50 text-white px-4 py-2 rounded-lg transition-all duration-200"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>Filtres</span>
            </button>

            {/* Filtres Desktop */}
            <div className="hidden lg:flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <div className="flex items-center space-x-2">
                {uniqueGenres.map((genre) => (
                  <button
                    key={genre}
                    onClick={() => setSelectedGenre(genre)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedGenre === genre
                        ? `bg-gradient-to-r ${getCategoryColor()} text-white shadow-lg`
                        : 'bg-violet-900/20 text-gray-300 hover:bg-violet-900/30'
                    }`}
                  >
                    {genre === 'all' ? 'Tous les genres' : genre}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Filtres Mobile (Dropdown) */}
          {showFilters && (
            <div className="lg:hidden mt-4 pb-4 space-y-2">
              {uniqueGenres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => {
                    setSelectedGenre(genre);
                    setShowFilters(false);
                  }}
                  className={`w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedGenre === genre
                      ? `bg-gradient-to-r ${getCategoryColor()} text-white`
                      : 'bg-violet-900/20 text-gray-300'
                  }`}
                >
                  {genre === 'all' ? 'Tous les genres' : genre}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Artists Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          {filteredArtists.length > 0 ? (
            <MosaicGrid artists={filteredArtists} showCategory={false} />
          ) : (
            <div className="text-center py-24">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-violet-900/20 mb-6">
                <Filter className="w-12 h-12 text-violet-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Aucun artiste trouvé</h3>
              <p className="text-gray-400 mb-6">
                Essayez de modifier vos filtres pour voir plus de résultats
              </p>
              <button
                onClick={() => setSelectedGenre('all')}
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-violet-950/10 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative p-12 rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-purple-900/20 backdrop-blur-sm"></div>
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-64 h-64 bg-violet-600/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Content */}
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Vous êtes artiste en {category} ?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Rejoignez notre sélection et gagnez en visibilité
              </p>
              <button className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105">
                Soumettre votre profil
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;