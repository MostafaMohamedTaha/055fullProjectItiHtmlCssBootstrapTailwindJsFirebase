/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  darkMode:"class",
  theme: {
    screens:{
      'xsm':'350px',
      'sm':'640px',
      'md':'840px',
      'lg':'1920px',
    },
  },
  plugins: [require('flowbite/plugin')],
}
