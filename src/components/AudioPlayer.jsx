import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  const currentTrack = {
    title: 'Neon Frequencies',
    artist: 'Luna Chaos',
    duration: 245, // en secondes
  };

  // Simulation de progression
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + (100 / currentTrack.duration);
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentTime = Math.floor((progress / 100) * currentTrack.duration);
  const remainingTime = currentTrack.duration - currentTime;

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50 bg-infra-black/95 backdrop-blur-lg border-t border-infra-violet/30"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 1.5 }}
    >
      {/* Barre de progression */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-infra-black/50">
        <motion.div
          className="h-full bg-gradient-to-r from-infra-violet to-infra-yellow relative"
          style={{ width: `${progress}%` }}
          initial={{ width: 0 }}
        >
          {/* Point interactif */}
          <motion.div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-infra-yellow rounded-full shadow-lg shadow-infra-yellow/50"
            whileHover={{ scale: 1.5 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0}
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Infos du morceau */}
          <div className="flex-1 min-w-0">
            <motion.div
              className="overflow-hidden"
              animate={{ x: isPlaying ? [0, -100, 0] : 0 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            >
              <h4 className="text-infra-white font-body font-bold text-sm truncate">
                {currentTrack.title}
              </h4>
            </motion.div>
            <p className="text-infra-white/60 font-body text-xs truncate">
              {currentTrack.artist}
            </p>
          </div>

          {/* Contrôles centraux */}
          <div className="flex items-center space-x-4">
            <motion.button
              className="text-infra-white/60 hover:text-infra-yellow transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setProgress(0)}
            >
              <SkipBack size={20} />
            </motion.button>

            <motion.button
              className="w-10 h-10 rounded-full bg-infra-yellow flex items-center justify-center text-infra-black hover:bg-infra-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <AnimatePresence mode="wait">
                {isPlaying ? (
                  <motion.div
                    key="pause"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Pause size={20} fill="currentColor" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="play"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Play size={20} fill="currentColor" className="ml-0.5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <motion.button
              className="text-infra-white/60 hover:text-infra-yellow transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setProgress(100)}
            >
              <SkipForward size={20} />
            </motion.button>
          </div>

          {/* Volume & Timer */}
          <div className="flex items-center space-x-4 flex-1 justify-end">
            <div className="hidden sm:flex items-center space-x-2 text-infra-white/60 font-body text-xs">
              <span>{formatTime(currentTime)}</span>
              <span>/</span>
              <span>{formatTime(remainingTime)}</span>
            </div>

            <motion.button
              className="text-infra-white/60 hover:text-infra-yellow transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </motion.button>

            {/* Barre de volume (desktop only) */}
            <div className="hidden md:block w-20 h-1 bg-infra-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-infra-yellow"
                initial={{ width: '70%' }}
                animate={{ width: isMuted ? '0%' : '70%' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Visualiseur d'ondes sonores */}
      {isPlaying && (
        <div className="absolute bottom-full left-0 right-0 flex items-end justify-center space-x-1 h-16 px-4 pb-2">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 bg-infra-violet/30 rounded-t"
              animate={{
                height: ['10%', `${Math.random() * 80 + 20}%`, '10%'],
              }}
              transition={{
                duration: 0.5 + Math.random() * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.05,
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default AudioPlayer;
