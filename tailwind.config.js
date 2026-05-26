/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1a1a3e',
          50: '#f0f0f8',
          100: '#e0e0f0',
          200: '#c2c2e0',
          300: '#9494c0',
          400: '#6a6aa8',
          500: '#4a4a88',
          600: '#2d2d6e',
          700: '#22225c',
          800: '#1a1a4a',
          900: '#1a1a3e',
          950: '#0d0d24',
        },
        sky: {
          DEFAULT: '#d4a853',
          50: '#fdf8f0',
          100: '#faf0e0',
          200: '#f5e0c0',
          300: '#edc990',
          400: '#d4a853',
          500: '#c09840',
          600: '#a07830',
          700: '#805828',
          800: '#604020',
          900: '#402818',
        },
        cyan: {
          DEFAULT: '#c0a060',
          400: '#c0a060',
          500: '#a08040',
        },
        soft: {
          blue: {
            50: '#fafaf7',
            100: '#f5f2eb',
            200: '#f0ebe0',
          },
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        changa: ['"Changa One"', 'cursive'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'card': '0 20px 40px -15px rgba(26, 26, 62, 0.1)',
        'card-hover': '0 25px 50px -12px rgba(26, 26, 62, 0.18)',
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(270deg, #d4a853, #c8a050, #bc9848, #b09040, #a48838, #988030, #8c7828, #807020, #746818, #686010, #5c5808, #1a1a3e)',
        'card-gradient': 'linear-gradient(to bottom right, #ffffff, #ffffff, #faf8f0)',
        'navy-gradient': 'linear-gradient(135deg, #1a1a3e 0%, #0d0d24 100%)',
      },
      animation: {
        'marquee-left': 'marqueeLeft 50s linear infinite',
        'marquee-right': 'marqueeRight 50s linear infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'shine': 'shine 2s linear infinite',
      },
      keyframes: {
        marqueeLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
