/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/**/*.tsx',
      './index.html'],
  theme: {
    extend: {
      backgroundImage: {
        wallpaper: "url('./src/assets/125916.jpg')"
      }
    },
  },
  plugins: [],
}
