module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
        'hk': [ "Sora", "sans-serif" ],
        'ep':["Epilogue","sans-serif"]

      },
      colors:{
        primary:"#54A0FF",
        secondary:"#3A434E",
        secondaryDark:"#373B3D",
        grayText:"#8395A7",
        card1:"#D5EFF7",
        card2:"#F4F3EB",
        card3:"#E5E3F7",
        body:"#413C5F",
        trackHover:'#242C46',
        lightGrayBackground:"#F6F8F9"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
