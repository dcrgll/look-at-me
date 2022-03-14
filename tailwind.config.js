module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  safelist: [
    "text-sky-400",
    "text-indigo-400",
    "text-emerald-400",
    "text-orange-400",
    "text-rose-400",
    "text-purple-400",
    "text-teal-400",
    "text-amber-400",
    "text-violet-400",
    "text-lime-400",
    "text-red-400",
    "text-blue-400",
    "text-green-400"
  ],
  theme: {
    extend: {
      minHeight: {
        80: "90vh"
      },
      animation: {
        enter: "fadeInRight 300ms ease-out",
        leave: "fadeOutLeft 300ms ease-in forwards"
      },
      keyframes: {
        fadeInRight: {
          "0%": {
            opacity: "0",
            transform: "translate(2rem)"
          },
          "100%": {
            opacity: "1",
            transform: "translate(0)"
          }
        },
        fadeOutLeft: {
          "0%": {
            opacity: "1",
            transform: "translate(0)"
          },
          "100%": {
            opacity: "0",
            transform: "translate(2rem)"
          }
        }
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
}
