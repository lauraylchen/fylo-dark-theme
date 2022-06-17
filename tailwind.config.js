/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'darkBlue': '#1C2431',
        'darkBlueMain': '#181F2A',
        'darkBlueFooter': '#0B1523',
        'darkBlueComment': '#202A3C',
        'cyan': '#65E2D9',
        'blue': '#339ECC',
        'lightRed': '#FF4242',
        'white': '#FFFFFF',
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif']
      },
    },
  },
  plugins: [],
}
