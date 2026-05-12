/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef3ff',
          100: '#dbe5ff',
          200: '#b8cbff',
          300: '#8fa9ff',
          400: '#6587ff',
          500: '#4f7cff',
          600: '#3b6df3',
          700: '#2d54c9',
          800: '#1f3a8a',
          900: '#152961',
          950: '#0b193d',
        },
        violet: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        teal: {
          300: '#5eead4',
          400: '#2dd4bf',
        },
        ink: {
          50: '#f5f7ff',
          100: '#e5ecff',
          200: '#c7d3f5',
          300: '#a3b1d9',
          400: '#7e8bb8',
          500: '#5a6792',
          600: '#3f496e',
          700: '#293352',
          800: '#161c33',
          900: '#0a0e22',
          950: '#05070f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
      },
      boxShadow: {
        'glow': '0 20px 60px -10px rgba(80, 120, 240, 0.4)',
        'glow-lg': '0 40px 100px -20px rgba(80, 120, 240, 0.55)',
      },
      keyframes: {
        floatSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'float-soft': 'floatSoft 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
