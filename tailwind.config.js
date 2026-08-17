/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0c5ce6",
          blueDeep: "#0a2f78",
          blueSoft: "#5ea1ff",
          orange: "#f3992e",
          orangeSoft: "#ffc069",
        },
        ink: {
          950: "#04060c",
          900: "#080d18",
          800: "#0e1526",
          700: "#141d34",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(12,92,230,0.45)",
        "glow-orange": "0 0 40px -10px rgba(243,153,46,0.5)",
        card: "0 20px 40px -20px rgba(0,0,0,0.55)",
      },
    },
  },
  plugins: [],
};
