import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        alabaster: {
          DEFAULT: 'hsl(231, 100%, 99%)'
        },
        magnolia: {
          DEFAULT: 'hsl(217, 100%, 97%)'
        },
        red: {
          DEFAULT: 'hsl(354, 84%, 57%)'
        },
        blue: {
          DEFAULT: 'hsl(206, 94%, 87%)',
          100: 'hsl(213, 96%, 18%)',
          200: 'hsl(243, 100%, 62%)',
          300: 'hsl(228, 100%, 84%)'
        },
        gray: {
          DEFAULT: 'hsl(229, 24%, 87%)',
          100: 'hsl(231, 11%, 63%)'
        }
      }
    },
  },
  plugins: [],
};
export default config;
