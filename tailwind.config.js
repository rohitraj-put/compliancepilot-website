/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#14213D',
          deep: '#0C1730',
          light: '#1D2D50',
        },
        parchment: '#F7F5EF',
        paper: '#FFFFFF',
        saffron: {
          DEFAULT: '#E8963C',
          dark: '#C97A24',
        },
        ink: '#22283A',
        muted: '#6B7280',
        border: '#E3DFD3',
        signal: {
          green: '#3F7D58',
          greenBg: '#E9F3EC',
          red: '#C1443C',
          redBg: '#FBEAE8',
          amberBg: '#FBF1DE',
        },
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(20, 33, 61, 0.06), 0 1px 0 rgba(20, 33, 61, 0.04)',
        lifted: '0 24px 60px rgba(12, 23, 48, 0.35)',
      },
      backgroundImage: {
        'ledger-lines': 'repeating-linear-gradient(to bottom, transparent, transparent 37px, rgba(20,33,61,0.07) 38px)',
      },
    },
  },
  plugins: [],
}
