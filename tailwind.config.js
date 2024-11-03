/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "p-primary": "#9538E2",
      "t-primary": "#ffffff",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
