/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: [
    "./src/index.css",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F2937',
        secondary: '#544C4A',
        background: '#222021',
        text: '#E5E7EB',
        hover: '#B9BBB6',
        darkBackground: '#000000',
        darkText: '#E5E7EB',
      }
    },
  },
  plugins: [],
};

