/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#333',
        foreground: '#ffffff',
        'card-bg': '#f7f7f7',
        'card-foreground': '#333',
      },
    },
  },
  plugins: [],
};
