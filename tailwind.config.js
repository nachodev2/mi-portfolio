/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Lienzo
        'primary': '#121212',
        // Color main
        'accent': '#FFB703',
        // Textos
        'text-main': '#A8A29E',
        'text-light': '#FFFFFF',
      },
      boxShadow: {
        'neon': '0 0 10px rgba(255, 183, 3, 0.5)',
      },
      fontFamily: {
        signature: ['Atkinson Hyperlegible Mono', 'monospace'],
        main: ['Outfit', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}