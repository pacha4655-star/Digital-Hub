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
  icon: "/uploads/logo.png",
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
