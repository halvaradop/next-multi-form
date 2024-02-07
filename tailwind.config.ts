import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: 'class',
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
          100: 'hsl(228, 100%, 84%)',
          200: 'hsl(243, 100%, 62%)',
          300: 'hsl(213, 96%, 18%)',
        },
        gray: {
          DEFAULT: 'hsl(229, 24%, 87%)',
          100: 'hsl(231, 11%, 63%)'
        }
      },
      boxShadow: {
        form: '0px 5px 40px 1px rgba(0,0,0,0.2)'
      }
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('user-invalid', '&:user-invalid')
    })
  ],
};
export default config;
