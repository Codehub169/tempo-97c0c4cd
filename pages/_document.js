import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Preconnect to font origins - useful if fonts were from Google Fonts, but self-hosted here */}
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> */}
          
          {/* Preload self-hosted fonts */}
          <link
            rel="preload"
            href="/fonts/Montserrat-Regular.woff2" /* Updated from DMSans-Regular.woff2 */
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/PlayfairDisplay-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          {/* Basic Meta Tags */}
          <meta name="description" content="hueneu: Where stories find their aesthetic. Designs that whisper loud stories." />
          <meta name="keywords" content="graphic design, branding, packaging, social media, stationery, creative projects, design studio" />
          
          {/* Favicon links (ensure these files exist in /public) */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          
          {/* Theme color for browser UI */}
          <meta name="theme-color" content="#A3B18A" /> {/* Matches hueneu.green (Primary color) from tailwind.config.js */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
