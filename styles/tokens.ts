/**
 * Design tokens mirrored from the CSS custom properties defined in
 * app/globals.css (:root). Use these when a color/shadow value is needed
 * in TypeScript/JS — e.g. inline chart colors or <meta theme-color> — so
 * both places stay in sync. For styling in components, prefer the CSS
 * variables or Tailwind's extended theme (tailwind.config.ts) directly.
 */
export const colors = {
  blue700: '#1E40AF',
  blue600: '#1D4ED8',
  blue500: '#2563EB',
  purple600: '#6D28D9',
  purple500: '#7C3AED',
  purple300: '#C4B5FD',
  gray50: '#F6F7FB',
  gray100: '#EEF1F8',
  gray300: '#D7DCE8',
  gray500: '#6B7280',
  gray800: '#1F2430',
  green500: '#10B981',
} as const;

export const radius = '14px';

export const shadows = {
  soft: '0 10px 30px -12px rgba(30,41,87,0.18)',
  lift: '0 20px 45px -15px rgba(30,41,87,0.28)',
} as const;
