import Head from 'next/head';
import Meta from '../components/Meta';
import HeroSection from '../components/HeroSection';
import HueneuStorySection from '../components/HueneuStorySection';
import WhatWeDoSection from '../components/WhatWeDoSection';
import WhyHueneuSection from '../components/WhyHueneuSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <>
      <Meta />
      <div className="bg-hueneu-light-neutral text-hueneu-neutral-dark font-sans antialiased overflow-x-hidden">
        <HeroSection />
        <HueneuStorySection />
        <WhatWeDoSection />
        <WhyHueneuSection />
        <ContactSection />

        {/* Footer - can be a simple div or a new component */}
        <footer className="bg-hueneu-soft-blue text-hueneu-light-neutral py-12 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} hueneu. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            <a href="https://www.instagram.com/hueneu_/" target="_blank" rel="noopener noreferrer" className="hover:text-hueneu-warm-accent transition-colors">
              @hueneu_
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}
