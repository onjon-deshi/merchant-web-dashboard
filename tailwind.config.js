/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'img': "url('./assets/images/image.png')"
      },
      colors: {
        'primary': '#00c52a',
        'secondary': '#444444',
        'brand-dark': '#00A323',
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
