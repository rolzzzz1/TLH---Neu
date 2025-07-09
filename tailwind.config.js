/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F4A593',
          dark: '#E8836D',
          light: '#FFB7A8'
        },
        secondary: {
          DEFAULT: '#4A4A4A',
          dark: '#2D2D2D',
          light: '#6B6B6B'
        },
        dark: {
          DEFAULT: '#1A1A1A',
          light: '#2D2D2D',
          lightest: '#2A2A2A'
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: '#4A4A4A',
            a: {
              color: '#F4A593',
              '&:hover': {
                color: '#E8836D',
              },
            },
            strong: {
              color: '#4A4A4A',
            },
            h1: {
              color: '#4A4A4A',
            },
            h2: {
              color: '#4A4A4A',
            },
            h3: {
              color: '#4A4A4A',
            },
            h4: {
              color: '#4A4A4A',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 