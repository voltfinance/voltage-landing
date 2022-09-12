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
      greenHover:'#65ca00',
      blackHover:'#AFAFAF',
      black: "#1A1A1A",
      background: "#212529",
      link:'#B5B9D3'
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
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      300: "300px auto",
      400: "auto 400px",
      500: "auto 500px",
      600: "auto 600px",
      700: "auto 700px",

      16: "4rem",
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

      backgroundImage: {
        "home-landing-desktop": "url('src/assets/home-landing.png')",
        "home-landing-mobile": "url('src/assets/home-landing-mobile.png')",
        "home-phone-mockup": "url('src/assets/phone-spaceship.png')",
        "home-fuse-dollar": "url('src/assets/fuse-dollar.png')",
        "home-fuse-dollar-mobile": "url('src/assets/fuse-dollar-mobile.png')",

        "home-coin-wallet": "url('src/assets/coin-wallet.png')",
        "home-phone-mockup-mobile":
          "url('src/assets/phone-spaceship-mobile.png')",
      },
      width: {
        50: "50px",
        75: "75px",

        100: "100px",
        150: "150px",
        175: "175px",

        200: "200px",
        300: "300px",
        350: "350px",
        375: "375px",

        400: "400px",
        450: "450px",
        500: "500px",
        600: "600px",
        700: "700px",
        800: "800px",
        900: "900px",
        "2x": "200%",
      },
      height: {
        50: "50px",
        75: "75px",

        100: "100px",
        150: "150px",
        175: "175px",

        200: "200px",
        300: "300px",
        400: "400px",
        500: "500px",
        600: "600px",
        700: "700px",
        800: "800px",
        900: "900px",

        "section-desktop": "800px",
        "section-mobile": "300px",
      },
    },
    corePlugins: {
      preflight: false,
    },
  },
};
