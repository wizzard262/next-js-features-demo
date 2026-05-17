/* Tailwind CSS configuration file.
   Controls which files Tailwind scans for class names, enables theme
   customisation, and allows adding plugins. Tailwind uses this file to
   generate the final CSS based on the classes used in your project. */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
