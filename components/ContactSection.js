import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiInstagram, FiSend } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('Message sent! We\'ll be in touch.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const errorData = await response.json();
        setStatus(errorData.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of the section is visible
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };
  
  const inputClass = "w-full p-3 bg-hueneu-neutral-light border border-hueneu-primary/30 rounded-md focus:ring-2 focus:ring-hueneu-accent focus:border-hueneu-accent outline-none placeholder-hueneu-neutral-medium/70 text-hueneu-neutral-dark transition-colors duration-300 font-sans";

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      id="contact"
      className="py-20 md:py-32 bg-hueneu-primary"
    >
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.h2 
          variants={{ hidden: { opacity: 0, y:20 }, visible: { opacity:1, y:0, transition: {delay: 0.2, duration: 0.5}}}}
          className="text-4xl md:text-5xl font-display font-bold text-center mb-6 text-hueneu-secondary"
        >
          Let&apos;s Work Together
        </motion.h2>
        <motion.p 
          variants={{ hidden: { opacity: 0, y:20 }, visible: { opacity:1, y:0, transition: {delay: 0.4, duration: 0.5}}}}
          className="text-center text-lg text-hueneu-secondary/90 mb-12 font-sans"
        >
          Have a story to tell or a project in mind? Drop us a line.
        </motion.p>

        <motion.form 
          variants={{ hidden: { opacity: 0, scale:0.95 }, visible: { opacity:1, scale:1, transition: {delay: 0.6, duration: 0.5}}}}
          onSubmit={handleSubmit} 
          className="bg-hueneu-secondary p-8 md:p-12 rounded-lg shadow-xl space-y-6 transform transition-all duration-500 hover:scale-[1.01]"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-hueneu-neutral-dark mb-1 font-sans">Your Name</label>
            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="What should we call you?" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-hueneu-neutral-dark mb-1 font-sans">Your Email</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="Where can we reach you?" />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-hueneu-neutral-dark mb-1 font-sans">Subject</label>
            <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required className={inputClass} placeholder="A brief idea of your story" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-hueneu-neutral-dark mb-1 font-sans">Your Message</label>
            <textarea name="message" id="message" value={formData.message} onChange={handleChange} rows="5" required className={`${inputClass} min-h-[120px]`} placeholder="Tell us more about your project or idea..."></textarea>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, backgroundColor: '#C08A5F' /* Darker Accent from plan: #D4A373 */ }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-hueneu-accent text-white font-bold py-3 px-6 rounded-md flex items-center justify-center space-x-2 transition-colors duration-300 text-lg hover:shadow-lg font-sans"
          >
            <FiSend />
            <span>Let&apos;s Design Your Story</span>
          </motion.button>
        </motion.form>

        {status && (
          <p className={`mt-6 text-center text-sm p-3 rounded-md ${status.includes('sent') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} font-sans`}>
            {status}
          </p>
        )}

        <motion.div 
          variants={{ hidden: { opacity: 0 }, visible: { opacity:1, transition: {delay: 0.8, duration: 0.5}}}}
          className="text-center mt-12"
        >
          <p className="text-hueneu-secondary/80 mb-2 font-sans">Connect with us on Instagram:</p>
          <a 
            href="https://instagram.com/hueneu_" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-hueneu-accent hover:text-white font-display text-xl transition-colors duration-300 group"
          >
            <FiInstagram className="mr-2 group-hover:scale-110 transition-transform"/> @hueneu_
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
