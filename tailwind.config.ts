import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(farthest-corner at 99% 0% in lab, ##030302 0%, #384c3a 47%);",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        text: "#e9fcee",
        background: "#010402",
        primary: "#4bc36d",
        secondary: "#2b9178",
        accent: "#64aaa9",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
