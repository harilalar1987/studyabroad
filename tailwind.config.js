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
          DEFAULT: '#154284',
          50: '#eef5ff',
          100: '#d9e8ff',
          200: '#bcd6ff',
          300: '#8ebbff',
          400: '#5995ff',
          500: '#336eff',
          600: '#1c4cfe',
          700: '#143bea',
          800: '#1232bd',
          900: '#154284',
          950: '#0c2354',
        },
        sky: {
          DEFAULT: '#37beed',
          50: '#f0fbff',
          100: '#e0f7ff',
          200: '#baeffd',
          300: '#7fe4fc',
          400: '#37beed',
          500: '#0ca0de',
          600: '#028bcd',
          700: '#036ea2',
          800: '#085d86',
          900: '#0d4d6f',
        },
        cyan: {
          DEFAULT: '#19FFFE',
          400: '#19FFFE',
          500: '#00e5e5',
        },
        soft: {
          blue: {
            50: '#f7fafe',
            100: '#f5f8ff',
            200: '#eef5ff',
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
        'card': '0 20px 40px -15px rgba(21, 66, 132, 0.1)',
        'card-hover': '0 25px 50px -12px rgba(21, 66, 132, 0.18)',
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(270deg, #37beed, #2db7ea, #22afe6, #17a8e2, #0ca0de, #0495d6, #028bcd, #0380c4, #0970b4, #0e60a5, #135194, #154284)',
        'card-gradient': 'linear-gradient(to bottom right, #ffffff, #ffffff, #f0fbff)',
        'navy-gradient': 'linear-gradient(135deg, #154284 0%, #0c2354 100%)',
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
