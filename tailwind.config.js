module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        "retro-green": "#96CEB4",
        "retro-yellow": "#FFEEAD",
        "retro-red": "#D9534F",
        "retro-orange": "#FFAD60",
      },
      fontFamily: {
        "retro-sans": ["Noto Sans SC", "sans-serif"],
        "retro-serif": ["Noto Serif SC", "serif"],
      },
    },
  },
  plugins: [],
};
