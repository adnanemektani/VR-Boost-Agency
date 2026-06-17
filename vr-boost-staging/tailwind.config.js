/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'app-gradient': 'linear-gradient(135deg, #dbeafe 0%, #ede9fe 40%, #fce7f3 100%)',
      }
    },
  },
  plugins: [],
}