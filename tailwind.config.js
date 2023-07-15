/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        brown:{
          50: '#E8D3B6',
          100: '#643A28'
        }
      },
      spacing:{
        'slide-img': '70%',
        'slide-22': '22%',
        'slide-28': '28%',
        'slide-60': '60%',
      } 
    },
  },
  plugins: [],
}
