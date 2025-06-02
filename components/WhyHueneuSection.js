import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhyHueneuSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3, // Trigger animation when 30% of the section is visible
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="py-20 md:py-32 bg-hueneu-neutral-light text-hueneu-neutral-dark text-center"
    >
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.h2 
          variants={itemVariants} 
          className="text-4xl md:text-5xl font-display font-bold mb-8 text-hueneu-primary"
        >
          Why hueneu?
        </motion.h2>
        
        <motion.p 
          variants={itemVariants} 
          className="text-xl md:text-2xl font-sans mb-6 leading-relaxed text-hueneu-neutral-medium"
        >
          We don&apos;t just design—<span className="text-hueneu-accent">we decode stories.</span>
        </motion.p>
        
        <motion.p 
          variants={itemVariants} 
          className="text-lg md:text-xl font-sans mb-12 leading-relaxed"
        >
          Designs that speak quietly but stay with you. We believe in the calm of understanding, the mystery of unfolding narratives, and the perfect balance that makes a design resonate deeply. It&apos;s not just about aesthetics; it&apos;s about feeling.
        </motion.p>

        <motion.div variants={itemVariants}>
          <p className="font-display text-2xl md:text-3xl text-hueneu-primary italic">
            Let us find the hue in your neu.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyHueneuSection;
