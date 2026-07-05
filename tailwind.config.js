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
        sectionMobile: '48px',
        sectionDesktop: '80px',
      },
      boxShadow: {
        card: '0 12px 40px rgba(26, 32, 44, 0.08)',
      },
      backgroundImage: {
        hero: 'linear-gradient(135deg, rgba(26, 54, 93, 0.96), rgba(45, 138, 110, 0.88))',
      },
    },
  },
  plugins: [],
};
