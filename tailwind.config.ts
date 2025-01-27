import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        metro: ["var(--font-metro)", "sans-serif"],
        sans: ["Azeret Mono", "monospace"],
      },
      keyframes: {
        "scroll-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "scroll-left-fast": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-75%)" },
        },
      },
      animation: {
        "scroll-left": "scroll-left 26s linear infinite",
        "scroll-left-fast": "scroll-left-fast 16s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
