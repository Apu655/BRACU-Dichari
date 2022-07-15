module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage:{
        'dichari-bg':"url('/dichar-bg.jpg')",
      },
    },
  },
  variants:{
    extend:{
      lineClamp:["hover"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
