/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#070707',
        charcoal: '#101012',
        graphite: '#1b1b1f',
        gold: '#d9bf75',
        'gold-soft': '#bfa05f',
        amethyst: '#7f5aa6',
        'amethyst-glow': 'rgba(127, 90, 166, 0.35)',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Manrope"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        luxe: '0 18px 40px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(217, 191, 117, 0.16)',
      },
      letterSpacing: {
        luxe: '0.28em',
      },
      backgroundImage: {
        'gold-radial': 'radial-gradient(circle at 50% 50%, rgba(217,191,117,0.12), transparent 70%)',
      },
    },
  },
  plugins: [],
}
