import React, { useState, useEffect } from 'react';
import LogoAnimated from './LogoAnimated';

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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
      <div className="light-leak leak-1 opacity-20" />
      <div className="light-leak leak-2 opacity-20" />

      <div className="relative z-10 text-center space-y-12 px-4 flex flex-col items-center">
        <LogoAnimated className="h-24 md:h-40" />

        <div className="space-y-4">
          <div className="w-48 md:w-64 mx-auto h-[1px] bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full transition-all duration-300 ease-out"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #FF1100, #FFE500)'
              }}
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
