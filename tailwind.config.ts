import * as radixColors from '@radix-ui/colors';
import tailwindTypographyPlugin from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import tailwindAnimatePlugin from 'tailwindcss-animate';
import { createPlugin } from 'windy-radix-palette';

const colors = createPlugin({
  colors: {
    lime: radixColors.lime,
    limeDark: radixColors.limeDark,
    slate: radixColors.slate,
    slateDark: radixColors.slateDark,
  },
});


export default {
  content: ['./index.html', './src/app/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.alias('lime'),
        primaryContrast: radixColors.mauveDark.mauve1,
        neutral: colors.alias('slate'),
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
  plugins: [
    tailwindAnimatePlugin,
    colors.plugin,
    tailwindTypographyPlugin,
  ],
} satisfies Config;
