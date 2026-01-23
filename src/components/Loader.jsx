import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-dark-bg z-50 flex items-center justify-center overflow-hidden">
      {/* Background animated gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full filter blur-3xl animate-pulse-slow animation-delay-200"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo INFRAROUGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold gradient-text text-shadow-glow">
            INFRAROUGE
          </h1>
          
          {/* Underline animé */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="h-1 bg-gradient-premium origin-left mt-4"
          />
        </motion.div>

        {/* Spinner premium */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative"
        >
          <div className="spinner-premium"></div>
          <div className="absolute inset-0 spinner-premium opacity-50 blur-md"></div>
        </motion.div>

        {/* Texte de chargement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-gray-400 text-sm tracking-widest uppercase font-medium"
        >
          Chargement de l'expérience
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;
