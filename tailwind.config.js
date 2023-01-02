module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      md: '850px',
      lg: '1250px',
    },
    extend: {
      fontFamily: {
        'Helvetica-Neue': 'Helvetica-Neue',
        'Helvetica-Neue-Geo': 'Helvetica-Neue-Geo',
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
      },
      colors: {
        'custom-orange-200': '#DDCCAA',
        'custom-red-600': '#E31221',
        'custom-red-500': '#DC3545',
        'custom-zinc-300': '#D9D9D9',
        'custom-zinc-800': '#222030',
        'blur-bg': 'rgba(0, 0, 0, 0.54)',
        'custom-gray-300': '#CED4DA',
        'custom-gray-500': '#6C757D',
        'custom-blue-600': '#0D6EFD',
        'custom-green-700': '#198754',
        'custom-red-700': '#CC0E10',
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
