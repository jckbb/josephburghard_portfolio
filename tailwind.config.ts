import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      codec: ["Codec"],
      mundial: ["Mundial"],
      mundialdemibold: ["MundialDemibold"],
      mundialregular: ["MundialRegular"],
      mundialthin: ["MundialThin"],
    },
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
