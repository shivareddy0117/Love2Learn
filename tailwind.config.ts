import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Kids-themed color palette
        candy: {
          pink: "#FF6B9D",
          rose: "#FF85A1",
          light: "#FFF0F5",
        },
        sunny: {
          yellow: "#FFD93D",
          orange: "#FF8C42",
          light: "#FFFDE7",
        },
        sky: {
          blue: "#6EC6FF",
          deep: "#4FC3F7",
          light: "#E3F2FD",
        },
        grass: {
          green: "#66BB6A",
          mint: "#81C784",
          light: "#E8F5E9",
        },
        lavender: {
          purple: "#B39DDB",
          soft: "#CE93D8",
          light: "#F3E5F5",
        },
        coral: {
          DEFAULT: "#FF7043",
          light: "#FBE9E7",
        },
      },
      fontFamily: {
        bubbly: ['"Comic Neue"', "cursive", "sans-serif"],
        heading: ['"Fredoka One"', "cursive", "sans-serif"],
        body: ['"Nunito"', "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
        "wiggle": "wiggle 2s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "slide-up": "slide-up 0.8s ease-out",
        "slide-down": "slide-down 0.8s ease-out",
        "fade-in": "fade-in 1s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        "wave": "wave 2.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "slide-up": {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      borderRadius: {
        blob: "30% 70% 70% 30% / 30% 30% 70% 70%",
      },
    },
  },
  plugins: [],
};

export default config;
