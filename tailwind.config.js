const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx}", "index.html"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "767px" },
    },
    colors: {
      navy: "#071927",
      gray: "#F7F8FA",
      lightGray: "#AFAFAF",
      darkGray: "#E2EAFC",
      lightBlue: "#063B64",
      purple: "#7A159A",
      green: "#70E000",
      black: "#212529",
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },

    fontFamily: {
      sans: ["SF Pro Display", ...defaultTheme.fontFamily.sans],
      montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],

      // sans: ['SF Pro Display', 'sans-serif']
    },

    extend: {
      // spacing: {
      //   '8xl': '96rem',
      //   '9xl': '128rem',
      // },
      // borderRadius: {
      //   '4xl': '2rem',
      // }
    },
    corePlugins: {
      preflight: false,
    },
  },
};
