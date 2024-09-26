const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
import type { Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}", // Add this line to include other paths
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'], // Default sans
        'serif': ['Georgia', 'Cambria', 'serif'], // Default serif
        'stylish1': ['"Poppins"', 'sans-serif'],
        'stylish2': ['"Lobster"', 'cursive'],
        'stylish3': ['"Montserrat"', 'sans-serif'],
        'stylish4': ['"Playfair Display"', 'serif'],
        'stylish5': ['"Raleway"', 'sans-serif'],
        'stylish6': ['"Oswald"', 'sans-serif'],
        'stylish7': ['"Dancing Script"', 'cursive'],
        'stylish8': ['"Roboto Slab"', 'serif'],
        'stylish9': ['"Bebas Neue"', 'sans-serif'],
        'stylish10': ['"Amatic SC"', 'cursive'],
      },
      colors: {
        'rainbow-start': '#ff0000', // Starting color for the rainbow border
        'rainbow-end': '#8a2be2', // Ending color for the rainbow border
        'custom-black': '#000000',
        // Additional colors can be added here
      },
      animation: {
        rainbowBorder: 'rainbowBorder 5s linear infinite',
        zoomInOut: 'zoomInOut 0.5s ease-in-out',
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        // Include previously defined animations
        'pop-up': 'pop-up 4s ease-out forwards',
        shake: 'shake 0.5s ease-in-out infinite',
      },
      keyframes: {
        rainbowBorder: {
          '0%': { borderColor: 'red' },
          '14%': { borderColor: 'orange' },
          '28%': { borderColor: 'yellow' },
          '42%': { borderColor: 'green' },
          '57%': { borderColor: 'blue' },
          '71%': { borderColor: 'indigo' },
          '85%': { borderColor: 'violet' },
          '100%': { borderColor: 'red' },
        },
        zoomInOut: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        // Include previously defined keyframes
        'pop-up': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '50%': { transform: 'scale(1.1)', opacity: '1' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  const colors = theme('colors');
  const colorVariables = Object.keys(colors).reduce((acc, color) => {
    const colorValue = colors[color];
    if (typeof colorValue === 'object') {
      Object.keys(colorValue).forEach((shade) => {
        acc[`--${color}-${shade}`] = colorValue[shade];
      });
    } else {
      acc[`--${color}`] = colorValue;
    }
    return acc;
  }, {} as Record<string, string>);

  addBase({
    ':root': colorVariables,
  });
}

export default config;
