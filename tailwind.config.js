/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        extreme: "0.2em",
      },
    },
    keyframes: {
      fillBackground: {
        "0%": { backgroundPosition: "100% 0" },
        "100%": { backgroundPosition: "0 0" },
      },
    },
    animation: {
      fillBackground: "fillBackground 1s ease forwards",
    },
  },
  plugins: [],
};
