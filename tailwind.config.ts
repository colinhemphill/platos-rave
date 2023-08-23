import type { Config } from 'tailwindcss';
import * as radixColors from '@radix-ui/colors';

// @ts-ignore
import windyRadixPlugin from 'windy-radix-palette';
// @ts-ignore
import { toRadixVars } from 'windy-radix-palette/vars';
// @ts-ignore
import tailwindAnimatePlugin from 'tailwindcss-animate';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: toRadixVars('lime'),
        primaryContrast: radixColors.mauveDark.mauve1,
        neutral: toRadixVars('slate'),
      },
      fontFamily: {
        mono: ['var(--font-jetbrains-mono)'],
        sans: ['var(--font-jetbrains-mono)'],
        body: ['var(--font-jetbrains-mono)'],
        heading: ['var(--font-jetbrains-mono)'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '2rem',
          lg: '4rem',
          xl: '6rem',
          '2xl': '10rem',
        },
      },
    },
  },
  plugins: [tailwindAnimatePlugin, windyRadixPlugin({})],
} satisfies Config;
