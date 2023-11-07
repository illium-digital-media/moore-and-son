/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "#1d4ed8",
        header: '#1a1a1a',
        primaryLight: '#bfdbfe',
      },
      backgroundColor:{
        primary: "#1d4ed8",
        primaryLight: '#bfdbfe'
      },
      padding: {
        section: 'clamp(3.75rem, 7.82vw, 6.25rem) 1rem',
      },
    },
  },
  plugins: [],
}
