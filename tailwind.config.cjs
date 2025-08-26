/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ['Outfit', 'system-ui', 'sans-serif'] },
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)"
      },
      boxShadow: {
        glow: '0 0 30px rgba(255,255,255,0.08)',
        neon: '0 0 12px rgba(99,102,241,0.7), 0 0 40px rgba(99,102,241,0.4)',
      },
      backgroundImage: {
        'grid': 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
        'radial': 'radial-gradient(50% 50% at 50% 0%, rgba(99,102,241,0.25), transparent 60%)'
      },
      backgroundSize: { grid: '40px 40px' },
      animation: {
        float: 'float 8s ease-in-out infinite',
        spinSlow: 'spin 20s linear infinite',
        grain: 'grain 8s steps(10) infinite',
        blob: 'blob 20s ease-in-out infinite',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } },
        grain: { '0%': { transform: 'translate(0,0)' }, '100%': { transform: 'translate(-100%, -100%)' } },
        blob: { '0%, 100%': { borderRadius: '42% 58% 70% 30% / 45% 45% 55% 55%' },
                '50%': { borderRadius: '72% 28% 32% 68% / 28% 56% 44% 72%' } }
      }
    },
  },
  plugins: [],
}
