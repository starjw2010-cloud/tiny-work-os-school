import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#611F69",
        deepPurple: "#4A154B",
        softPurple: "#F8F5FA",
        lavender: "#F4ECF7",
        ink: "#1F2937",
        muted: "#6B7280",
        line: "#E5E7EB",
        success: "#16A34A",
        warning: "#F59E0B",
        danger: "#DC2626"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(74, 21, 75, 0.08)",
        lift: "0 18px 45px rgba(74, 21, 75, 0.13)"
      }
    }
  },
  plugins: []
};

export default config;
