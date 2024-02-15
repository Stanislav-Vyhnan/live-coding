import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      'grey-50': '#FAFBFC',
      'grey-300': '#DFE5E9',
      'grey-500': '#9CA3AF',
      'grey-600': '#7E899C',
      'grey-900': '#10151B',
    },

    borderWidth: {
      DEFAULT: '1px',
    },
    extend: {
      backgroundImage: {
        'experience-gradient': 'linear-gradient(to right, #fefdf7, #f8fbfa)',
      },
    },
  },
  plugins: [],
};
export default config;
