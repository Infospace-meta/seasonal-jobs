/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/images/Kenya.webp')",
        'flags': "url('/src/assets/images/Kenya.webp')",
        'large-hero': "url('/src/assets/images/hero-lion.jpg')",
        'form': "url('/src/assets/images/form-white.jpg')",
      },
    },
  },
  plugins: [],
};
