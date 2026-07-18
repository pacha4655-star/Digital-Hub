import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'About',
  description: 'Digital Hub is a full-service digital marketing agency — meet the team behind the strategy, design, and growth work.',
  alternates: { canonical: '/about' },
};

const values = [
  { title: 'Accountable by default', body: 'Every engagement ships against a measurable goal, reported on plainly — no vanity metrics dressed up as wins.' },
  { title: 'One team, not a relay race', body: 'Strategy, design, dev, and paid media sit at the same table, so nothing gets lost in a handoff.' },
  { title: 'Built to last past launch', body: 'We hand over documentation and access, not a black box you have to come back to us to touch.' },
];

const stats = [
  { label: 'Years operating', value: '9' },
  { label: 'Client engagements shipped', value: '240+' },
  { label: 'Avg. client tenure', value: '3.2 yrs' },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="wrap section">
          <div className="eyebrow">
            <span className="dot" />
            About Digital Hub
          </div>
          <h1 className="section-title" style={{ maxWidth: 720 }}>
            A small team that treats your growth targets like our own.
          </h1>
          <p className="section-sub" style={{ maxWidth: 640 }}>
            Digital Hub is a full-service digital marketing agency working with startups, SMBs, and enterprise
            teams on web development, SEO, paid acquisition, and brand strategy — under one accountable team
            instead of a stack of disconnected vendors.
          </p>
        </section>

        <section className="wrap" style={{ paddingBottom: 64 }}>
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded border border-ink-100 bg-white p-6 shadow-soft">
                <div className="font-display text-3xl font-bold text-ink-800">{s.value}</div>
                <div className="mt-1 text-sm text-ink-500">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="wrap" style={{ paddingBottom: 96 }}>
          <h2 className="section-title" style={{ fontSize: 28 }}>How we work</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded border border-ink-100 bg-white p-6 shadow-soft">
                <h3 className="font-display text-lg font-semibold text-ink-800">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{v.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
