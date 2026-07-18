import type { Config } from 'tailwindcss';

// Preflight is intentionally disabled. The site already ships a tuned,
// hand-written design system in app/globals.css (CSS variables, a .btn /
// .section / .wrap component layer, etc.) that the original homepage markup
// depends on. Turning on Tailwind's reset would fight that system across
// every existing page. Tailwind is layered in purely as a utility toolkit
// for new pages (About/Services/Contact) so they can be built quickly while
// still using the same brand tokens below.
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E40AF',
        },
        purple: {
          300: '#C4B5FD',
          500: '#7C3AED',
          600: '#6D28D9',
        },
        ink: {
          800: '#1F2430',
          500: '#6B7280',
          100: '#EEF1F8',
          50: '#F6F7FB',
        },
        brand: {
          green: '#10B981',
        },
      },
      fontFamily: {
        display: ['var(--font-poppins)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '14px',
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(30,41,87,0.18)',
        lift: '0 20px 45px -15px rgba(30,41,87,0.28)',
      },
      maxWidth: {
        wrap: '1240px',
      },
    },
  },
  plugins: [],
};

export default config;
