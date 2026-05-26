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
        electric: '#ffffff', // Used for main text highlights
        amber: '#e5e5e5', // Used for secondary text highlights
        dark: '#0a0a0a',
        darker: '#000000',
        surface: '#121212',
        surface2: '#1a1a1a'
      },
      fontFamily: {
        orbitron: ['var(--font-orbitron)'],
        grotesk: ['var(--font-grotesk)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
