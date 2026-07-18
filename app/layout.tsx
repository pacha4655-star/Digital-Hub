import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://digitalhub.agency';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Digital Hub — Full-Service Digital Marketing Agency',
    template: '%s | Digital Hub',
  },
  description:
    'Digital Hub is a full-service digital marketing agency helping startups, SMBs, and enterprises grow through web development, SEO, paid ads, and brand strategy.',
  openGraph: {
    title: 'Digital Hub — Full-Service Digital Marketing Agency',
    description: 'Web development, SEO, paid ads, and brand strategy under one accountable team.',
    type: 'website',
    url: siteUrl,
    siteName: 'Digital Hub',
  },
  twitter: {
    card: 'summary',
    title: 'Digital Hub — Full-Service Digital Marketing Agency',
    description: 'Web development, SEO, paid ads, and brand strategy under one accountable team.',
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Ccircle cx='9' cy='9' r='6' fill='%236D28D9'/%3E%3Cpath d='M4 22c0-6 4-9 9-9 6 0 12 3 13-4-1 9-7 15-13 15-5 0-9-1-9-2z' fill='%232563EB'/%3E%3C/svg%3E",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Digital Hub',
              url: siteUrl,
              description:
                'Full-service digital marketing agency offering web development, SEO, paid ads, and brand strategy.',
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
