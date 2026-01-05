/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#000039',    // Azul oscuro (Fondo)
        'secondary': '#3E3E53',  // Gris azulado
        'tertiary': '#7C7B6C',   // Gris verdoso
        'accent': '#F8F69F',     // Amarillo neón (Destacados)
        'sage': '#BAB986',       // Beige
        'text-main': '#e2e8f0',  // Blanco suave (Texto)
        'accent-hover': '#d4d265', // Amarillo oscuro (Hover)
        'error': '#ef4444',      // Rojo
      },
    },
  },
  plugins: [],
}