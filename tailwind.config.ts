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
        "2xl": "1180px"
      }
    },
    extend: {
	  fontFamily: {
		sans: ["var(--font-mona-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
		mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
	  },
      colors: {
        background: "oklch(var(--bg) / <alpha-value>)",
        foreground: "oklch(var(--fg) / <alpha-value>)",
        card: "oklch(var(--card) / <alpha-value>)",
        border: "oklch(var(--border) / <alpha-value>)",
        muted: "oklch(var(--muted) / <alpha-value>)",
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground) / <alpha-value>)"
        },
		accent: {
			DEFAULT: "oklch(var(--accent) / <alpha-value>)",
			foreground: "oklch(var(--accent-foreground) / <alpha-value>)"
		},
		brand: {
			DEFAULT: "oklch(var(--brand) / <alpha-value>)",
			foreground: "oklch(var(--brand-foreground) / <alpha-value>)"
		},
		inverse: {
			DEFAULT: "oklch(var(--inverse) / <alpha-value>)",
			foreground: "oklch(var(--inverse-foreground) / <alpha-value>)",
			muted: "oklch(var(--inverse-muted) / <alpha-value>)",
			line: "oklch(var(--inverse-line) / <alpha-value>)"
		},
        ring: "oklch(var(--ring) / <alpha-value>)"
      },
      boxShadow: {
			overlay: "0 4px 8px oklch(0.11 0.015 160 / 0.16)"
      },
	  transitionTimingFunction: {
		"out-expo": "cubic-bezier(0.16, 1, 0.3, 1)"
	  }
    }
  },
  plugins: []
};

export default config;
