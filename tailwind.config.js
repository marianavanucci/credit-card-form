/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      backgroundImage: {
        'bg-main-mobile': "url('/images/bg-main-mobile.png')",
      },

      colors: {
        'brand': {
          100: '#dedddf',
          200: '#8e8593',
          300: '#21092f',
        }
      },
      width: {
        '95': '20.833rem',
        '360': '80rem',
      }

    

    },
  },
  plugins: [],
}