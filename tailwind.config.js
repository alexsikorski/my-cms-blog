module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'hover-hover': { 'raw': '(hover: hover)' }
      },
      colors: {
        'washed-black': '#030303',
        'washed-black-bg': '#050505',
        'lighter-washed-black': '#101010',
        'code-black': '#171717',
        'leetcode-black': '#2e2f31',
      },
    },
  },
  plugins: [],
}
