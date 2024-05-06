import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        '1440px': { max: '1440px' },
        '1248px': { max: '1248px' },
        '1104px': { max: '1104px' },
        '1049px': { max: '1049px' },
        '996px': { max: '996px' },
        '612px': { max: '612px' },
      },
      backgroundColor: {
        primary: '#000',
        'primary-hover': '#825526',
        secondary: '#F5EEE8',
        black: '#000',
      },
      textColor: {
        black: '#000', // replace with your text color
        white: '#fff',
      },
      borderColor: {
        primary: '#A36A2F', // replace with your border color
        'primary-hover': '#1c64b3', // replace with your border hover color
      },
      borderWidth: {
        primary: '1px',
      },
      fontSize: {
        primary: '14px',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
