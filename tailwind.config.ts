import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        neon: "#00F0FF",
        dark: "#0A0A0A",
        "dark-purple": "#1A1F2C",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 5px #00F0FF, 0 0 10px #00F0FF, 0 0 15px #00F0FF",
          },
          "50%": {
            boxShadow: "0 0 20px #00F0FF, 0 0 25px #00F0FF, 0 0 30px #00F0FF",
          },
        },
        'grid-flow': {
          '0%': { 
            transform: 'translateY(0) perspective(1000px) rotateX(0deg)'
          },
          '50%': { 
            transform: 'translateY(10px) perspective(1000px) rotateX(3deg)'
          },
          '100%': { 
            transform: 'translateY(0) perspective(1000px) rotateX(0deg)'
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        glow: "glow 2s ease-in-out infinite",
        'grid-flow': 'grid-flow 15s ease-in-out infinite',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 240, 255, 0.1) 1px, transparent 1px)",
        'radial-glow': 'radial-gradient(circle at center, rgba(0, 240, 255, 0.15) 0%, transparent 70%)',
        'dark-gradient': 'linear-gradient(to bottom, #1A1F2C 0%, #0A0A0A 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;