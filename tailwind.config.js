module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary-xxl': 'hsla(228, 82%, 70%, 0.6)',
      'primary-xl': 'hsla(228, 63%, 52%, 0.9)',
      'primary-ml': 'hsla(228, 73%, 49%, 0.8)',
      'primary': 'hsla(228, 83%, 40%, 0.87)',
      'white': 'hsla(360, 100%, 100%, 1)',
      'gray-l': "hsl(0,0%,90%)",
      'gray-ml': "hsl(0,0%,70%)",
      'gray': 'hsl(0, 0%, 60%)',
      'gray-md': 'hsl(0, 0%, 40%)',
      'gray-xd': 'hsl(0, 0%, 30%)',
      'error': "hsla(0, 77%, 54%, 0.9)",
      'btnText-primary': "hsla(360, 100%, 100%, 1)"
    },
    extend: {
      padding: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
        'xlg': '32px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
