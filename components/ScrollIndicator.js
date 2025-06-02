import { motion } from 'framer-motion';
// Removed useEffect and useAnimation as parent HeroSection controls visibility via AnimatePresence
import { FiArrowDown } from 'react-icons/fi';

const ScrollIndicator = () => {
  // The parent HeroSection component wraps this in a motion.div
  // which is absolutely positioned and handles the main entry/exit animations.
  // This component's root motion.div is for its own delayed appearance after the parent wrapper is visible.
  return (
    <motion.div
      className="flex flex-col items-center text-hueneu-green group" // Removed absolute positioning classes
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5 }} // This delay is for the indicator's content to appear
      // exit prop removed as HeroSection's AnimatePresence and wrapper div handle exit animation
    >
      <motion.span
        className="text-xs font-sans tracking-wider mb-2 text-hueneu-neutral-dark group-hover:text-hueneu-warm-accent transition-colors duration-300"
      >
        discover
      </motion.span>
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        <FiArrowDown className="w-6 h-6 text-hueneu-green group-hover:text-hueneu-warm-accent transition-colors duration-300" />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
