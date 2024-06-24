import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    colors: {
      primary: '#F07659',
      secondary: '#032C3F',
      background: '#f9f1ea',
      white: '#fff',
      black: '#000',
      neutral100: '#101010',
      neutral80: '#33353E',
      neutral60: '#757B8A',
      goldenrod: '#F37455',
      burntSienna: '#F37455',
      yellow: '#F8D16E',
      darkenYellow: '#f5c037'
    },
    screens: {
      sm: { min: '0px', max: '576px' },
      md: { min: '577px', max: '1366px' },
      lg: { min: '1367px', max: '1920px' }
    },
    extend: {
      animation: {
        'loop-scroll': 'loop-scroll 30s linear infinite'
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }
        }
      }
    }
  },
  plugins: [require('@headlessui/tailwindcss')]
}
export default config
