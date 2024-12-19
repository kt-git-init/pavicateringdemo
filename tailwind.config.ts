import type { Config } from "tailwindcss";

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      backgroundImage: {
        "custom-bg": "url('/public/images/backgroundImage.jpg')",
      },
      fontFamily: {
        sans: ["Arial, Quattrocento"],
      },
    },
  },
  plugins: [],
} satisfies Config;
