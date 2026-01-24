import React, { useState, useEffect } from 'react';

const About = () => {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...new Set([...prev, entry.target.id])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.observe-section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      title: 'UNDERGROUND',
      description: 'Cultiver l\'authenticité et l\'indépendance artistique loin des sentiers battus.',
      icon: '◆',
    },
    {
      title: 'INNOVATION',
      description: 'Repousser les limites sonores et visuelles pour créer des expériences uniques.',
      icon: '◇',
    },
    {
      title: 'COMMUNAUTÉ',
      description: 'Rassembler artistes et passionnés autour d\'une culture partagée.',
      icon: '◈',
    },
  ];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <section
          id="intro"
          className="observe-section mb-32 text-center space-y-8"
          style={{
            opacity: visibleSections.includes('intro') ? 1 : 0,
            transform: visibleSections.includes('intro') ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease-out',
          }}
        >
          <div className="relative inline-block">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-gradient">
              À PROPOS
            </h1>
            <div className="absolute -inset-8 bg-thermal-radial opacity-20 blur-3xl animate-pulse-glow" />
          </div>

          <div className="h-1 w-32 bg-thermal-gradient mx-auto rounded-full" />

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            INFRAROUGE est né d'une vision : créer un espace où la musique underground contemporaine 
            peut s'exprimer librement, loin des conventions et des formats standardisés.
          </p>
        </section>

        <section
          id="mission"
          className="observe-section mb-32 relative"
          style={{
            opacity: visibleSections.includes('mission') ? 1 : 0,
            transform: visibleSections.includes('mission') ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease-out 0.2s',
          }}
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-thermal-gradient rounded-full" />
          
          <div className="pl-12 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gradient">
              NOTRE MISSION
            </h2>
            
            <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
              <p>
                Nous sommes une plateforme dédiée à la promotion et à la diffusion de la musique électronique 
                underground et expérimentale. Notre objectif est de connecter les artistes émergents avec un 
                public passionné, de créer des événements immersifs et de cultiver une communauté authentique.
              </p>
              
              <p>
                Dans un monde saturé de contenus formatés, INFRAROUGE se positionne comme un refuge pour 
                l'innovation sonore, l'expérimentation audacieuse et l'expression artistique sans compromis.
              </p>
            </div>
          </div>
        </section>

        <section
          id="values"
          className="observe-section mb-32"
          style={{
            opacity: visibleSections.includes('values') ? 1 : 0,
            transform: visibleSections.includes('values') ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease-out 0.4s',
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-16 text-gradient">
            NOS VALEURS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group relative p-8 border border-infrared-purple/30 rounded-lg hover:border-infrared-hot/50 transition-all duration-500"
                style={{
                  opacity: visibleSections.includes('values') ? 1 : 0,
                  transform: visibleSections.includes('values') ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.8s ease-out ${0.6 + index * 0.2}s`,
                }}
              >
                <div className="absolute inset-0 bg-thermal-radial opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />
                
                <div className="relative z-10 space-y-4">
                  <div className="text-5xl text-infrared-hot group-hover:text-infrared-orange transition-colors duration-300">
                    {value.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold tracking-tight text-gradient font-mono">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-thermal-gradient transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </section>

        <section
          id="vision"
          className="observe-section mb-32 relative"
          style={{
            opacity: visibleSections.includes('vision') ? 1 : 0,
            transform: visibleSections.includes('vision') ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease-out 0.6s',
          }}
        >
          <div className="absolute inset-0 bg-infrared-purple/5 rounded-2xl" />
          
          <div className="relative z-10 p-12 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gradient">
              NOTRE VISION
            </h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
              <p>
                INFRAROUGE aspire à devenir un carrefour incontournable pour la scène underground européenne. 
                Nous imaginons un écosystème où les artistes peuvent expérimenter sans contraintes, où le public 
                découvre des univers sonores inédits, et où chaque événement devient une expérience mémorable.
              </p>
              
              <p>
                Au-delà de la musique, nous cherchons à créer une identité visuelle et culturelle forte, 
                reconnaissable, qui incarne l'esprit de notre époque : sombre, élégante, expérimentale et 
                résolument contemporaine.
              </p>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="observe-section text-center space-y-8"
          style={{
            opacity: visibleSections.includes('contact') ? 1 : 0,
            transform: visibleSections.includes('contact') ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease-out 0.8s',
          }}
        >
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gradient">
              TRAVAILLONS ENSEMBLE
            </h2>
            <div className="absolute -inset-4 bg-thermal-radial opacity-20 blur-3xl animate-pulse-glow" />
          </div>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Artiste, organisateur, passionné ? Contactez-nous pour collaborer, proposer un événement 
            ou simplement échanger autour de la scène underground.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="mailto:contact@infrarouge.fr"
              className="group relative px-8 py-4 bg-thermal-gradient rounded-lg overflow-hidden transition-all duration-300 hover:shadow-glow-strong"
            >
              <span className="relative z-10 font-mono text-sm tracking-widest text-white">
                NOUS CONTACTER
              </span>
            </a>

            <a
              href="#"
              className="group relative px-8 py-4 border border-infrared-purple rounded-lg overflow-hidden hover:border-infrared-orange transition-all duration-300"
            >
              <span className="relative z-10 font-mono text-sm tracking-widest text-gray-300 group-hover:text-infrared-orange transition-colors">
                DEVENIR PARTENAIRE
              </span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
