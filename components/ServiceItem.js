import Image from 'next/image';
import { motion } from 'framer-motion';

// Removed index from props as parent's staggerChildren handles delay
const ServiceItem = ({ icon, title, description }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        // delay: index * 0.2, // Removed: Parent's staggerChildren manages this
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      // initial and animate props are inherited from the parent motion component
      className="bg-hueneu-light-neutral p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center h-full"
    >
      <div className="relative w-16 h-16 mb-4">
        <Image src={icon} alt={`${title} icon`} layout="fill" objectFit="contain" />
      </div>
      <h3 className="text-xl font-display font-bold text-hueneu-neutral-dark mb-2">{title}</h3>
      <p className="text-hueneu-neutral-medium text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default ServiceItem;
