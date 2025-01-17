/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["class", "[data-theme='dark']"],
  theme: {
    extend: {
      colors: {
        primary: "#0277bd",
        "primary-focus": "#02639d",
        "eerie-black": "#1b1b1b",
        "dreamless-sleep": "#111111",
      },
      transformOrigin: {
        "center-bottom": "center bottom ",
      },
      height: {
        time: "20px",
        "time-2": "36px",
      },
      width: {
        time: "20px",
        "time-2": "36px",
      },
      lineHeight: {
        time: "20px",
      },
    },
    screens: {
      smallMobile: {
        max: "320px",
      },
      mobile: {
        max: "640px",
      },
      breakTwoCalendar: {
        max: "566px",
      },
      aboveBreakTwoCalendar: {
        min: "567px",
      },
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
  },
  daisyui: {
    themes: false,
    themeRoot: "#picker", // The element that receives theme color CSS variables
  },
  prefix: "rn-",
  corePlugins: {
    preflight: false,
  },
  plugins: [require("daisyui")],
};
