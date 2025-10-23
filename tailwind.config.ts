import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        auren: {
          black: '#0d1b2a',
          tan: '#c4b5a0',
          cream: '#e8e3d8',
          beige: '#f5f1e8',
          navy: '#1a1a1a',
        },
        'how-it-works': {
          'tan': '#D4C7B4',
          'light-gray': '#F4F4F6',
          'cream': '#E5DED4',
          'light-blue': '#E4EEF0',
          'peach': '#F5DFD4',
        }
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config

