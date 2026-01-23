import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Instagram, Music } from 'lucide-react';
import { getArtistBySlug } from '../data/artists';

const ArtistDetail = () => {
  const { slug } = useParams();
  const artist = getArtistBySlug(slug);

  if (!artist) {
    return <Navigate to="/" replace />;
  }

  const isMusicArtist = artist.category === 'Musique';
  const isVisualArtist = ['Arts Plastiques', 'Street Art', 'Photographie'].includes(artist.category);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={artist.heroImage}
            alt={artist.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent"></div>
          <div className="absolute inset-0 bg-primary-600/10"></div>
        </div>

        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to={`/${artist.category.toLowerCase().replace(' ', '-')}`}
                className="inline-flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors duration-300 mb-6 group"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
                <span>Retour à {artist.category}</span>
              </Link>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-primary-500/80 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
                  {artist.category}
                </span>
                <span className="px-3 py-1 bg-dark-card/80 backdrop-blur-sm text-gray-300 text-sm font-medium rounded-full">
                  {artist.genre}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 text-shadow-glow">
                {artist.name}
              </h1>

              <div className="flex flex-wrap gap-2">
                {artist.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-dark-card/60 backdrop-blur-sm text-gray-400 text-sm rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-container">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card-premium"
              >
                <h2 className="text-3xl font-display font-bold mb-6 gradient-text">
                  Biographie
                </h2>
                <div className="prose prose-invert max-w-none">
                  {artist.bio.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-400 leading-relaxed mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* SoundCloud Player for Music Artists */}
              {isMusicArtist && artist.soundcloud && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="card-premium"
                >
                  <h2 className="text-3xl font-display font-bold mb-6 gradient-text flex items-center gap-3">
                    <Music size={28} />
                    Écouter sur SoundCloud
                  </h2>
                  <div className="relative rounded-xl overflow-hidden bg-dark-bg border border-primary-500/20">
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
                  <a
                    href={artist.soundcloud.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors duration-300 mt-4 font-medium"
                  >
                    Voir le profil complet sur SoundCloud
                    <ExternalLink size={16} />
                  </a>
                </motion.div>
              )}

              {/* Gallery for Visual Artists */}
              {isVisualArtist && artist.galleryImages && artist.galleryImages.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="card-premium"
                >
                  <h2 className="text-3xl font-display font-bold mb-6 gradient-text">
                    Galerie
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {artist.galleryImages.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer image-hover-effect"
                      >
                        <img
                          src={image}
                          alt={`${artist.name} - Oeuvre ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Exhibitions */}
              {artist.exhibitions && artist.exhibitions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="card-premium"
                >
                  <h2 className="text-3xl font-display font-bold mb-6 gradient-text">
                    Expositions à venir
                  </h2>
                  <div className="space-y-4">
                    {artist.exhibitions.map((exhibition, index) => (
                      <div
                        key={index}
                        className="p-4 bg-dark-bg rounded-lg border border-dark-border hover:border-primary-500/30 transition-colors duration-300"
                      >
                        <h3 className="font-display font-semibold text-lg mb-2">
                          {exhibition.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <span>{new Date(exhibition.date).toLocaleDateString('fr-FR', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                          <span>•</span>
                          <span>{exhibition.venue}, {exhibition.city}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Stats Card */}
              {artist.stats && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="card-glass"
                >
                  <h3 className="text-xl font-display font-bold mb-4">Statistiques</h3>
                  <div className="space-y-4">
                    {Object.entries(artist.stats).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-gray-400 capitalize">
                          {key === 'monthlyListeners' ? 'Auditeurs mensuels' : 
                           key === 'followers' ? 'Followers' : 
                           key === 'plays' ? 'Écoutes' : key}
                        </span>
                        <span className="font-semibold text-primary-400">{value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Social Links Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="card-glass"
              >
                <h3 className="text-xl font-display font-bold mb-4">Suivre {artist.name}</h3>
                <div className="space-y-3">
                  {artist.socialMedia && Object.entries(artist.socialMedia).map(([platform, url]) => {
                    if (!url) return null;
                    
                    const platformConfig = {
                      soundcloud: { name: 'SoundCloud', icon: Music, color: 'text-orange-500' },
                      instagram: { name: 'Instagram', icon: Instagram, color: 'text-pink-500' },
                      spotify: { name: 'Spotify', icon: Music, color: 'text-green-500' },
                      youtube: { name: 'YouTube', icon: Music, color: 'text-red-500' },
                      behance: { name: 'Behance', icon: ExternalLink, color: 'text-blue-500' },
                      website: { name: 'Website', icon: ExternalLink, color: 'text-primary-500' },
                    };

                    const config = platformConfig[platform] || { name: platform, icon: ExternalLink, color: 'text-gray-500' };
                    const Icon = config.icon;

                    return (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-dark-bg rounded-lg hover:bg-primary-500/10 border border-transparent hover:border-primary-500/30 transition-all duration-300 group"
                      >
                        <Icon size={20} className={config.color} />
                        <span className="text-gray-300 group-hover:text-primary-400 transition-colors duration-300">
                          {config.name}
                        </span>
                        <ExternalLink size={14} className="ml-auto text-gray-600 group-hover:text-primary-400 transition-colors duration-300" />
                      </a>
                    );
                  })}
                </div>
              </motion.div>

              {/* Instagram Embed for Visual Artists */}
              {artist.instagram && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="card-glass"
                >
                  <h3 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                    <Instagram size={20} className="text-pink-500" />
                    Instagram
                  </h3>
                  <a
                    href={artist.instagram.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-dark-bg rounded-lg hover:bg-primary-500/10 border border-transparent hover:border-primary-500/30 transition-all duration-300 group"
                  >
                    <span className="text-gray-300 group-hover:text-primary-400 transition-colors duration-300">
                      @{artist.instagram.username}
                    </span>
                    <ExternalLink size={16} className="text-gray-600 group-hover:text-primary-400 transition-colors duration-300" />
                  </a>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtistDetail;
