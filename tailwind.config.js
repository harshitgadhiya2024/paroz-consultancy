/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      mobile: '320px',
      tablet: '768px',
      desktop: '1200px',
      large: '2560px',
    },
    extend: {
      colors: {
        primary: '#1a365d',
        secondary: '#2d8a6e',
        neutral: {
          white: '#ffffff',
          50: '#f7fafc',
          700: '#2d3748',
          900: '#1a202c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      spacing: {
        section: '3rem',
        'section-desktop': '5rem',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(26,54,93,0.96), rgba(45,138,110,0.88))',
      },
      boxShadow: {
        soft: '0 20px 50px rgba(26, 32, 44, 0.12)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
