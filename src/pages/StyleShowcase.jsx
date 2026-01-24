import React from 'react';

const StyleShowcase = () => {
  return (
    <div className="min-h-screen bg-black noise-overlay">
      {/* Hero Section Ultra-Stylé */}
      <section className="relative overflow-hidden py-32 scanlines">
        <div className="absolute inset-0 bg-gradient-to-br from-infrared-yellow/10 via-infrared-pink/10 to-infrared-purple/10"></div>
        
        <div className="relative section-container">
          <div className="text-center space-y-8">
            {/* Titre Principal Glitch */}
            <h1 
              className="gradient-text glow-yellow animate-slide-down"
              data-text="INFRAROUGE"
            >
              INFRAROUGE
            </h1>
            
            <p className="text-2xl md:text-4xl font-display-tech text-gray-300 tracking-widest animate-fade-in animate-delay-200">
              MAGAZINE <span className="text-infrared-pink">UNDERGROUND</span> PREMIUM
            </p>
            
            <div className="divider-infrared max-w-md mx-auto animate-fade-in animate-delay-400"></div>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-body animate-fade-in animate-delay-600">
              Un univers visuel qui mélange les codes du street art, de la culture underground 
              et du design futuriste. Chaque artiste mérite une mise en scène exceptionnelle.
            </p>
          </div>
        </div>
      </section>

      {/* Section Typographies */}
      <section className="section-container">
        <h2 className="font-display-tech gradient-text-yellow text-center mb-16">
          TYPOGRAPHIES UNDERGROUND
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Display Ultra */}
          <div className="card-glass p-8 space-y-4">
            <div className="badge-infrared">Display Ultra</div>
            <h3 className="font-display-ultra text-4xl text-infrared-yellow">
              BEBAS NEUE
            </h3>
            <p className="text-gray-400 text-sm font-body">
              Parfait pour les titres massifs et les headers qui claquent
            </p>
          </div>

          {/* Display Tech */}
          <div className="card-glass p-8 space-y-4">
            <div className="badge-infrared">Display Tech</div>
            <h3 className="font-display-tech text-4xl text-infrared-purple">
              ORBITRON
            </h3>
            <p className="text-gray-400 text-sm font-body">
              Futuriste et tech, pour un look cyberpunk
            </p>
          </div>

          {/* Display Bold */}
          <div className="card-glass p-8 space-y-4">
            <div className="badge-infrared">Display Bold</div>
            <h3 className="font-display-bold text-4xl text-infrared-pink">
              BLACK OPS
            </h3>
            <p className="text-gray-400 text-sm font-body">
              Impact maximal, style militaire underground
            </p>
          </div>

          {/* Display Modern */}
          <div className="card-glass p-8 space-y-4">
            <div className="badge-outline">Display Modern</div>
            <h3 className="font-display-modern text-4xl gradient-text">
              RIGHTEOUS
            </h3>
            <p className="text-gray-400 text-sm font-body">
              Artistique et expressif, pour les contenus créatifs
            </p>
          </div>

          {/* Mono */}
          <div className="card-glass p-8 space-y-4">
            <div className="badge-outline">Monospace</div>
            <h3 className="font-mono text-3xl text-infrared-yellow">
              JETBRAINS MONO
            </h3>
            <p className="text-gray-400 text-sm font-body">
              Code et technique, précision digitale
            </p>
          </div>

          {/* Body */}
          <div className="card-glass p-8 space-y-4">
            <div className="badge-outline">Body Text</div>
            <h3 className="font-body text-3xl text-gray-300">
              OSWALD
            </h3>
            <p className="text-gray-400 text-sm font-body">
              Lisible et sobre pour le contenu éditorial
            </p>
          </div>
        </div>
      </section>

      {/* Section Boutons */}
      <section className="section-container">
        <h2 className="font-display-tech gradient-text text-center mb-16">
          BOUTONS INFRAROUGE
        </h2>
        
        <div className="flex flex-wrap gap-6 justify-center items-center">
          <button className="btn-primary">
            Découvrir les artistes
          </button>
          
          <button className="btn-secondary">
            Explorer les événements
          </button>
          
          <button className="btn-ghost">
            À propos du magazine
          </button>
        </div>
      </section>

      {/* Section Cards Premium */}
      <section className="section-container">
        <h2 className="font-display-ultra gradient-text-yellow text-center mb-16">
          CARDS UNDERGROUND
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card Artist 1 */}
          <div className="card-premium group">
            <div className="aspect-square bg-gradient-to-br from-infrared-yellow/20 to-infrared-purple/20 rounded-lg mb-6 image-hover-infrared overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-display-ultra text-6xl text-white/20">ARTIST</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="badge-infrared">RAP</div>
              <h3 className="font-display-bold text-2xl text-infrared-yellow group-hover:glow-yellow transition-all duration-300">
                MC SUPREME
              </h3>
              <p className="text-gray-400 font-body">
                Le flow le plus underground de la scène française, avec des lyrics qui percutent
              </p>
            </div>
          </div>

          {/* Card Artist 2 */}
          <div className="card-premium group">
            <div className="aspect-square bg-gradient-to-br from-infrared-pink/20 to-infrared-purple/20 rounded-lg mb-6 image-hover-infrared overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-display-ultra text-6xl text-white/20">ARTIST</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="badge-infrared">ELECTRO</div>
              <h3 className="font-display-tech text-2xl text-infrared-pink group-hover:glow-pink transition-all duration-300">
                NEON GHOST
              </h3>
              <p className="text-gray-400 font-body">
                Des beats cyberpunk qui fusionnent le passé et le futur dans une explosion sonore
              </p>
            </div>
          </div>

          {/* Card Artist 3 */}
          <div className="card-premium group">
            <div className="aspect-square bg-gradient-to-br from-infrared-purple/20 to-infrared-yellow/20 rounded-lg mb-6 image-hover-infrared overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-display-ultra text-6xl text-white/20">ARTIST</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="badge-infrared">TRAP</div>
              <h3 className="font-display-modern text-2xl text-infrared-purple group-hover:glow-purple transition-all duration-300">
                DARK ANGEL
              </h3>
              <p className="text-gray-400 font-body">
                Une voix sombre et envoûtante qui redéfinit les codes de la trap actuelle
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Effets Visuels */}
      <section className="section-container">
        <h2 className="font-display-tech gradient-text text-center mb-16">
          EFFETS VISUELS
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Glass Effect */}
          <div className="card-glass p-12 text-center space-y-4">
            <div className="inline-block p-6 bg-infrared-yellow/10 rounded-lg animate-infrared-pulse">
              <svg className="w-16 h-16 text-infrared-yellow" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z"/>
              </svg>
            </div>
            <h3 className="font-display-tech text-2xl gradient-text-yellow">
              GLASS MORPHISM
            </h3>
            <p className="text-gray-400 font-body">
              Effets de verre avec blur et transparence pour un look premium
            </p>
          </div>

          {/* Glow Effect */}
          <div className="card-premium p-12 text-center space-y-4 glow-effect">
            <div className="inline-block p-6 bg-infrared-purple/20 rounded-lg animate-float-chaotic">
              <svg className="w-16 h-16 text-infrared-purple" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2L2 7l8 5 8-5-8-5zM2 17l8 5 8-5M2 12l8 5 8-5"/>
              </svg>
            </div>
            <h3 className="font-display-bold text-2xl gradient-text">
              INFRARED GLOW
            </h3>
            <p className="text-gray-400 font-body">
              Halos lumineux multi-couleurs signature du magazine
            </p>
          </div>
        </div>
      </section>

      {/* Section Gradients */}
      <section className="section-container">
        <h2 className="font-display-ultra text-center mb-16 gradient-text">
          PALETTE INFRAROUGE
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Jaune */}
          <div className="space-y-4">
            <div className="aspect-square bg-gradient-yellow rounded-lg shadow-yellow-glow"></div>
            <p className="text-center font-display-tech text-infrared-yellow">JAUNE</p>
          </div>

          {/* Violet */}
          <div className="space-y-4">
            <div className="aspect-square bg-gradient-purple rounded-lg shadow-purple-glow"></div>
            <p className="text-center font-display-tech text-infrared-purple">VIOLET</p>
          </div>

          {/* Rose */}
          <div className="space-y-4">
            <div className="aspect-square bg-gradient-pink rounded-lg shadow-pink-glow"></div>
            <p className="text-center font-display-tech text-infrared-pink">ROSE</p>
          </div>

          {/* Infrarouge Mix */}
          <div className="space-y-4">
            <div className="aspect-square bg-gradient-infrared rounded-lg shadow-infrared-glow animate-infrared-shimmer"></div>
            <p className="text-center font-display-tech gradient-text">MIX</p>
          </div>
        </div>
      </section>

      {/* Section Input */}
      <section className="section-container">
        <h2 className="font-display-tech gradient-text-yellow text-center mb-16">
          FORMULAIRES PREMIUM
        </h2>
        
        <div className="max-w-2xl mx-auto space-y-6">
          <input 
            type="text" 
            placeholder="Nom de l'artiste" 
            className="input-premium"
          />
          
          <input 
            type="email" 
            placeholder="Email pour la newsletter" 
            className="input-premium"
          />
          
          <textarea 
            placeholder="Votre message underground..." 
            rows="5"
            className="input-premium resize-none"
          ></textarea>
          
          <button className="btn-primary w-full">
            Envoyer dans l'infrarouge
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-infrared-yellow/20 py-12 backdrop-infrared">
        <div className="section-container">
          <div className="text-center space-y-6">
            <h3 className="font-display-ultra text-4xl gradient-text">
              INFRAROUGE
            </h3>
            <p className="text-gray-400 font-body text-lg">
              Le magazine qui met en lumière la scène underground
            </p>
            <div className="divider-infrared max-w-xs mx-auto"></div>
            <p className="text-gray-500 text-sm font-mono">
              © 2025 INFRAROUGE - ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StyleShowcase;
