import type { Metadata } from 'next';
import Image from 'next/image';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Selected client work from Digital Hub across web development, SEO, branding, and paid media.',
  alternates: { canonical: '/portfolio' },
};

// Mirrors the project list rendered on the homepage's interactive
// portfolio grid (see public/scripts/home-widgets.js) so this page can
// be linked to and indexed directly, without depending on client-side JS.
const portfolio: [string, string, string][] = [
  ['Regional Healthcare Network', 'Website + Local SEO', 'https://images.pexels.com/photos/4266947/pexels-photo-4266947.jpeg?auto=compress&cs=tinysrgb&w=700'],
  ['Summit Construction Co.', 'Lead Generation', 'https://images.pexels.com/photos/8482865/pexels-photo-8482865.jpeg?auto=compress&cs=tinysrgb&w=700'],
  ['Cedarwood Hospitality Group', 'Branding + Website', 'https://images.pexels.com/photos/19689233/pexels-photo-19689233.jpeg?auto=compress&cs=tinysrgb&w=700'],
  ['Harvest Table Restaurants', 'Social Media + Ads', 'https://images.pexels.com/photos/18337050/pexels-photo-18337050.jpeg?auto=compress&cs=tinysrgb&w=700'],
  ['Northline Realty Partners', 'SEO + Landing Pages', 'https://images.pexels.com/photos/5502228/pexels-photo-5502228.jpeg?auto=compress&cs=tinysrgb&w=700'],
  ['Aurora Retail Collective', 'Google Ads + Meta Ads', 'https://images.pexels.com/photos/18699686/pexels-photo-18699686.jpeg?auto=compress&cs=tinysrgb&w=700'],
];

export default function PortfolioPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="wrap section" style={{ paddingBottom: 24 }}>
          <div className="eyebrow">
            <span className="dot" />
            Our work
          </div>
          <h1 className="section-title" style={{ maxWidth: 640 }}>
            Selected client projects.
          </h1>
        </section>

        <section className="wrap" style={{ paddingBottom: 96 }}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map(([title, tag, img]) => (
              <div key={title} className="overflow-hidden rounded border border-ink-100 bg-white shadow-soft">
                <div style={{ position: 'relative', width: '100%', height: 180 }}>
                  <Image
                    src={img}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">{tag}</span>
                  <h2 className="mt-2 font-display text-lg font-semibold text-ink-800">{title}</h2>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
