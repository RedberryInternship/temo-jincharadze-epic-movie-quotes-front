module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      md: '850px',
      mg: '950px',
      ml: '1100px',
      lg: '1250px',
      xm: '1600px',
      xl: '1700px',
    },
    extend: {
      fontFamily: {
        'Helvetica-Neue': 'Helvetica-Neue-Geo',
      },
      height: {
        s: '2px',
      },
      borderRadius: {
        s: '4px',
      },
      fontSize: {
        s: '8px',
        5.5: '50px',
        3.5: '32px',
        47: '47px',
      },
      colors: {
        'custom-white': '#FFFFFF',
        'custom-orange-200': '#DDCCAA',
        'custom-red-600': '#E31221',
        'custom-red-500': '#DC3545',
        'custom-zinc-300': '#D9D9D9',
        'custom-zinc-800': '#222030',
        'blur-bg': 'rgba(0, 0, 0, 0.54)',
        'custom-gray-300': '#CED4DA',
        'custom-zinc-600': '#54535A',
        'zinc-800': '#24222F',
        'custom-gray-500': '#6C757D',
        'custom-blue-600': '#0D6EFD',
        'custom-green-700': '#198754',
        'custom-red-600': '#E33812',
        'custom-red-700': '#CC0E10',
        'custom-neutral-900': '#11101A',
        'neutral-900': '#12101A',
        'custom-rose-500': '#EC4C57',
        'file-color': 'rgba(151, 71, 255, 0.4)',
        'header-rgba': 'rgba(34, 32, 48)',
        'dashboard-color': '#181623',
        'panel-color': 'rgba(17, 16, 26, 1)',
        'search-border': 'rgba(239, 239, 239, 0.3)',
        'movie-border': 'rgba(239, 239, 239, 0.2)',
        'mobile-search': 'rgba(239, 239, 239, 0.6)        ',
      },
      backgroundImage: {
        'starting-gradient':
          'linear-gradient(180deg, #000000 55%, rgba(0, 0, 0, 0) 95.21%, rgba(0, 0, 0, 0) 100%)',
        'movies-gradient':
          'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 55.21%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 55.21%, rgba(0, 0, 0, 0) 100%)',
        'top-gradient':
          'linear-gradient(187.16deg, #181623 0.07%, #191725 51.65%, #0D0B14 98.75%)',
        'footer-gradient':
          'linear-gradient(#181623 0,07%, #191725 50.66%, #0D0B14 96.88%)',
        interstellar: "url('/assets/images/interstellar.png')",
        lord: "url('/assets/images/lord.png')",
        royal: "url('/assets/images/royal.png')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animation-delay'),
  ],
};
