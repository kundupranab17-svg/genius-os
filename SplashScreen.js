import { motion } from 'framer-motion';

export default function SplashScreen() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-black overflow-hidden">
      <motion.div 
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex items-center space-x-6"
      >
        {/* The Premium SVG Logo */}
        <motion.div 
          animate={{ x: -100 }} 
          transition={{ delay: 2, duration: 1 }}
          className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-700 rounded-2xl shadow-neon"
        />
        
        {/* The Name Reveal */}
        <motion.h1 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="text-6xl font-black tracking-tighter text-white"
        >
          GENIUS OS
        </motion.h1>
      </motion.div>
    </div>
  );
}
