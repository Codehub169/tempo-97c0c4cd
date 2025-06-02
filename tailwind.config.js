/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        hueneu: {
          green: '#A3B18A',        // Primary
          'light-neutral': '#DAD7CD', // Secondary
          'warm-accent': '#D4A373',   // Accent
          cream: '#FEFAE0',
          'dark-green': '#588157',
          'deep-green': '#3A5A40',
        },
        status: {
          success: '#84A98C',
          warning: '#FBC02D',
          error: '#D32F2F',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      borderRadius: {
        soft: '4px',
        medium: '8px',
      },
    },
  },
  plugins: [],
};
