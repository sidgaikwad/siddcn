/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: '#1a1b26',
          text: '#a9b1d6',
          green: '#9ece6a',
          blue: '#7aa2f7',
          cyan: '#7dcfff',
          yellow: '#e0af68',
          red: '#f7768e',
        }
      },
    },
  },
  plugins: [],
}
