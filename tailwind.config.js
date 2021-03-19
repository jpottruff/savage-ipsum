module.exports = {
  purge: [
    './src/views/**/*.handlebars',
    './public/js/*.js', // for dynamically set classes
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'swell-single': 'ping 3s cubic-bezier(0, 0, 0.2, 1) 1',
      },
      fontFamily: {
        marker: ['Permanent Marker', 'cursive'],
        'sans-alt': ['montserrat', 'sans-serif'],
      },
      height: {
        '32px': '32px',
        '36px': '36px',
        '75px': '75px',
        '125px': '125px',
      },
      width: {
        '32px': '32px',
        '36px': '36px',
        '75px': '75px',
        '125px': '125px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
