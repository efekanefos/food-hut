import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "mealCard-linear-gradient": "linear-gradient(rgba(255,255,255,0) 20%, rgba(245, 71, 72, 0.5))"
      },
    },
    colors: {
      themeBlack : "#000",
      themeRed : "#F54748",
      themeYellow: "#FDC55E",
      themeOrangeGradient: "linear-gradient(#FFC26B, #FF8D8E)"
    }
  },
  plugins: [],
};
export default config;
