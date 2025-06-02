import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { FiArrowDown } from 'react-icons/fi';

const ScrollIndicator = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        controls.start({ opacity: 0, y: 20 });
      } else {
        controls.start({ opacity: 1, y: 0 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <motion.div
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-primary group"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        animate={controls}
        transition={{ duration: 0.3 }}
      >
        <motion.span
          className="text-xs font-sans tracking-wider mb-2 text-neutral-dark group-hover:text-accent transition-colors duration-300"
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
          <FiArrowDown className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
