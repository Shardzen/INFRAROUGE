import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Music, Palette, Camera, Sparkles } from 'lucide-react';
import { getArtistsByCategory } from '../data/artists';

const CategoryPage = ({ category }) => {
  const artists = getArtistsByCategory(category);

  const categoryInfo = {
    'Musique': {
      icon: Music,
      description: 'Explorez les nouveaux sons qui redéfinissent la scène musicale',
      gradient: 'from-primary-600 to-accent-600'
    },
    'Arts Plastiques': {
      icon: Palette,
      description: 'Découvrez les artistes qui repoussent les limites de la création visuelle',
      gradient: 'from-accent-600 to-primary-600'
    },
    'Street Art': {
      icon: Sparkles,
      description: 'L\'art urbain qui transforme nos rues en galeries à ciel ouvert',
      gradient: 'from-primary-500 to-accent-500'
    },
    'Photographie': {
      icon: Camera,
      description: 'Les photographes qui capturent l\'essence de notre époque',
      gradient: 'from-accent-500 to-primary-500'
    }
  };

  const info = categoryInfo[category];
  const Icon = info.icon;

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${info.gradient} opacity-20 rounded-full filter blur-3xl animate-pulse-slow`}></div>
          <div className={`absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr ${info.gradient} opacity-20 rounded-full filter blur-3xl animate-pulse-slow animation-delay-200`}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-premium mb-6 shadow-glow"
          >
            <Icon size={36} className="text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
          >
            <span className="gradient-text text-shadow-glow">{category}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            {info.description}
          </motion.p>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="section-container">
        {artists.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map((artist, index) => (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/artiste/${artist.slug}`} className="block group">
                  <div className="card-premium h-full">
                    {/* Image */}
                    <div className="relative h-72 mb-6 rounded-xl overflow-hidden image-hover-effect">
                      <img
                        src={artist.coverImage}
                        alt={artist.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {artist.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="flex items-center gap-1 px-3 py-1 bg-accent-500/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                            <Sparkles size={12} />
                            Featured
                          </span>
                        </div>
                      )}

                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-primary-500/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                          {artist.genre}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-2xl font-display font-bold group-hover:text-primary-400 transition-colors duration-300">
                        {artist.name}
                      </h3>
                      
                      <p className="text-gray-400 line-clamp-3 leading-relaxed">
                        {artist.bio.split('\n\n')[0]}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {artist.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-dark-bg text-gray-400 text-xs rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-primary-400 font-medium pt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <span>Découvrir</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-20"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-dark-card border border-dark-border mb-6">
              <Icon size={36} className="text-gray-600" />
            </div>
            <h3 className="text-2xl font-display font-bold text-gray-400 mb-4">
              Aucun artiste pour le moment
            </h3>
            <p className="text-gray-500 mb-8">
              De nouveaux talents seront bientôt ajoutés dans cette catégorie
            </p>
            <Link to="/" className="btn-secondary inline-flex items-center gap-2">
              Retour à l'accueil
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        )}
      </section>

      {/* CTA Section */}
      {artists.length > 0 && (
        <section className="section-container bg-dark-card/30">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-glass text-center max-w-4xl mx-auto p-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Vous êtes <span className="gradient-text">artiste</span> ?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Rejoignez INFRAROUGE et partagez votre art avec notre communauté passionnée
            </p>
            <Link to="/a-propos" className="btn-primary inline-flex items-center gap-2">
              Soumettre mon profil
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </section>
      )}
    </div>
  );
};

export default CategoryPage;
