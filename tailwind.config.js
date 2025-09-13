module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5f3ff",
          100: "#ede9fe",
          500: "#a855f7",
          700: "#7e22ce",
          900: "#120a2f",
        },
        dark: {
          primary: "#120a2f",
          secondary: "#1a0f3a",
          accent: "#2a1e4d",
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulse: "pulse 3s infinite",
        glow: "glow 3s ease-in-out infinite alternate",
        shimmer: "shimmer 3s infinite linear",
        wave: "wave 2s infinite",
        "float-slow": "float-slow 18s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        pulse: {
          "0%": { 
            boxShadow: "0 0 0 0 rgba(110, 79, 255, 0.6)",
            transform: "scale(1)" 
          },
          "70%": { 
            boxShadow: "0 0 0 15px rgba(110, 79, 255, 0)",
            transform: "scale(1.05)" 
          },
          "100%": { 
            boxShadow: "0 0 0 0 rgba(110, 79, 255, 0)",
            transform: "scale(1)" 
          },
        },
        // Thêm các keyframes khác...
      },
    },
  },
  plugins: [],
};