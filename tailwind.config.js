/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./**/*.js"],
  safelist: [
    // Visibility toggling
    "hidden",
    "block",
    "flex",
    "sm:flex",
    "sm:hidden",

    // Layout & positioning
    "absolute",
    "static",
    "top-16",
    "left-0",
    "w-full",
    "sm:w-auto",

    // Padding & margin
    "px-4",
    "sm:px-0",
    "py-4",
    "sm:py-0",
    "gap-4",
    "sm:gap-6",

    // Backgrounds & borders
    "bg-gray-100",
    "sm:bg-transparent",
    "border-t",
    "sm:border-none",

    // Text colors
    "text-gray-700",
    "hover:text-black",
    "text-green-700",

    // Transitions/Animations if used
    "opacity-100",
    "translate-y-0",

    // List style
    "flex-col",
    "flex-row",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
