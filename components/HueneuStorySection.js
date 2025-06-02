import { motion } from 'framer-motion';
import Image from 'next/image';

const HueneuStorySection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const whoKnewVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: 'spring', stiffness: 100, damping: 10, delay: 0.5 },
    },
  };

  return (
    <motion.section
      id="story"
      className="min-h-screen py-20 px-6 md:px-12 lg:px-24 bg-secondary flex flex-col items-center justify-center text-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 
        className="text-4xl md:text-5xl font-display text-primary mb-8"
        variants={itemVariants}
      >
        The hueneu Story
      </motion.h2>
      
      <motion.div className="max-w-3xl space-y-8 text-neutral-darkest leading-relaxed text-lg md:text-xl">
        <motion.p variants={itemVariants}>
          At hueneu, we believe in the quiet power of story. <span className="font-bold text-accent">Hue</span> represents the vibrant bursts of creativity, the unexpected color that brings a narrative to life. <span className="font-bold text-primary">Neu</span> embodies the grounding neutrality, the calm space where ideas take root and breathe.
        </motion.p>
        <motion.p variants={itemVariants}>
          It's a delicate balance – the art of being <strong className='font-semibold'>quiet but bold</strong>, <strong className='font-semibold'>calm yet playful</strong>. We craft designs that whisper, yet resonate deeply, creating experiences that feel both familiar and wonderfully new.
        </motion.p>
      </motion.div>

      <motion.div 
        className="mt-16 md:mt-24 flex flex-col items-center"
        variants={itemVariants} // General container animation
      >
        <motion.div 
          className="relative p-4 bg-white shadow-xl rounded-lg transform transition-transform duration-500 hover:scale-105"
          variants={whoKnewVariants} // Specific animation for this element
          initial="hidden" // Re-initial for independent animation trigger
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Trigger when this element is in view
        >
          <Image 
            src="/images/who-knew-visual.svg" 
            alt="Who Knew? Playful visual element" 
            width={200} 
            height={150} 
            className="object-contain"
          />
          <span className="absolute -bottom-4 -right-4 bg-accent text-white text-sm font-bold py-1 px-3 rounded-full shadow-md transform rotate-6">
            Who Knew?
          </span>
        </motion.div>
        <motion.p 
          className="mt-6 text-neutral-dark text-md md:text-lg italic"
          variants={itemVariants}
        >
          ...that quiet could be so captivating?
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default HueneuStorySection;
