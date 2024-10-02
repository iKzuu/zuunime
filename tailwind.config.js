/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          primary: '#EEEEEE',
          grey: '#686D76',
          darkgrey: '#373A40',
          blueform: '#3559E0'
        }
      },
    },
  },
  plugins: [],
};
