import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'nurva-blue':{
          600: '#8183f7',
          700: '#6467FA',
          800: '#5040CC',
          900: '#2C1D6B'
        },
        'nurva-lblue':{
          200: '#EBF8FF',
          800: '#7BFFFE',
          900: '#7ECAFC'
        },
        'nurva-gray':{
          800: '#CCD3D3',
          900: '#E4E5FC'
        },
        'nurva-black': '#212121',
        'nurva-violet': '#9575CD'
      },
      backgroundColor: {
        'nurva-gradient-blue': 'linear-gradient(to right, #6467FA, #5040CC)',
        'nurva-gradient-lb': 'radial-gradient(to bottom, #E4E5FC, #7BFFFE, #6467FA)',
      },
      screens: {
        'xs': '320px',
        // => @media (min-width: 320px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'mdx2': '820px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      zIndex: {
        'web': '1000',
        'nav-phone': '1500',
        'header' : '2000',
        'modal': '2500'
      },
      backgroundImage:{
        'hero-space': 'url("/public/space.jpg")'
      },
    },
  },
  plugins: [],
};
export default config;
