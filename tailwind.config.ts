import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pink: {
          100: "#FFECF1",
          200: "#FFC4D5",
          300: "#FF86B0",
          400: "#FF1D8D",
          500: "#C20068",
          600: "#840045",
          700: "#4B0024",
        },
        green: {
          100: "#1DFF8F",
          200: "#00D273",
          300: "#00A75A",
          400: "#007E42",
          500: "#00572C",
          600: "#003217",
          700: "#001507",
        },
        grey: {
          100: "#F1F0F1",
          200: "#D6D3D4",
          300: "#B1ABAD",
          400: "#8F8487",
          500: "#696163",
          600: "#464041",
          700: "#252122",
        },
      },
      fontFamily: {
        aileron: ['Aileron', 'Arial', 'Helvetica', 'sans-serif'],
        clashGrotesk: ['ClashGrotesk', 'Arial', 'Helvetica', 'sans-serif'],
      },
      fontSize: {
        xxs: ['14px', { lineHeight: '16px' }], // 14px for xxs
        xs: ['16px', { lineHeight: '18px' }],  // 16px for xs
        sm: ['18px', { lineHeight: '20px' }],  // 18px for sm
        md: ['20px', { lineHeight: '24px' }],  // 20px for md
        md2: ['24px', { lineHeight: '28px' }], // 24px for md2
        lg: ['32px', { lineHeight: '36px' }],  // 32px for lg
        lg2: ['36px', { lineHeight: '40px' }], // 36px for lg2
        xl: ['40px', { lineHeight: '48px' }],  // 40px for xl
        '2xl': ['44px', { lineHeight: '46px' }], // 44px for 2xl
        '3xl': ['64px', { lineHeight: '66px' }], // 64px for 3xl
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
