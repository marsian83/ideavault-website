/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "780px" },
        widescreen: { min: "780px" },
      },
      colors: {
        primary: "#3d9ddf", //"#1f7ae0",
        secondary: "#e4f5fd",
        background: "#ffffff",
        foreground: "#000000",
        front: "#2f363f",
        back: "#ffffff",
      },
      fontFamily: {
        familjenGrotesk: "Familjen Grotesk",
      },
    },
  },
  plugins: [],
};
