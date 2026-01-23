import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getArtistBySlug } from '../data/artists';
import { ArrowLeft, ExternalLink, Instagram, Music as MusicIcon, Globe, Image as ImageIcon, X } from 'lucide-react';

const ArtistDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const artist = getArtistBySlug(slug);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!artist) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Artiste non trouvé</h1>
          <Link to="/" className="text-violet-400 hover:text-violet-300">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

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
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background Image avec overlay */}
        <div className="absolute inset-0">
          <img
            src={artist.heroImage || artist.coverImage}
            alt={artist.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
          <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(artist.category).replace('from-', 'from-').replace('to-', 'to-')} opacity-20`}></div>
        </div>

        {/* Bouton retour */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-24 left-4 md:left-8 z-20 flex items-center space-x-2 bg-black/50 backdrop-blur-md hover:bg-black/70 text-white px-4 py-2 rounded-full transition-all duration-300 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Retour</span>
        </button>

        {/* Contenu Hero */}
        <div className="relative h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 w-full">
            <div className="max-w-4xl">
              {/* Badge catégorie */}
              <div className="inline-flex items-center space-x-2 bg-black/50 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getCategoryColor(artist.category)}`}></div>
                <span className="text-white text-sm font-medium">{artist.category}</span>
                {artist.featured && <span className="text-yellow-400 text-sm">⭐ Featured</span>}
              </div>

              {/* Nom de l'artiste */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
                  style={{
                    textShadow: '0 0 40px rgba(0, 0, 0, 0.8), 0 4px 6px rgba(0, 0, 0, 0.5)'
                  }}>
                {artist.name}
              </h1>

              {/* Genre */}
              <p className="text-2xl md:text-3xl text-gray-300 mb-6">
                {artist.genre}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {artist.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-4">
                {artist.instagram && (
                  <a
                    href={artist.instagram.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:scale-105"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {artist.soundcloud && (
                  <a
                    href={artist.soundcloud.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:scale-105"
                  >
                    <MusicIcon className="w-5 h-5" />
                    <span>SoundCloud</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {artist.socialMedia?.website && (
                  <a
                    href={artist.socialMedia.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 border border-white/20"
                  >
                    <Globe className="w-5 h-5" />
                    <span>Site Web</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Bio */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-violet-950/5 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8">
            À propos de{' '}
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              {artist.name}
            </span>
          </h2>
          <div className="prose prose-invert prose-lg max-w-none">
            {artist.bio.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-300 text-lg leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Section SoundCloud Player (pour les musiciens) */}
      {artist.soundcloud && (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8">
              Écouter sur{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                SoundCloud
              </span>
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-violet-900/20 border border-violet-900/20">
              <iframe
                width="100%"
                height="450"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={artist.soundcloud.embedTrack}
                className="w-full"
              ></iframe>
            </div>
          </div>
        </section>
      )}

      {/* Section Galerie (pour les artistes visuels) */}
      {artist.galleryImages && artist.galleryImages.length > 0 && (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-violet-950/5 to-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8">
              Galerie{' '}
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                d'Œuvres
              </span>
            </h2>
            
            {/* Grille de galerie */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {artist.galleryImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={image}
                    alt={`Œuvre ${index + 1} de ${artist.name}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex items-center space-x-2 text-white">
                      <ImageIcon className="w-5 h-5" />
                      <span>Voir en grand</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Modal Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-200"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Œuvre en grand"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Section Expositions (pour les artistes visuels) */}
      {artist.exhibitions && artist.exhibitions.length > 0 && (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8">
              Expositions{' '}
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                à venir
              </span>
            </h2>
            <div className="space-y-6">
              {artist.exhibitions.map((exhibition, index) => (
                <div
                  key={index}
                  className="bg-violet-900/10 backdrop-blur-sm border border-violet-900/30 rounded-xl p-6 hover:bg-violet-900/20 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exhibition.title}</h3>
                      <p className="text-gray-400 mb-2">{exhibition.venue}</p>
                      <p className="text-violet-400">{exhibition.city}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <div className="text-right">
                        <p className="text-sm text-gray-500 uppercase tracking-wider">Date</p>
                        <p className="text-white font-medium">
                          {new Date(exhibition.date).toLocaleDateString('fr-FR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section Stats (si disponibles) */}
      {artist.stats && (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-violet-950/5 to-black">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(artist.stats).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-violet-900/10 backdrop-blur-sm border border-violet-900/30 rounded-xl p-8 text-center"
                >
                  <p className="text-4xl font-bold text-white mb-2">{value}</p>
                  <p className="text-gray-400 capitalize">{key.replace('_', ' ')}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ArtistDetail;