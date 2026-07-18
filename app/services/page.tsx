import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Web development, SEO, paid media, and brand strategy — see how Digital Hub structures each engagement.',
  alternates: { canonical: '/services' },
};

const services = [
  {
    title: 'Web development',
    body: 'Marketing sites, web apps, and headless commerce builds on modern stacks — handed over with clean, documented code.',
    bullets: ['Custom Next.js / React builds', 'CMS integration', 'Performance & Core Web Vitals tuning'],
  },
  {
    title: 'SEO',
    body: 'Technical, content, and authority work aimed at durable organic growth, not short-lived ranking tricks.',
    bullets: ['Technical site audits', 'Content strategy & briefs', 'Link & authority building'],
  },
  {
    title: 'Paid media',
    body: 'Search, social, and programmatic campaigns run against a shared measurement plan, so spend maps to revenue.',
    bullets: ['Google & Meta Ads management', 'Conversion tracking setup', 'Creative testing cadence'],
  },
  {
    title: 'Brand strategy',
    body: 'Positioning, messaging, and visual identity work that gives every downstream channel a consistent voice.',
    bullets: ['Positioning & messaging', 'Visual identity systems', 'Go-to-market planning'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="wrap section">
          <div className="eyebrow">
            <span className="dot" />
            What we do
          </div>
          <h1 className="section-title" style={{ maxWidth: 720 }}>
            Four disciplines, one accountable team.
          </h1>
          <p className="section-sub" style={{ maxWidth: 640 }}>
            Pick one service or combine them — every engagement is scoped around a measurable outcome, not a
            deliverables checklist.
          </p>
        </section>

        <section className="wrap" style={{ paddingBottom: 96 }}>
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="rounded border border-ink-100 bg-white p-8 shadow-soft">
                <h2 className="font-display text-xl font-semibold text-ink-800">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.body}</p>
                <ul className="mt-4 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-ink-800">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact" className="btn btn-primary">
              Talk to us about a project
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
