export default {
  content: [
    "./index.html", // This ensures that the content of index.html is scanned for Tailwind classes
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS, JSX, TS, and TSX files in the src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};