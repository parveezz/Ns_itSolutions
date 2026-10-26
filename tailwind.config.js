/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          brown: '#3b2816', // The dark brown from the top bar
          orange: '#f39c12', // The orange from the icons/text
          navy: '#1a3c6d',   // The navy blue from the nav links
          bg: '#f9f9f9',     // Light background
        }
      },
      fontFamily: {
        serif: ['"Times New Roman"', 'Times', 'serif'],
        sans: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
