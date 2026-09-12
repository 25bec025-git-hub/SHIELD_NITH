/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#070a12',
          card: '#0f172a',
          cardHover: '#131e36',
          cardBorder: '#1e293b',
          cyan: '#00f3ff',
          teal: '#00ffcc',
          green: '#10b981',
          blue: '#3b82f6',
          purple: '#8b5cf6',
          pink: '#ec4899',
          red: '#ff0055',
          text: '#f8fafc',
          muted: '#94a3b8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon-cyan': '0 0 15px rgba(0, 243, 255, 0.3)',
        'neon-teal': '0 0 15px rgba(0, 255, 204, 0.3)',
        'neon-red': '0 0 15px rgba(255, 0, 85, 0.3)',
        'glow-lg': '0 0 30px rgba(0, 243, 255, 0.25)',
      },
    },
  },
  plugins: [],
}
