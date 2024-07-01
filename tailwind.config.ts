import type { Config } from 'tailwindcss';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  fontWeight,
  lineHeight as defaultLineHeight,
  spacing,
} from 'tailwindcss/defaultTheme';

import { pick } from './src/utils/pick';

const lineHeight = {
  ...pick(defaultLineHeight, ['3', '5', '7', 'none', 'normal']),
  '11': '2.75rem',
  '14': '3.5rem',
};

// eslint-disable-next-line import/no-default-export
export default {
  content: ['./src/**/*.{ts,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    screens: {
      md: '1000px',
      lg: '1360px',
      xl: '1680px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      coral: '#fe5442',
      black: '#080b0f',
      'anti-flash-white': '#f2f2f2',
      'dark-liver': '#4e5053',
      'granite-gray': '#64666a',
      'spanish-gray': '#787b80',
      'jordy-blue': '#999fff',
      'eerie-black': '#1c1d1f',
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))',
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))',
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))',
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))',
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))',
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))',
      },
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
      },
    },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)',
    },
    fontFamily: {
      title: ['var(--font-title)'],
      body: ['var(--font-body)'],
    },
    fontSize: {
      xs: ['0.625rem', { lineHeight: lineHeight['3'] }],
      sm: ['0.75rem', { lineHeight: lineHeight['5'] }],
      base: ['1rem', { lineHeight: lineHeight.normal }],
      lg: ['1.25rem', { lineHeight: lineHeight['7'] }],
      xl: ['1.5rem', { lineHeight: lineHeight.normal }],
      '2xl': ['2.25rem', { lineHeight: lineHeight['11'] }],
      '3xl': ['3rem', { lineHeight: lineHeight['14'] }],
      '4xl': ['3.5rem', { lineHeight: lineHeight.none }],
      '5xl': ['3.75rem', { lineHeight: lineHeight.none }],
      '6xl': ['5.625rem', { lineHeight: '1.1' }],
      '7xl': ['7.5rem', { lineHeight: lineHeight.none }],
    },
    fontWeight: pick(fontWeight, ['normal', 'medium', 'semibold']),
    lineHeight,
    spacing: {
      ...pick(spacing, [
        '0',
        'px',
        '0.5',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '14',
        '16',
        '20',
        '40',
      ]),
      30: '7.5rem',
      50: '12.5rem',
    },
  },
} satisfies Config;
