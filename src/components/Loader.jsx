import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-infrared-darker">
      <div className="grain-overlay" />
      
      <div className="relative z-10 text-center space-y-8 px-4">
        <div className="relative">
          <div className="text-6xl md:text-8xl font-bold tracking-tighter">
            <span className="text-gradient glow-text">INFRAROUGE</span>
          </div>
          
          <div className="absolute -inset-4 bg-thermal-radial opacity-20 blur-3xl animate-pulse-glow" />
        </div>

        <div className="w-64 md:w-96 mx-auto h-1 bg-infrared-purple/30 rounded-full overflow-hidden">
          <div 
            className="h-full bg-thermal-gradient transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="font-mono text-xs md:text-sm text-infrared-hot tracking-widest">
          {progress}% CHARGEMENT
        </div>

        <div className="flex justify-center gap-2 mt-4">
          <div className="w-2 h-2 bg-infrared-orange rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
          <div className="w-2 h-2 bg-infrared-hot rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 bg-infrared-magenta rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </div>
  );
};

export default Loader;
