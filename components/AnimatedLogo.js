import Lottie from 'lottie-react';
import animationData from '../public/animations/hueneu-logo-reveal.json';

const AnimatedLogo = ({ className }) => {
  return (
    <div className={`w-48 h-48 md:w-64 md:h-64 ${className || ''}`}>
      <Lottie animationData={animationData} loop={false} autoplay={true} />
    </div>
  );
};

export default AnimatedLogo;
