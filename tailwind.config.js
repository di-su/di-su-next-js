const colors = require("tailwindcss/colors");

module.exports = {
  // content: [
  //   "./pages/**/*.{js,ts,jsx,tsx}",
  //   "./components/**/*.{js,ts,jsx,tsx}",
  // ],
  purge: ["./build/**/*.html", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // fontFamily: {
    //   inter: ["Inter", ...defaultTheme.fontFamily.sans],
    //   pj: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
    // },

    extend: {
      colors: {
        amber: colors.amber,
        teal: colors.teal,
        orange: colors.orange,
        brand: {
          50: "#faf9ff",
          100: "#f6f3ff",
          200: "#e8e2ff",
          300: "#d9d0ff",
          400: "#bdacff",
          500: "#a189ff",
          600: "#917be6",
          700: "#7967bf",
          800: "#615299",
          900: "#4f437d",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    // Other plugins
    require("tailwindcss-animatecss")({
      classes: [
        "animate__animated",
        "animate__fadeIn",
        "animate__fadeOut",
        "animate__bounceIn",
        "animate__fadeInRight",
        "animate__fadeInUp",
        "animate__fadeInLeft",
        "animate__rotateIn",
      ],
      settings: {
        animatedSpeed: 800,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
      },
      variants: ["responsive", "hover", "reduced-motion"],
    }),
  ]
}