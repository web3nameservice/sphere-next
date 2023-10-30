/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: "#0052FE",
        main2: "#0171E2",
        dark: "#000000",
        dark950: "#09090b",
        dark900: "#101010",
        dark800: "#181819",
        dark700: "#252526",
        dark600: "#353536",
        dark500: "rgb(161 161 170)",
        dark400: "rgb(161 161 170)",
        light50: "rgb(242 242 247)",
        light: "#ffffff",
        light100: "#ffffff",
        light200: "#eeeeee",
        light300: "#cccccc",
        light400: "#bbbbbb",
        light500: "rgb(130 130 130)",
        light600: "rgb(99 99 102)",
        light700: "rgb(72 72 74)",
        light800: "rgb(44 44 46)",
        light900: "rgb(28 28 30)",
        blueInfoBg: "#1E2042",
        blueBg: "#1E2042",
        greenBg: "#1E4220",
        redBg: "#421E1E",
        yellowBg: "#423E1E",
        amberBg: "#423E1E",
      }
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '40%': "40%",
      '16': '4rem',
    }
  },
  plugins: [],
}

// #101012