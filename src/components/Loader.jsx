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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]">
      <div className="light-leak leak-1 opacity-20" />
      <div className="light-leak leak-2 opacity-20" />
      
      <div className="relative z-10 text-center space-y-12 px-4">
        <div className="relative overflow-hidden">
          <div className="text-6xl md:text-9xl font-display font-black tracking-tighter reveal-text">
            <span className="text-white">INFRA</span>
            <span className="text-outline">ROUGE</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="w-48 md:w-64 mx-auto h-[1px] bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="font-mono text-[8px] md:text-[10px] text-gray-500 tracking-[0.5em] uppercase">
            Initialisation {progress}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
