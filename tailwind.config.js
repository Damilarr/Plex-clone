/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
],
  theme: {
    extend: {
      colors:{
        navInp:"#242424",
        faq:"#2d2d2d",
        bodyCol:"#454545",
        col:"#1c220e",
        overlay:"rgba(0, 0, 0, 0.6)",
        grad:"#1b1b1b"
      },
      backgroundImage:{
        heroBg:"/assets/Image/photo.avif"
      }
    },
  },
  plugins: [],
}
