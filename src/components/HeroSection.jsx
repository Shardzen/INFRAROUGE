import { motion } from 'framer-motion';
import { TrendingUp, Calendar } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Image de fond */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-infra-violet/20 to-infra-black"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600')] bg-cover bg-center opacity-40 mix-blend-luminosity" />
      </motion.div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-infra-black via-transparent to-transparent" />

      {/* Contenu */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Badge tendance */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-infra-violet/20 border border-infra-violet px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
            whileHover={{ scale: 1.05, borderColor: '#D9F99D' }}
          >
            <TrendingUp size={16} className="text-infra-yellow" />
            <span className="text-infra-yellow text-xs font-body tracking-wider uppercase">
              À la une
            </span>
          </motion.div>

          {/* Titre principal */}
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-heavy tracking-tighter text-infra-white leading-none mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            L'ART
            <br />
            <span className="text-infra-yellow">UNDERGROUND</span>
            <br />
            EN FUSION
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-infra-white/70 text-lg md:text-xl font-body max-w-2xl mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Découvrez les artistes qui façonnent la scène alternative. 
            Musique expérimentale, art visuel provocateur, et performances qui 
            repoussent les limites de la création contemporaine.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <motion.button
              className="px-8 py-4 bg-infra-yellow text-infra-black font-body font-bold tracking-wider uppercase rounded-none hover:bg-infra-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explorer la galerie
            </motion.button>
            
            <motion.button
              className="px-8 py-4 bg-transparent border-2 border-infra-violet text-infra-white font-body font-bold tracking-wider uppercase rounded-none hover:bg-infra-violet/20 transition-colors flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05, borderColor: '#D9F99D' }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar size={20} />
              <span>Prochains événements</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-infra-violet/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-infra-yellow rounded-full"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
