const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "bounce-x": "bounce-x-frames 1s infinite",
        "bounce-y": "bounce-y-frames 1s infinite",
        "gradient-x": "gradient-x 5s ease infinite",
        "gradient-y": "gradient-y 5s ease infinite",
        "gradient-xy": "gradient-xy 5s ease infinite",
      },
      keyframes: {
        "bounce-x-frames": {
          "0%, 100%": {
            "transform": "translateY(0)",
          },
          "50%": {
            "transform": "translateY(0.25em)",
          }
        },
        "bounce-y-frames": {
          "0%, 100%": {
            "transform": "translateX(0)",
          },
          "50%": {
            "transform": "translateX(0.125em)",
          }
        },
        "gradient-y": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "center top"
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center bottom"
          }
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center"
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center"
          }
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left top"
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right bottom"
          }
        }
      },
      fontFamily: {
        "sans": ["Inter", ...defaultTheme.fontFamily.sans],
        "display-skyline": ["TitlingGothicFB Skyline", ...defaultTheme.fontFamily.sans],
        "display-condensed": ["TitlingGothicFB Cond", ...defaultTheme.fontFamily.sans],
        "display": ["TitlingGothicFB Normal", "Fracktif", ...defaultTheme.fontFamily.sans],
        "display-wide": ["TitlingGothicFB Wide", "Fracktif", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
