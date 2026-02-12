import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        lg: "2rem"
      },
      screens: {
        "2xl": "1100px"
      }
    },
    extend: {
      colors: {
        background: "hsl(var(--bg) / <alpha-value>)",
        foreground: "hsl(var(--fg) / <alpha-value>)",
        card: "hsl(var(--card) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
        },
        ring: "hsl(var(--ring) / <alpha-value>)"
      },
      boxShadow: {
        soft: "0 20px 50px -26px rgba(47, 71, 255, 0.35)"
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(14px, -18px, 0)" }
        },
        "drift-slow": {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(-20px, 16px, 0)" }
        }
      },
      animation: {
        drift: "drift 12s ease-in-out infinite",
        "drift-slow": "drift-slow 16s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
