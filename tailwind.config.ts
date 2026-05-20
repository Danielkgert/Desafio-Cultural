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
          primary: '#D6A354',
          hi:      '#F1C87A',
          dk:      '#9A6A2F',
        },
        dark: {
          primary:   '#050505',
          secondary: '#0B0B0D',
          card:      '#111111',
          border:    '#1F1F1F',
        },
      },
      fontFamily: {
        display: ["var(--font-bebas)", 'sans-serif'],
        body:    ["var(--font-inter)",  'sans-serif'],
      },
      animation: {
        shimmer:   'shimmer 3s linear infinite',
        float:     'floatAnim 4s ease-in-out infinite',
        pulse:     'pulse 2s infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
    },
  },
  plugins: [],
}
export default config
