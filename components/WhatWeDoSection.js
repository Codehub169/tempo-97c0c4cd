import { motion } from 'framer-motion';
import ServiceItem from './ServiceItem'; // Assuming ServiceItem will be created

const services = [
  { 
    icon: '/icons/icon-branding.svg', 
    title: 'Branding',
    description: 'Crafting identities that tell your unique story.'
  },
  { 
    icon: '/icons/icon-packaging.svg', 
    title: 'Packaging',
    description: 'Designs that make your products feel like gifts.'
  },
  { 
    icon: '/icons/icon-social-media.svg', 
    title: 'Social Media',
    description: 'Curating digital narratives that connect and charm.'
  },
  { 
    icon: '/icons/icon-stationery.svg', 
    title: 'Stationery',
    description: 'Tangible touches that leave a lasting impression.'
  },
  { 
    icon: '/icons/icon-coffee-table-books.svg', 
    title: 'Coffee Table Books',
    description: 'Beautifully bound stories, designed to be treasured.'
  },
  { 
    icon: '/icons/icon-creative-projects.svg', 
    title: 'Creative Projects',
    description: 'Unique collaborations for those “what if” ideas.'
  },
];

const WhatWeDoSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  return (
    <motion.section
      id="services"
      className="min-h-screen py-20 px-6 md:px-12 lg:px-24 bg-primary text-secondary flex flex-col items-center justify-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 
        className="text-4xl md:text-5xl font-display mb-16 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        What We Do
      </motion.h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 w-full max-w-5xl">
        {services.map((service, index) => (
          <ServiceItem 
            key={index} 
            icon={service.icon} 
            title={service.title} 
            description={service.description} 
          />
        ))}
      </div>
    </motion.section>
  );
};

export default WhatWeDoSection;
