/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern-desktop": "url('/forest-desktop.webp')",
        "hero-pattern-mobile": "url('/forest-mobile.webp')",
        "old-paper": "url('/dirty-old-paper-texture.jpg')",
      },
      fontFamily: {
        ringBearer: ["ringBearer", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["cupcake", "bumblebee"],
  },
};
