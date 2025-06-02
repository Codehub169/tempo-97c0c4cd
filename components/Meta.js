import Head from 'next/head';

const Meta = ({ 
  title = 'hueneu | Where stories find their aesthetic.', 
  keywords = 'graphic design, branding, packaging, social media, stationery, coffee table books, creative projects, design studio, storytelling, visual identity, hueneu, hue, neu, poetic design, quiet bold design',
  description = 'hueneu is a graphic design studio where stories find their aesthetic. We craft designs that whisper loud stories, blending creative color bursts with grounding neutrality. Specializing in branding, packaging, and more.'
}) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      {/* <link rel='icon' href='/favicon.ico' /> // Already in _document.js */}
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {/* <meta property="og:url" content="https://www.hueneu.com/" /> Replace with actual URL */}
      {/* <meta property="og:image" content="https://www.hueneu.com/og-image.jpg" /> Replace with actual OG image URL */}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content="https://www.hueneu.com/twitter-image.jpg" /> Replace with actual Twitter image URL */}
      {/* <meta name="twitter:site" content="@hueneu_" /> Replace with actual Twitter handle if needed */}
      
      <title>{title}</title>
    </Head>
  );
};

export default Meta;
