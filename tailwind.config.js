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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        gray: {
          50: '#F9F8FF',
          100: '#F3F3FF',
          200: '#ECEBFF',
          300: '#DEDDF6',
          400: '#BBBAD2',
          500: '#737289',
          600: '#737289',
          700: '#5F5F74',
          800: '#1E1F31',
          900: '#0C0D21'
        },
      }
    },
  },
  plugins: [],
}
