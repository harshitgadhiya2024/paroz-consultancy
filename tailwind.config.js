/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '320px',
      md: '768px',
      xl: '1200px',
      '2xl': '2560px'
    },
    extend: {
      colors: {
        primary: '#1a365d',
        secondary: '#2d8a6e',
        neutral: {
          white: '#ffffff',
          50: '#f7fafc',
          700: '#2d3748',
          900: '#1a202c'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif']
      },
      maxWidth: {
        content: '1200px'
      },
      spacing: {
        section: '3rem',
        'section-desktop': '5rem'
      },
      boxShadow: {
        soft: '0 18px 45px -24px rgba(26, 54, 93, 0.35)'
      }
    }
  },
  plugins: []
};
