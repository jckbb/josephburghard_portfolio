import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      codec: ["Codec"],
      mundial: ["Mundial"],
      mundialdemibold: ["MundialDemibold"],
      mundialregular: ["MundialRegular"],
      mundialthin: ["MundialThin"],
    },
    extend: {
      rotate: {
        "17": "17deg",
        "32": "32deg",
        "56": "56deg",
      },
    },
  },
  plugins: [],
} satisfies Config;
