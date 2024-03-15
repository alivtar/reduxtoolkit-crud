/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    padding: {
      4: "4px",
      8: "8px",
      16: "16px",
    },
    extend: {
      borderRadius: {
        4: "4px",
        8: "8px",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
