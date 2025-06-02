import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedLogo from './AnimatedLogo'; // Assuming Lottie JSON is in public/animations/
import ScrollIndicator from './ScrollIndicator';

const HeroSection = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center bg-hueneu-light-neutral text-hueneu-neutral-dark p-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-hueneu-green opacity-10 z-0"></div> 
      {/* Subtle background pattern or texture if desired - kept simple for now */}

      <motion.div 
        className="z-10 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="w-48 h-48 md:w-64 md:h-64 mb-6">
          <AnimatedLogo animationPath="/animations/hueneu-logo-reveal.json" />
        </div>
        
        <motion.h1 
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-hueneu-green to-hueneu-deep-green bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          hueneu
        </motion.h1>

        <motion.p 
          className="font-display text-xl sm:text-2xl md:text-3xl text-hueneu-warm-accent mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Where stories find their aesthetic.
        </motion.p>

        <motion.p 
          className="text-md sm:text-lg md:text-xl text-hueneu-neutral-dark max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          Designs that whisper loud stories.
        </motion.p>
      </motion.div>

      <AnimatePresence>
        {showScrollIndicator && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          >
            <ScrollIndicator />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
