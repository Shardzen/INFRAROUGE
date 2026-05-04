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
          deep: '#000000',
          darker: '#050505',
          purple: '#000a1f',
          magenta: '#003CFF',
          hot: '#FF1100',
          orange: '#FFE500',
          yellow: '#FFE500',
          blue: '#003CFF',
          red: '#FF1100',
        },
        glow: {
          primary: 'rgba(255, 17, 0, 0.4)',
          secondary: 'rgba(0, 60, 255, 0.3)',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      backgroundImage: {
        'infrared-gradient': 'linear-gradient(135deg, #000000 0%, #000a1f 50%, #003CFF 100%)',
        'thermal-gradient': 'linear-gradient(180deg, #003CFF 0%, #FF1100 50%, #FFE500 100%)',
        'thermal-radial': 'radial-gradient(circle at center, #FF1100 0%, #FF1100 35%, #000a1f 70%, #000000 100%)',
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
        'glow': '0 0 20px rgba(255, 17, 0, 0.4), 0 0 40px rgba(0, 60, 255, 0.2)',
        'glow-strong': '0 0 30px rgba(255, 17, 0, 0.6), 0 0 60px rgba(0, 60, 255, 0.3)',
        'inner-glow': 'inset 0 0 20px rgba(255, 17, 0, 0.1)',
        'glow-yellow': '0 0 20px rgba(255, 229, 0, 0.4), 0 0 40px rgba(255, 229, 0, 0.2)',
        'glow-blue': '0 0 20px rgba(0, 60, 255, 0.4), 0 0 40px rgba(0, 60, 255, 0.2)',
      },
    },
  },
  plugins: [],
}
