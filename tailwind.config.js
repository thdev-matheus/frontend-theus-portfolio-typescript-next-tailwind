/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/blocks/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "color-primary": "#6880FF",
        "color-hover-primary": "#7C91FF",
        "button-background-color-primary": "#6880FF",
        "button-background-color-secondary": "#6880FF",
        "button-hover-background-color-primary": "#7C91FF",
        "button-hover-background-color-secondary": "#7C91FF",
      },
      textColor: {
        "button-color-primary": "#fff",
        "button-color-secondary": "#fff",
        "button-hover-color-primary": "#fff",
        "button-hover-color-secondary": "#fff",
      },
    },
  },
  plugins: [],
};
