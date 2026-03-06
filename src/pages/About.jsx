import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Manifeste | INFRAROUGE';
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen pt-32 pb-40 overflow-hidden relative">
      {/* Background Elements */}
      <div className="light-leak leak-1 opacity-20" />
      <div className="light-leak leak-2 opacity-10" />
      
      <div className="container mx-auto px-4 sm:px-10 relative z-10">
        
        {/* Header Section */}
        <div className="mb-32 space-y-8">
          <span className="text-infrared-hot font-mono text-[10px] tracking-[0.8em] uppercase reveal-text">
            System_Origins_v1.0
          </span>
          <h1 className="text-7xl sm:text-[15vw] font-display font-black tracking-tighter text-white uppercase leading-[0.8] reveal-text">
            L'Essence<br /><span className="text-outline">Infra</span>rouge
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Main Manifesto Text */}
          <div className="lg:col-span-7 space-y-16">
            <div className="space-y-8">
              <h2 className="text-gray-800 font-display font-black text-4xl sm:text-6xl uppercase">La Vision</h2>
              <p className="text-white text-2xl sm:text-4xl font-light leading-tight tracking-tight">
                L'infrarouge est une fréquence invisible à l'œil nu, mais dont on ressent la chaleur. 
                <span className="text-infrared-hot"> C'est exactement là que se situe l'underground.</span>
              </p>
            </div>

            <div className="space-y-10 text-gray-400 text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
              <p>
                Infrarouge Collective est né d'un constat simple : la scène contemporaine regorge de talents dont la fréquence est trop brute, trop pure ou trop expérimentale pour les circuits traditionnels.
              </p>
              <p>
                Basé à Rennes, France, notre mouvement s'est donné pour mission de capturer ces ondes et de les projeter dans une esthétique premium. Nous ne sommes pas une simple galerie ; nous sommes un amplificateur pour ceux qui cultivent l'élégance du chaos.
              </p>
              <div className="h-px w-20 bg-infrared-hot opacity-50" />
              <p className="italic text-white/60">
                "Nous ne cherchons pas la lumière des projecteurs, mais la chaleur de la création pure."
              </p>
            </div>
          </div>

          {/* Pillars Side Column */}
          <div className="lg:col-span-5 space-y-12 lg:pt-20">
            <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/5 space-y-12 relative overflow-hidden group">
              <div className="absolute top-[-10%] right-[-10%] text-[15vw] font-display font-black text-white/[0.02] pointer-events-none uppercase">
                Pillars
              </div>
              
              <div className="space-y-8 relative z-10">
                <div className="space-y-2">
                  <div className="text-infrared-hot font-mono text-[8px] uppercase tracking-widest">01 / Curations</div>
                  <h3 className="text-white font-display text-2xl uppercase">Radicalité Visuelle</h3>
                  <p className="text-gray-500 text-sm font-light">Une sélection sans compromis d'artistes plasticiens et photographes redéfinissant l'image contemporaine.</p>
                </div>

                <div className="space-y-2">
                  <div className="text-infrared-orange font-mono text-[8px] uppercase tracking-widest">02 / Sonics</div>
                  <h3 className="text-white font-display text-2xl uppercase">Exploration Sonore</h3>
                  <p className="text-gray-500 text-sm font-light">De l'ambient expérimental à la techno industrielle, nous documentons les textures qui font vibrer la scène nocturne.</p>
                </div>

                <div className="space-y-2">
                  <div className="text-infrared-magenta font-mono text-[8px] uppercase tracking-widest">03 / Community</div>
                  <h3 className="text-white font-display text-2xl uppercase">Réseau Alternatif</h3>
                  <p className="text-gray-500 text-sm font-light">Un point de ralliement pour les visionnaires, créant des ponts entre digital et performance live.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee effect */}
        <div className="mt-40 border-y border-white/5 py-10 opacity-20">
          <div className="flex whitespace-nowrap animate-marquee font-display font-black text-4xl sm:text-6xl text-white uppercase">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="mx-10 italic">
                Rennes Underground <span className="text-outline">Experimental Arts</span> Digital Chaos
              </span>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-40 text-center space-y-12">
          <h2 className="text-4xl sm:text-7xl font-display font-black text-white uppercase leading-none">
            Vous faites partie<br />du <span className="text-infrared-hot">spectre</span> ?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <Link to="/artists" className="btn-premium px-12">Voir les membres</Link>
            <button className="btn-premium px-12 bg-white text-black border-white hover:bg-transparent hover:text-white transition-all">Rejoindre</button>
          </div>
        </div>

      </div>

      {/* Decorative vertical line */}
      <div className="absolute left-1/2 bottom-0 w-[1px] h-40 bg-gradient-to-t from-white/20 to-transparent transform -translate-x-1/2 opacity-30"></div>
    </div>
  );
};

export default About;
