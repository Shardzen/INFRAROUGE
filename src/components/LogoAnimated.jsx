import React from 'react';

/**
 * Logo animé CSS — fallback léger pour le déploiement.
 * Si le fichier /infrarouge.mp4 est disponible (local),
 * il sera préféré via le composant Navbar.
 */
const LogoAnimated = ({ className = 'h-10 sm:h-12' }) => {
  return (
    <div className={`${className} flex items-center`} style={{ aspectRatio: '1 / 1' }}>
      <svg
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <radialGradient id="core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE500">
              <animate attributeName="stopColor" values="#FFE500;#FF1100;#003CFF;#FFE500" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="60%" stopColor="#FF1100">
              <animate attributeName="stopColor" values="#FF1100;#003CFF;#FFE500;#FF1100" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF1100" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer glow */}
        <circle cx="30" cy="30" r="28" fill="url(#glow)" opacity="0.4">
          <animate attributeName="r" values="28;32;28" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.2;0.4" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* Main orb */}
        <circle cx="30" cy="30" r="20" fill="url(#core)">
          <animate attributeName="r" values="20;22;20" dur="1.8s" repeatCount="indefinite" />
        </circle>

        {/* Inner highlight */}
        <circle cx="24" cy="24" r="6" fill="white" opacity="0.15">
          <animate attributeName="opacity" values="0.15;0.05;0.15" dur="2.5s" repeatCount="indefinite" />
        </circle>

        {/* Rotating ring */}
        <circle cx="30" cy="30" r="26" stroke="#FF1100" strokeWidth="0.5" strokeOpacity="0.4" fill="none"
          strokeDasharray="10 5">
          <animateTransform attributeName="transform" type="rotate" from="0 30 30" to="360 30 30" dur="8s" repeatCount="indefinite" />
        </circle>
        <circle cx="30" cy="30" r="22" stroke="#003CFF" strokeWidth="0.5" strokeOpacity="0.3" fill="none"
          strokeDasharray="6 8">
          <animateTransform attributeName="transform" type="rotate" from="360 30 30" to="0 30 30" dur="6s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
};

export default LogoAnimated;
