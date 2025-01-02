export default {
  content: [
    "./index.html", // This ensures that the content of index.html is scanned for Tailwind classes
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS, JSX, TS, and TSX files in the src folder
  ],
  theme: {
    extend: {
      keyframes: {
        popFade: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8' },
          '100%': { transform: 'scale(0.9)', opacity: '0' },
        },
      },
      animation: {
        popFade: 'popFade 2s forwards',
      },
    },
  },
  plugins: [],
};