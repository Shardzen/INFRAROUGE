import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { featuredArtists } from '../data/artists';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full filter blur-3xl animate-pulse-slow animation-delay-200"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full filter blur-3xl animate-pulse-slow animation-delay-400"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-medium"
            >
              <Sparkles size={16} className="animate-pulse" />
              Magazine des artistes émergents
            </motion.div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-tight">
              <span className="block gradient-text text-shadow-glow mb-2">
                INFRAROUGE
              </span>
              <span className="block text-white text-4xl sm:text-5xl md:text-6xl mt-4">
                L'Art en Lumière
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Découvrez les talents de demain dans la musique, les arts plastiques, 
              le street art et la photographie
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/musique" className="btn-primary group">
                <span className="relative z-10 flex items-center gap-2">
                  Explorer les artistes
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              <Link to="/a-propos" className="btn-secondary">
                En savoir plus
              </Link>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2 text-gray-500">
              <span className="text-xs uppercase tracking-widest">Défiler</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 rounded-full border-2 border-primary-500/30 flex items-start justify-center p-2"
              >
                <motion.div 
                  className="w-1 h-2 bg-primary-500 rounded-full"
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="section-container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Artistes <span className="gradient-text">À La Une</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Découvrez notre sélection d'artistes émergents qui façonnent la culture de demain
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArtists.map((artist, index) => (
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
                  <div className="relative h-64 mb-6 rounded-xl overflow-hidden image-hover-effect">
                    <img
                      src={artist.coverImage}
                      alt={artist.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-primary-500/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                        {artist.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-display font-bold group-hover:text-primary-400 transition-colors duration-300">
                      {artist.name}
                    </h3>
                    <p className="text-primary-400 font-medium">
                      {artist.genre}
                    </p>
                    <p className="text-gray-400 line-clamp-2">
                      {artist.bio.split('\n\n')[0]}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {artist.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-dark-bg text-gray-400 text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/musique" className="btn-secondary inline-flex items-center gap-2">
            Voir tous les artistes
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="section-container bg-dark-card/30">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Explorer par <span className="gradient-text">Catégorie</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Musique', path: '/musique', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80', color: 'primary' },
            { name: 'Arts Plastiques', path: '/arts-plastiques', image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&q=80', color: 'accent' },
            { name: 'Street Art', path: '/street-art', image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=800&q=80', color: 'primary' },
            { name: 'Photographie', path: '/photographie', image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80', color: 'accent' },
          ].map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={category.path} className="block group">
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/20 transition-colors duration-500"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">
                      {category.name}
                    </h3>
                    <div className="flex items-center gap-2 text-primary-400 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span className="text-sm font-medium">Explorer</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
