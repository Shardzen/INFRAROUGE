import { motion } from 'framer-motion';
import { ExternalLink, Music, Camera, Palette, Video } from 'lucide-react';

const MosaicGrid = () => {
  const artists = [
    {
      id: 1,
      name: 'LUNA CHAOS',
      discipline: 'Musique Expérimentale',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
      icon: Music,
      height: 'h-96',
    },
    {
      id: 2,
      name: 'VOID COLLECTIVE',
      discipline: 'Art Visuel',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800',
      icon: Palette,
      height: 'h-80',
    },
    {
      id: 3,
      name: 'NEON PROPHET',
      discipline: 'Photographie',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800',
      icon: Camera,
      height: 'h-[28rem]',
    },
    {
      id: 4,
      name: 'PULSE SYNDICATE',
      discipline: 'Performance Live',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800',
      icon: Video,
      height: 'h-72',
    },
    {
      id: 5,
      name: 'ECHO CHAMBER',
      discipline: 'Installation Sonore',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800',
      icon: Music,
      height: 'h-96',
    },
    {
      id: 6,
      name: 'GLITCH THEORY',
      discipline: 'Art Numérique',
      image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800',
      icon: Palette,
      height: 'h-[32rem]',
    },
    {
      id: 7,
      name: 'DARK MATTER',
      discipline: 'Photographie',
      image: 'https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?w=800',
      icon: Camera,
      height: 'h-80',
    },
    {
      id: 8,
      name: 'SPECTRUM SHIFT',
      discipline: 'Musique Électronique',
      image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800',
      icon: Music,
      height: 'h-[28rem]',
    },
  ];

  return (
    <section id="galerie" className="py-20 px-4 sm:px-6 lg:px-8 bg-infra-black">
      <div className="max-w-7xl mx-auto">
        {/* En-tête de section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-heavy tracking-tighter text-infra-white mb-4">
            LA <span className="text-infra-yellow">GALERIE</span>
          </h2>
          <p className="text-infra-white/60 text-lg font-body max-w-2xl">
            Explorez l'univers des artistes qui réinventent les codes de la création underground.
          </p>
        </motion.div>

        {/* Grille Masonry */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              className={`relative ${artist.height} break-inside-avoid-column group cursor-pointer overflow-hidden`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="relative w-full h-full overflow-hidden">
                <motion.img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
                
                {/* Overlay violet au survol */}
                <motion.div
                  className="absolute inset-0 bg-infra-violet/0 group-hover:bg-infra-violet/60 transition-all duration-500"
                  initial={{ opacity: 0 }}
                />

                {/* Contenu au survol */}
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6"
                >
                  {/* Icône */}
                  <motion.div
                    className="mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    <artist.icon size={40} className="text-infra-yellow" />
                  </motion.div>

                  {/* Nom de l'artiste */}
                  <h3 className="text-3xl font-heavy tracking-tighter text-infra-yellow text-center mb-2">
                    {artist.name}
                  </h3>

                  {/* Discipline */}
                  <p className="text-infra-white text-sm font-body tracking-wider uppercase text-center mb-4">
                    {artist.discipline}
                  </p>

                  {/* Bouton découvrir */}
                  <motion.button
                    className="flex items-center space-x-2 px-4 py-2 bg-infra-yellow text-infra-black font-body font-bold text-xs tracking-wider uppercase"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span>Découvrir</span>
                    <ExternalLink size={14} />
                  </motion.button>
                </motion.div>

                {/* Badge discipline (visible par défaut) */}
                <div className="absolute top-4 right-4 bg-infra-black/60 backdrop-blur-sm px-3 py-1 group-hover:opacity-0 transition-opacity duration-300">
                  <span className="text-infra-yellow text-xs font-body tracking-wider uppercase">
                    {artist.discipline}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MosaicGrid;
