/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          mint: '#9ed8d0',
          navy: '#05334f',
          white: '#fff',
        },
        secondary: {
          lime: '#d6e043',
          teal: '#41817a',
          tealLight: '#6da69a',
          gray: '#c7c8ca',
        },
        red: '#d9534f',
        status: {
          gray: '#D3D3D3',
          maroon: '#8B0000',
          blue: '#87CEEB',
          green: '#228B22',
        },
      },
    },
  },
  plugins: [],
}


