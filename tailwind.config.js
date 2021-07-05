module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      corlors: {
        top: "#4268B3",
      },
      backgroundColor: {
        facebook: "#4268B3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
