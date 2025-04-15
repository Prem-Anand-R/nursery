/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          green: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
          },
          emerald: {
            400: '#34d399',
            500: '#10b981',
            600: '#059669',
            700: '#047857',
          },
        },
        animation: {
          float1: 'float1 8s ease-in-out infinite',
          float2: 'float2 10s ease-in-out infinite',
          'text-fade': 'text-fade 1s ease-out forwards',
          'text-fade-delay': 'text-fade 1s ease-out 0.3s forwards',
          'scroll-indicator': 'scroll-indicator 1s ease-in-out infinite alternate',
          'bounce': 'bounce 2s infinite',
        },
        keyframes: {
          float1: {
            '0%, 100%': { transform: 'translate(0, 0)' },
            '50%': { transform: 'translate(-10px, -15px)' },
          },
          float2: {
            '0%, 100%': { transform: 'translate(0, 0)' },
            '50%': { transform: 'translate(15px, 10px)' },
          },
          'text-fade': {
            '0%': { opacity: 0, transform: 'translateY(10px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
          'scroll-indicator': {
            '0%': { transform: 'translateY(0)', opacity: 0.4 },
            '100%': { transform: 'translateY(6px)', opacity: 1 },
          },
        },
        backdropBlur: {
          xs: '2px',
          sm: '4px',
          md: '8px',
          lg: '12px',
        },
      },
    },
    plugins: [],
  }