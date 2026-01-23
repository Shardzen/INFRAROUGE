import { useEffect } from 'react';
import { Heart, Target, Users, Zap, Mail, Instagram } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-violet-600/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8"
              style={{
                textShadow: '0 0 40px rgba(124, 58, 237, 0.3)'
              }}>
            À propos d'
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              INFRAROUGE
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Un magazine culturel nouvelle génération dédié à la découverte et la valorisation 
            des artistes émergents qui façonnent la culture de demain.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-violet-950/5 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80"
                  alt="Notre mission"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-purple-600/20"></div>
              </div>
              {/* Decoration */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl -z-10"></div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-violet-900/20 backdrop-blur-sm border border-violet-500/30 rounded-full px-4 py-2 mb-6">
                <Target className="w-4 h-4 text-violet-400" />
                <span className="text-sm text-violet-300 font-medium">Notre Mission</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Faire rayonner les talents de demain
              </h2>

              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  INFRAROUGE est né d'une conviction simple : les artistes émergents méritent 
                  une plateforme qui les met véritablement en lumière.
                </p>
                <p>
                  Dans un monde saturé de contenus, nous croyons en l'importance de créer 
                  des espaces dédiés à la découverte authentique, où chaque artiste peut 
                  raconter son histoire et partager sa vision.
                </p>
                <p>
                  Notre magazine couvre quatre disciplines artistiques : la musique, les arts 
                  plastiques, le street art et la photographie. Chaque artiste featured est 
                  sélectionné pour son originalité, son talent et sa capacité à repousser 
                  les frontières créatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nos{' '}
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Valeurs
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Les principes qui guident notre travail au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={<Heart className="w-8 h-8" />}
              title="Authenticité"
              description="Nous valorisons la sincérité et l'originalité. Chaque artiste est présenté tel qu'il est, sans filtre ni artifice."
              color="from-violet-600 to-purple-600"
            />
            <ValueCard
              icon={<Users className="w-8 h-8" />}
              title="Communauté"
              description="Nous créons des ponts entre artistes et publics, favorisant les échanges et les collaborations enrichissantes."
              color="from-pink-600 to-rose-600"
            />
            <ValueCard
              icon={<Zap className="w-8 h-8" />}
              title="Innovation"
              description="Nous cherchons constamment à repousser les limites du format magazine et à créer des expériences immersives."
              color="from-blue-600 to-cyan-600"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-violet-950/5 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              L'équipe{' '}
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                INFRAROUGE
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Des passionnés d'art et de culture au service des artistes émergents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember
              name="Direction Éditoriale"
              role="Curation & Sélection"
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
            />
            <TeamMember
              name="Direction Artistique"
              role="Design & Expérience"
              image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80"
            />
            <TeamMember
              name="Direction Technique"
              role="Développement & Innovation"
              image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-12 rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 to-purple-900/30 backdrop-blur-sm"></div>
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-64 h-64 bg-violet-600/40 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Content */}
            <div className="relative text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Vous êtes artiste ?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Vous souhaitez être featured sur INFRAROUGE ? 
                N'hésitez pas à nous contacter et à nous présenter votre travail.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:contact@infrarouge-mag.com"
                  className="flex items-center space-x-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  <span>Nous Contacter</span>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 border border-white/20"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Suivez-nous</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Composant ValueCard
const ValueCard = ({ icon, title, description, color }) => (
  <div className="group relative p-8 bg-violet-900/10 backdrop-blur-sm border border-violet-900/30 rounded-2xl hover:bg-violet-900/20 transition-all duration-300">
    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

// Composant TeamMember
const TeamMember = ({ name, role, image }) => (
  <div className="group relative">
    <div className="aspect-square rounded-2xl overflow-hidden mb-4">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <div className="text-center">
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <p className="text-violet-400">{role}</p>
    </div>
  </div>
);

export default About;