import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          "100": "#6EE7B7",     // minty green
          DEFAULT: "#22C55E",   // glossy emerald green
        },
        red: "#EF4444",         // red-500
        error: "#DC2626",       // red-600
        green: "#10B981",       // emerald-500
        blue: "#3B82F6",        // blue-500
        pink: "#F472B6",        // pink-400
        orange: "#FB923C",      // orange-400
        light: {
          "100": "#334155",     // slate-700
          "200": "#94A3B8",     // slate-400
          "300": "#F1F5F9",     // slate-100
          "400": "#F8FAFC",     // slate-50
        },
        dark: {
          "100": "#0B1220",     // deep navy
          "200": "#0A0F1E",     // even deeper
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#22C55E",   // glossy green as primary
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#86EFAC",   // light glossy green
          foreground: "#064E3B", // deep green for contrast
        },
        muted: {
          DEFAULT: "#D1FAE5",   // soft mint green
          foreground: "#065F46",
        },
        accent: {
          DEFAULT: "#34D399",   // vibrant green accent
          foreground: "#064E3B",
        },
        destructive: {
          DEFAULT: "#DC2626",
          foreground: "#FFFFFF",
        },
        border: "#A7F3D0",      // pastel green border
        input: "#BBF7D0",       // input with soft green tint
        ring: "#22C55E",        // glossy green focus ring
        chart: {
          "1": "#22C55E",       // emerald-500
          "2": "#34D399",       // emerald-400
          "3": "#86EFAC",       // emerald-300
          "4": "#15803D",       // emerald-800
          "5": "#A7F3D0",       // emerald-200
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      boxShadow: {
        "drop-1": "0px 10px 30px 0px rgba(34, 197, 94, 0.15)", // soft green glow
        "drop-2": "0 8px 30px 0 rgba(34, 197, 94, 0.35)",       // stronger glossy glow
        "drop-3": "0 8px 30px 0 rgba(34, 197, 94, 0.2)",        // medium glow
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
