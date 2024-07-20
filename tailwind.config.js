/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('assets/hero-pattern.svg')",
      },
      backgroundClip: ['text'],
      colors:{
        clrPurple1:"var(--clr-purple-1)",
        clrPurple2:"var(--clr-purple-2)",
        clrPurple3:"var(--clr-purple-3)",
        clrWhite1:"var(--clr-white-1)",
        clrWhite2:"var(--clr-white-2)",
        clrWhite3:"var(--clr-white-3)",
      }
    },
  },
  plugins: [],
};
