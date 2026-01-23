import { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import MosaicGrid from '../components/MosaicGrid';
import { featuredArtists, getArtistsByCategory } from '../data/artists';
import { Link } from 'react-router-dom';
import { Music, Palette, Camera, Image as ImageIcon, ArrowRight, TrendingUp, Sparkles } from 'lucide-react';

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = [
    {
      name: 'Musique',
      icon: <Music className="w-8 h-8" />,
      color: 'from-violet-600 to-purple-600',
      bgColor: 'from-violet-900/20 to-purple-900/20',
      path: '/musique',
      description: 'Explorez les sons de demain',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80'
    },
    {
      name: 'Arts Plastiques',
      icon: <Palette className="w-8 h-8" />,
      color: 'from-pink-600 to-rose-600',
      bgColor: 'from-pink-900/20 to-rose-900/20',
      path: '/arts-plastiques',
      description: 'Découvrez les visions créatives',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80'
    },
    {
      name: 'Photographie',
      icon: <Camera className="w-8 h-8" />,
      color: 'from-blue-600 to-cyan-600',
      bgColor: 'from-blue-900/20 to-cyan-900/20',
      path: '/photographie',
      description: 'Capturez l\'instant présent',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80'
    },
    {
      name: 'Street Art',
      icon: <ImageIcon className="w-8 h-8" />,
      color: 'from-orange-600 to-red-600',
      bgColor: 'from-orange-900/20 to-red-900/20',
      path: '/street-art',
      description: 'L\'art urbain s\'exprime',
      image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <HeroSection />

      {/* Section Édito */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-violet-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-violet-900/20 backdrop-blur-sm border border-violet-500/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span className="text-sm text-violet-300 font-medium">Notre Mission</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Faire rayonner les{' '}
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                artistes de demain
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              INFRAROUGE est bien plus qu'un magazine. C'est une plateforme dédiée à la découverte 
              et la valorisation des talents émergents dans tous les domaines artistiques. 
              Nous croyons en l'importance de donner de la visibilité aux créateurs qui façonnent 
              la culture de demain.
            </p>
          </div>
        </div>
      </section>

      {/* Section Catégories */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Explorez par{' '}
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  catégorie
                </span>
              </h2>
              <p className="text-gray-400 text-lg">
                Plongez dans l'univers de votre discipline favorite
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                to={category.path}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  aspectRatio: '16/9'
                }}
              >
                {/* Image de fond */}
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-90`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>

                {/* Contenu */}
                <div className="relative h-full flex flex-col justify-end p-8">
                  {/* Icône */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>

                  {/* Texte */}
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                    {category.name}
                  </h3>
                  <p className="text-gray-300 mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    {category.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center space-x-2 text-white font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span>Découvrir</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Barre décorative */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section Artistes Featured */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-violet-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="inline-flex items-center space-x-2 bg-violet-900/20 backdrop-blur-sm border border-violet-500/30 rounded-full px-4 py-2 mb-4">
                <TrendingUp className="w-4 h-4 text-violet-400" />
                <span className="text-sm text-violet-300 font-medium">Sélection Éditoriale</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Artistes{' '}
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  en vedette
                </span>
              </h2>
              <p className="text-gray-400 text-lg">
                Notre sélection des talents les plus prometteurs du moment
              </p>
            </div>
          </div>

          <MosaicGrid artists={featuredArtists} limit={8} showCategory={true} />

          <div className="text-center mt-12">
            <Link
              to="/musique"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg shadow-violet-900/50 hover:shadow-violet-900/70 hover:scale-105"
            >
              <span>Voir tous les artistes</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section Call to Action */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative p-12 rounded-3xl overflow-hidden">
            {/* Background animé */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-purple-900/20 backdrop-blur-sm"></div>
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-64 h-64 bg-violet-600/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Contenu */}
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Vous êtes artiste ?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Rejoignez notre communauté et faites découvrir votre travail à un public passionné
              </p>
              <Link
                to="/a-propos"
                className="inline-flex items-center space-x-2 bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span>Soumettre votre profil</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;