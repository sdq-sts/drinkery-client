/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    fontFamily: {
      sans: ['League Spartan', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#CBB47A',
        'secondary': '#F8F7F5' ,
        'accent': '#EEEBE6',
      }
    }, 
  },
  plugins: [],
};
