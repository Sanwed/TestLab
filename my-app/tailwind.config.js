/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '320px',
      xs: '375px',
      md: '768px',
      lg: '1296px',
    },
    extend: {
      colors: {
        'black': '#191c1f',
        'dark-gray': '#5e646a',
        'gray': '#83898f',
        'mid-gray': '#c2c8cd',
        'light-gray': '#eceff2',
        'extra-light-gray': '#f6f8fa',
        'white': '#fff',
        'success': '#25cd82',
        'error': '#f13636',
        'disabled': '#abcae6',
        'primary': '#2a6cea',
        'hover': '#397dff',
      },
      fontSize: {
        '3xl': '52px',
        '2xl': '40px',
        'xl': '32px',
        'lg': '18px',
        'base': '16px',
        'sm': '14px',
        'xs': '12px',
      },
      fontFamily: {
        'sans': ['Graphik', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'banner-desktop': 'url(\'./assets/images/banner-desktop.png\')',
        'banner-tablet': 'url(\'./assets/images/banner-tablet.png\')',
      },
      maxWidth: {
        'container': '1296px',
      },
      boxShadow: {
        'base': '0 5px 24px 0 rgba(0, 0, 0, 0.1)',
        'hov': '0 15px 24px 0 rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};

