/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        // Scientific theme palette (white, grey, red, black)
        primary: {
          dark: '#0a0a0a', // near-black for app shell
          light: '#1a1a1a', // dark grey for cards/surfaces
        },
        accent: {
          blue: '#9ca3af', // repurposed as neutral grey
          teal: '#dc2626', // repurposed as scientific red (kept key for minimal refactors)
        },
        success: {
          green: '#16a34a',
        },
        text: {
          primary: '#ffffff',
          secondary: '#9ca3af',
        },
        surface: '#ffffff',
        
        // Dark greys (keeping for compatibility)
        dark: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        // Neutral greys for text and backgrounds
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        }
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '56px', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '44px', fontWeight: '600' }],
        'h3': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
      },
      fontWeight: {
        'bold': '700',
        'semibold': '600',
        'normal': '400',
      },
      borderRadius: {
        'card': '12px',
        'button': '8px',
        'small': '6px',
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        'lg': '0 20px 25px -5px rgb(0 0 0 / 0.1)',
        'inner-top': 'inset 0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'dark': '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
        'dark-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.4)',
      },
      // --- Start of added/corrected animations and backdrop-filter ---
      keyframes: {
        'custom-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'ping-slow': { // Slower ping for a more ethereal glow
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
        'pulse-fade': { // For text fade-in/out
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '0.6' },
        },
        'swirl': { // A more complex rotating effect for inner elements
          '0%': { transform: 'rotate(0deg) scale(0.8)', opacity: '0.7' },
          '50%': { transform: 'rotate(180deg) scale(1)', opacity: '1' },
          '100%': { transform: 'rotate(360deg) scale(0.8)', opacity: '0.7' },
        }
      },
      animation: {
        'custom-spin': 'custom-spin 1.5s linear infinite',
        'ping-slow': 'ping-slow 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse-fade': 'pulse-fade 3s ease-in-out infinite',
        'swirl': 'swirl 4s ease-in-out infinite',
      },
    },
  },
  plugins: [
    // Ensure 'tailwindcss-filters' is correctly installed and listed here.
    // npm install -D tailwindcss-filters
    require('tailwindcss-filters'),
  ],
};