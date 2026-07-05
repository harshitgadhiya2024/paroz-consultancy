/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      mobile: '320px',
      tablet: '768px',
      desktop: '1200px',
      wide: '2560px',
    },
    extend: {
      colors: {
        brand: {
          primary: '#1a365d',
          secondary: '#2d8a6e',
        },
        neutral: {
          white: '#ffffff',
          light: '#f7fafc',
          dark: '#2d3748',
          black: '#1a202c',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      spacing: {
        section: '48px',
        'section-desktop': '80px',
      },
      boxShadow: {
        soft: '0 20px 45px -25px rgba(26, 54, 93, 0.35)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, rgba(26, 54, 93, 0.96), rgba(45, 138, 110, 0.92))',
      },
    },
  },
  plugins: [],
}
