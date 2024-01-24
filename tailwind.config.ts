import type { Config } from "tailwindcss";

export default {
  content: ["./client/index.html", "./client/src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#eafaff",
          "100": "#cff4ff",
          "200": "#aaeeff",
          "300": "#70e6ff",
          "400": "#2dd3ff",
          "500": "#00b1ff",
          "600": "#0089ff",
          "700": "#006fff",
          "800": "#005ddf",
          "900": "#0053ae",
          "950": "#03366f",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
