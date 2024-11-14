import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,json}"],
  theme: {
    extend: {
      colors: {
        lightBackground: "rgb(246,248,252)",
        "lightBackground-2": "rgb(241,243,244)",
        darkBackground: "rgb(41,42,45)",
        "darkBackground-2": "rgb(61,64,67)",
        "white-100": "rgb(225,226,227)",
        "white-200": "rgb(218,220,224)",
        "black-100": "rgb(32,33,36)",
      },
      screens: {
        xs: "20rem",
      },
    },
  },
  plugins: [
    function ({ addBase }: { addBase: (base: Record<string, { [key: string]: string }>) => void }) {
      addBase({
        "*": {
          boxSizing: "border-box",
          userSelect: "none",
        },
        "*::before": {
          boxSizing: "border-box",
        },
        "*::after": {
          boxSizing: "border-box",
        },
      });
    },
  ],
};

export default config;
