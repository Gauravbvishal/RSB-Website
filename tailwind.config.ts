import type { Config } from 'tailwindcss';

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

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'rainbow-start': '#ff0000', // Starting color for the rainbow border
        'rainbow-end': '#8a2be2', // Ending color for the rainbow border
        'custom-black': '#000000',
        // Add any additional colors here if needed
      },
      animation: {
        rainbowBorder: 'rainbowBorder 5s linear infinite',
        zoomInOut: 'zoomInOut 0.5s ease-in-out',
        // Include previously defined animations
        'pop-up': 'pop-up 1s ease-out forwards',
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

export default config;
