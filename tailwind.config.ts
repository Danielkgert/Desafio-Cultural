import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#FDF9ED',
          100: '#FAF1D0',
          200: '#F5E2A0',
          300: '#EFD06A',
          400: '#E8C040',
          500: '#C9A012',
          600: '#A07A0D',
          700: '#7A5C09',
          800: '#533E06',
          900: '#2C2003',
          950: '#160F01',
        },
        dark: {
          950: '#030303',
          900: '#080808',
          800: '#0F0F0F',
          700: '#161616',
          600: '#1E1E1E',
          500: '#262626',
        },
      },
      fontFamily: {
        cinzel:  ['var(--font-cinzel)', 'serif'],
        raleway: ['var(--font-raleway)', 'sans-serif'],
      },
      animation: {
        shimmer:     'shimmer 3s linear infinite',
        float:       'float 4s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2.5s ease-in-out infinite',
        'fade-in':   'fadeIn 0.6s ease forwards',
      },
      keyframes: {
        shimmer: {
          '0%':   { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-10px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201,160,18,0.25)' },
          '50%':       { boxShadow: '0 0 50px rgba(201,160,18,0.55)' },
        },
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
