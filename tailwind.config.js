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
    extend: {}
  },
  plugins: [require("@tailwindcss/forms")]
}
