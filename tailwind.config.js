/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        infrared: {
          deep: '#1a0a1e',
          darker: '#0a0a0f',
          purple: '#4a1a5c',
          magenta: '#8b2d6e',
          hot: '#d84a7f',
          orange: '#ff6b4a',
          yellow: '#ffb347',
        },
        glow: {
          primary: 'rgba(255, 107, 74, 0.4)',
          secondary: 'rgba(139, 45, 110, 0.3)',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'infrared-gradient': 'linear-gradient(135deg, #1a0a1e 0%, #4a1a5c 50%, #8b2d6e 100%)',
        'thermal-gradient': 'linear-gradient(180deg, #8b2d6e 0%, #d84a7f 50%, #ff6b4a 100%)',
        'thermal-radial': 'radial-gradient(circle at center, #ff6b4a 0%, #d84a7f 35%, #8b2d6e 70%, #1a0a1e 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'loading': 'loading 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        loading: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      backdropBlur: {
        'custom': '20px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 107, 74, 0.4), 0 0 40px rgba(139, 45, 110, 0.3)',
        'glow-strong': '0 0 30px rgba(255, 107, 74, 0.6), 0 0 60px rgba(139, 45, 110, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(255, 107, 74, 0.1)',
      },
    },
  },
  plugins: [],
}
