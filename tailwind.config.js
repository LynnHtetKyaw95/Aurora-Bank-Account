/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        number: ["JetBrains Mono"],
        body: ["Nunito"],
      },
    },
  },
  plugins: [],
};
