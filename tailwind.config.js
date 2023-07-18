/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sacramento': ['Sacramento', 'cursive'],
        'satoshi': ['Satoshi', 'cursive'],
        'inter': ['Inter', 'cursive'],
      },
      keyframes: {
        'slide-in-from-bottom': {
          '0%': { transform: 'translateY(60%)', opacity: '0.5' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        'slide-in-from-bottom': 'slide-in-from-bottom 0.25s ease-out',
        'fade-in': 'fade-in 0.1s ease-out',
      }
    },
  },
  plugins: [],
}
