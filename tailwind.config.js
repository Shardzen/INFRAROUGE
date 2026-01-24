/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ===== PALETTE INFRAROUGE ===== */
        'infrared-yellow': {
          DEFAULT: '#eab308', // Jaune infrarouge principal
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        'infrared-purple': {
          DEFAULT: '#a855f7', // Violet infrarouge
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        'infrared-pink': {
          DEFAULT: '#d946ef', // Rose infrarouge
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        dark: {
          50: '#18181b',
          100: '#0f0f12',
          200: '#0a0a0c',
          300: '#050507',
          400: '#030303',
          500: '#000000',
          bg: '#000000',       // Fond noir pur
          card: '#0a0005',     // Cartes avec teinte violette
          border: '#1a0a14',   // Bordures
        }
      },
      fontFamily: {
        /* ===== POLICES UNDERGROUND PREMIUM ===== */
        // Titres ultra-imposants
        'display-ultra': ['Bebas Neue', 'Anton', 'Impact', 'sans-serif'],
        
        // Titres modernes et tech
        'display-tech': ['Orbitron', 'Audiowide', 'Teko', 'sans-serif'],
        
        // Titres bold et puissants
        'display-bold': ['Black Ops One', 'Bungee', 'Russo One', 'sans-serif'],
        
        // Titres artistiques
        'display-modern': ['Righteous', 'Staatliches', 'Oswald', 'sans-serif'],
        
        // Texte mono/code
        'mono': ['JetBrains Mono', 'Courier New', 'monospace'],
        
        // Corps de texte (sobre pour contraster)
        'body': ['Oswald', 'system-ui', 'sans-serif'],
      },
      animation: {
        'infrared-glow': 'infraredGlow 3s ease-in-out infinite alternate',
        'infrared-pulse': 'infraredPulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-chaotic': 'floatChaotic 8s ease-in-out infinite',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-down': 'slideDown 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in': 'fadeIn 1s ease-out',
        'fade-in-fast': 'fadeIn 0.4s ease-out',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'glitch': 'glitch 0.3s infinite',
        'shimmer': 'infraredShimmer 4s infinite linear',
      },
      keyframes: {
        infraredGlow: {
          '0%': { 
            boxShadow: `
              0 0 20px rgba(234, 179, 8, 0.3),
              0 0 40px rgba(217, 70, 239, 0.2),
              0 0 60px rgba(168, 85, 247, 0.1)
            `,
            filter: 'brightness(1)',
          },
          '100%': { 
            boxShadow: `
              0 0 40px rgba(234, 179, 8, 0.5),
              0 0 80px rgba(217, 70, 239, 0.3),
              0 0 120px rgba(168, 85, 247, 0.2)
            `,
            filter: 'brightness(1.2)',
          },
        },
        infraredPulse: {
          '0%, 100%': { 
            transform: 'scale(1)',
            opacity: '1',
          },
          '50%': { 
            transform: 'scale(1.02)',
            opacity: '0.95',
          },
        },
        float: {
          '0%, 100%': { 
            transform: 'translateY(0) rotate(0deg)',
          },
          '50%': { 
            transform: 'translateY(-20px) rotate(1deg)',
          },
        },
        floatChaotic: {
          '0%, 100%': { 
            transform: 'translateY(0) rotate(0deg)',
          },
          '25%': { 
            transform: 'translateY(-15px) rotate(2deg)',
          },
          '50%': { 
            transform: 'translateY(-25px) rotate(-2deg)',
          },
          '75%': { 
            transform: 'translateY(-10px) rotate(1deg)',
          },
        },
        slideUp: {
          '0%': { 
            transform: 'translateY(100px)',
            opacity: '0',
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        slideDown: {
          '0%': { 
            transform: 'translateY(-100px)',
            opacity: '0',
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        infraredShimmer: {
          '0%': { backgroundPosition: '-1500px 0' },
          '100%': { backgroundPosition: '1500px 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        
        /* ===== GRADIENTS INFRAROUGE ===== */
        'gradient-infrared': 'linear-gradient(135deg, #eab308 0%, #d946ef 50%, #a855f7 100%)',
        'gradient-infrared-alt': 'linear-gradient(135deg, #a855f7 0%, #d946ef 50%, #eab308 100%)',
        'gradient-infrared-vertical': 'linear-gradient(180deg, #eab308 0%, #d946ef 50%, #a855f7 100%)',
        
        'gradient-yellow': 'linear-gradient(135deg, #facc15 0%, #eab308 50%, #fbbf24 100%)',
        'gradient-purple': 'linear-gradient(135deg, #a855f7 0%, #9333ea 50%, #7e22ce 100%)',
        'gradient-pink': 'linear-gradient(135deg, #d946ef 0%, #c026d3 50%, #a21caf 100%)',
        
        'gradient-dark': 'linear-gradient(180deg, #000000 0%, #0a0005 50%, #000000 100%)',
        'gradient-dark-purple': 'linear-gradient(180deg, #000000 0%, #1a0a14 50%, #000000 100%)',
      },
      boxShadow: {
        /* ===== SHADOWS INFRAROUGE ===== */
        'infrared-glow': `
          0 0 20px rgba(234, 179, 8, 0.3),
          0 0 40px rgba(217, 70, 239, 0.2),
          0 0 60px rgba(168, 85, 247, 0.1)
        `,
        'infrared-glow-lg': `
          0 0 40px rgba(234, 179, 8, 0.4),
          0 0 80px rgba(217, 70, 239, 0.3),
          0 0 120px rgba(168, 85, 247, 0.2)
        `,
        'infrared-premium': `
          0 20px 60px -15px rgba(234, 179, 8, 0.4),
          0 10px 40px -10px rgba(217, 70, 239, 0.3)
        `,
        
        'yellow-glow': '0 0 30px rgba(234, 179, 8, 0.6), 0 0 60px rgba(234, 179, 8, 0.3)',
        'purple-glow': '0 0 30px rgba(168, 85, 247, 0.6), 0 0 60px rgba(168, 85, 247, 0.3)',
        'pink-glow': '0 0 30px rgba(217, 70, 239, 0.6), 0 0 60px rgba(217, 70, 239, 0.3)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderWidth: {
        '3': '3px',
      },
      letterSpacing: {
        'widest': '0.2em',
      },
    },
  },
  plugins: [],
}
