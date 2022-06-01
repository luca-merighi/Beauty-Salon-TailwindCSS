module.exports = {
  content: ['./src/*.{html,js}'],
  theme: {
    extend: {
      height: {
        'divider': '2px'
      },
      width: {
        'card': '23rem'
      },
      boxShadow: {
        'default': '0px 0px 12px rgba(0, 0, 0, 0.25)',
        'sidebar': '-100px 50px 200px rgb(0, 0, 0, 0.5)'
      }
    },
  },
  plugins: [],
}
