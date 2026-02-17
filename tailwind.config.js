/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          dark: '#0f172a',
          'dark-secondary': '#1e293b',
          'dark-tertiary': '#334155',
          gold: '#fbbf24',
          'gold-dark': '#f59e0b',
          neon: '#10b981',
          'neon-dark': '#059669',
        },
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'swirl-glow': 'swirl-glow 3s ease-in-out infinite',
      },
      keyframes: {
        'swirl-glow': {
          '0%': { transform: 'rotate(0deg) scale(1)', opacity: '0.7', boxShadow: '0 0 10px rgba(255, 0, 0, 0.6), 0 0 20px rgba(255, 0, 0, 0.4), 0 0 30px rgba(255, 0, 0, 0.2)' },
          '50%': { transform: 'rotate(180deg) scale(1.05)', opacity: '1', boxShadow: '0 0 15px rgba(255, 0, 0, 0.8), 0 0 25px rgba(255, 0, 0, 0.6), 0 0 35px rgba(255, 0, 0, 0.4)' },
          '100%': { transform: 'rotate(360deg) scale(1)', opacity: '0.7', boxShadow: '0 0 10px rgba(255, 0, 0, 0.6), 0 0 20px rgba(255, 0, 0, 0.4), 0 0 30px rgba(255, 0, 0, 0.2)' },
        },
        'glow': {
          '0%': { boxShadow: '0 0 20px #fbbf24, 0 0 30px #fbbf24' },
          '100%': { boxShadow: '0 0 30px #fbbf24, 0 0 40px #fbbf24' },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(251, 191, 36, 0.4), 0 0 40px rgba(251, 191, 36, 0.2)'
          },
          '50%': {
            boxShadow: '0 0 30px rgba(251, 191, 36, 0.6), 0 0 60px rgba(251, 191, 36, 0.3)'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
        'gold-gradient': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
        'neon-gradient': 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        'luxury-radial': 'radial-gradient(circle at 20% 80%, rgba(251, 191, 36, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
      },
      fontFamily: {
        'luxury': ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'luxury-gold': '0 4px 20px rgba(251, 191, 36, 0.3)',
        'luxury-gold-hover': '0 8px 30px rgba(251, 191, 36, 0.5)',
        'neon-soft': '0 0 20px rgba(16, 185, 129, 0.1)',
        'neon-medium': '0 0 30px rgba(16, 185, 129, 0.3)',
      }
    },
  },
  plugins: [],
}
