/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BgColor: "#8761a8",
        textColor: "#ffffff",
        textColorGray: "#808080",
        inputColor: "#BE96BC",
        topicColor: "#F09791",
        titleColor: "#51475a",
      },
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
