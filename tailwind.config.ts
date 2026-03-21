import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f7f7",
          100: "#d9ecec",
          200: "#b3d9d9",
          300: "#80bfbf",
          400: "#4d9e9e",
          500: "#2a7f7f",
          600: "#1f6b6b",
          700: "#1a5555",
          800: "#164545",
          900: "#0f3333",
          950: "#0a2424",
        },
        accent: {
          50: "#fdf8f0",
          100: "#f9edd9",
          200: "#f2d9b0",
          300: "#e8bf7a",
          400: "#dda044",
          500: "#d4872a",
          600: "#b86d1f",
          700: "#99541c",
          800: "#7d441d",
          900: "#67381c",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
