import { motion } from 'framer-motion';
import { Mail, Heart, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-500/20 rounded-full filter blur-3xl animate-pulse-slow animation-delay-200"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-premium mb-6 shadow-glow"
          >
            <Heart size={36} className="text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
          >
            À Propos d'<span className="gradient-text text-shadow-glow">INFRAROUGE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 leading-relaxed"
          >
            Magazine web dédié à la mise en lumière des artistes émergents qui façonnent la culture de demain
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-premium space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text">
              Notre Mission
            </h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-gray-400 leading-relaxed text-lg">
                INFRAROUGE est né d'une passion commune : offrir une plateforme aux talents émergents 
                qui n'ont pas encore la visibilité qu'ils méritent. Dans un paysage culturel saturé, 
                nous croyons fermement qu'il existe une multitude d'artistes extraordinaires qui attendent 
                d'être découverts.
              </p>
              <p className="text-gray-400 leading-relaxed text-lg">
                Notre magazine web couvre quatre disciplines artistiques majeures : la musique, les arts 
                plastiques, le street art et la photographie. Chaque semaine, nous mettons en lumière de 
                nouveaux artistes, partageons leurs histoires et donnons à notre communauté l'opportunité 
                de découvrir la culture de demain.
              </p>
              <p className="text-gray-400 leading-relaxed text-lg">
                Plus qu'un simple magazine, INFRAROUGE est une communauté où artistes et passionnés se 
                rencontrent, échangent et construisent ensemble l'écosystème culturel de demain.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-container bg-dark-card/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Nos <span className="gradient-text">Valeurs</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Les principes qui guident notre travail au quotidien
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Authenticité',
                description: 'Nous valorisons l\'expression artistique authentique et sans compromis',
                icon: Heart,
                gradient: 'from-primary-600 to-accent-600'
              },
              {
                title: 'Découverte',
                description: 'Nous cherchons constamment de nouveaux talents à mettre en lumière',
                icon: Sparkles,
                gradient: 'from-accent-600 to-primary-500'
              },
              {
                title: 'Communauté',
                description: 'Nous créons des ponts entre artistes et passionnés de culture',
                icon: Heart,
                gradient: 'from-primary-500 to-accent-500'
              }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-glass text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} mb-4 shadow-glow group-hover:shadow-glow-lg transition-all duration-300`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3 gradient-text">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-glass text-center p-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-premium mb-6 shadow-glow">
              <Mail size={28} className="text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Rejoignez <span className="gradient-text">INFRAROUGE</span>
            </h2>

            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Vous êtes un artiste émergent ? Vous souhaitez être mis en avant sur notre plateforme ? 
              Contactez-nous et partagez votre univers avec notre communauté.
            </p>

            <a
              href="mailto:contact@infrarouge.art"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Mail size={20} />
              Nous contacter
            </a>

            <p className="text-gray-500 text-sm mt-6">
              Envoyez-nous votre portfolio, vos liens SoundCloud/Instagram, et une brève présentation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-container bg-dark-card/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Artistes', value: '5+', gradient: 'from-primary-600 to-accent-600' },
              { label: 'Catégories', value: '4', gradient: 'from-accent-600 to-primary-500' },
              { label: 'Visiteurs', value: 'En croissance', gradient: 'from-primary-500 to-accent-500' },
              { label: 'Passion', value: '100%', gradient: 'from-accent-500 to-primary-600' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`text-3xl md:text-4xl font-display font-bold mb-2 bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
