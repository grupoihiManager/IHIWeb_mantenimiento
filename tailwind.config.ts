import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Grupo IHI Brand Colors
        'sky-light': '#7BC0C0',
        'sky-medium': '#4499D1',
        'blue-primary': '#1926C2',
        'blue-dark': '#15067B',
        'navy': '#090E52',
      },
      fontFamily: {
        'inter': ['var(--font-inter)', 'sans-serif'],
        'manrope': ['var(--font-manrope)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;