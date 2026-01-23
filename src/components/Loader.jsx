import { useState, useEffect } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('INFRAROUGE');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Progression du chargement
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsReady(true);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Animation du texte
    const textSequence = [
      'INFRAROUGE',
      'LOADING EXPERIENCE',
      'MAGAZINE CULTUREL',
      'ARTISTES ÉMERGENTS',
      'READY'
    ];
    
    let textIndex = 0;
    const textInterval = setInterval(() => {
      textIndex = (textIndex + 1) % textSequence.length;
      setLoadingText(textSequence[textIndex]);
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black overflow-hidden">
      {/* Grille de fond animée */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(0deg, transparent 24%, rgba(124, 58, 237, 0.3) 25%, rgba(124, 58, 237, 0.3) 26%, transparent 27%, transparent 74%, rgba(124, 58, 237, 0.3) 75%, rgba(124, 58, 237, 0.3) 76%, transparent 77%, transparent),
                 linear-gradient(90deg, transparent 24%, rgba(124, 58, 237, 0.3) 25%, rgba(124, 58, 237, 0.3) 26%, transparent 27%, transparent 74%, rgba(124, 58, 237, 0.3) 75%, rgba(124, 58, 237, 0.3) 76%, transparent 77%, transparent)
               `,
               backgroundSize: '50px 50px',
               animation: 'gridMove 20s linear infinite'
             }}>
        </div>
      </div>

      {/* Cercles animés en fond */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Contenu principal */}
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        {/* Logo INFRAROUGE avec effet glitch */}
        <div className="relative mb-12">
          <h1 className={`text-6xl md:text-8xl font-bold tracking-wider text-white transition-all duration-500 ${isReady ? 'scale-110' : 'scale-100'}`}
              style={{
                textShadow: `
                  0 0 10px rgba(124, 58, 237, 0.8),
                  0 0 20px rgba(124, 58, 237, 0.6),
                  0 0 30px rgba(124, 58, 237, 0.4),
                  2px 2px 0px rgba(139, 92, 246, 0.5),
                  -2px -2px 0px rgba(168, 85, 247, 0.5)
                `,
                animation: isReady ? 'none' : 'glitch 3s infinite'
              }}>
            INFRAROUGE
          </h1>
          
          {/* Ligne décorative */}
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent mt-4"></div>
        </div>

        {/* Texte de chargement animé */}
        <div className="mb-8 h-8">
          <p className="text-xl md:text-2xl text-violet-400 font-light tracking-widest animate-pulse">
            {loadingText}
          </p>
        </div>

        {/* Barre de progression */}
        <div className="w-full max-w-md">
          {/* Container de la barre */}
          <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden border border-violet-900/30">
            {/* Barre de progression */}
            <div 
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-violet-600 via-purple-500 to-violet-600 rounded-full transition-all duration-300 ease-out"
              style={{ 
                width: `${progress}%`,
                boxShadow: '0 0 20px rgba(124, 58, 237, 0.8), 0 0 40px rgba(124, 58, 237, 0.4)'
              }}>
              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>
          
          {/* Pourcentage */}
          <div className="mt-4 text-center">
            <span className="text-violet-400 font-mono text-lg">{progress}%</span>
          </div>
        </div>

        {/* Message de chargement */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm tracking-wide">
            {progress < 30 && "Initialisation du magazine..."}
            {progress >= 30 && progress < 60 && "Chargement des artistes..."}
            {progress >= 60 && progress < 90 && "Préparation de l'expérience..."}
            {progress >= 90 && progress < 100 && "Finalisation..."}
            {progress === 100 && "Bienvenue dans INFRAROUGE"}
          </p>
        </div>

        {/* Indicateur de scroll (apparaît à la fin) */}
        {isReady && (
          <div className="absolute bottom-8 animate-bounce">
            <div className="w-6 h-10 border-2 border-violet-500 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-violet-500 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes glitch {
          0%, 100% {
            text-shadow: 
              0 0 10px rgba(124, 58, 237, 0.8),
              0 0 20px rgba(124, 58, 237, 0.6),
              0 0 30px rgba(124, 58, 237, 0.4),
              2px 2px 0px rgba(139, 92, 246, 0.5),
              -2px -2px 0px rgba(168, 85, 247, 0.5);
          }
          25% {
            text-shadow: 
              0 0 10px rgba(124, 58, 237, 0.8),
              0 0 20px rgba(124, 58, 237, 0.6),
              0 0 30px rgba(124, 58, 237, 0.4),
              -2px -2px 0px rgba(139, 92, 246, 0.5),
              2px 2px 0px rgba(168, 85, 247, 0.5);
          }
          50% {
            text-shadow: 
              0 0 10px rgba(124, 58, 237, 0.8),
              0 0 20px rgba(124, 58, 237, 0.6),
              0 0 30px rgba(124, 58, 237, 0.4),
              2px -2px 0px rgba(139, 92, 246, 0.5),
              -2px 2px 0px rgba(168, 85, 247, 0.5);
          }
          75% {
            text-shadow: 
              0 0 10px rgba(124, 58, 237, 0.8),
              0 0 20px rgba(124, 58, 237, 0.6),
              0 0 30px rgba(124, 58, 237, 0.4),
              -2px 2px 0px rgba(139, 92, 246, 0.5),
              2px -2px 0px rgba(168, 85, 247, 0.5);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;