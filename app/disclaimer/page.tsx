import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Limitations on the information and results discussed on the Digital Hub website.',
  alternates: { canonical: '/disclaimer' },
};

export default function DisclaimerPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="wrap section" style={{ maxWidth: 760 }}>
        <h1 style={{ fontFamily: 'var(--font-poppins)', fontSize: 'clamp(28px,4vw,40px)', marginBottom: 8 }}>Disclaimer</h1>
        <p style={{ color: 'var(--gray-500)', marginBottom: 32 }}>Last updated: July 2026</p>
        <div style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--gray-800)' }} className="post-content">
          <p>
            Case studies, statistics, and results referenced on this website describe outcomes achieved for
            specific past clients under specific conditions. They are illustrative, not a guarantee that any
            future engagement will achieve similar results — marketing performance depends on many factors
            outside our control, including market conditions, budget, and industry.
          </p>
          <p style={{ marginTop: 16 }}>
            Blog content is published for general informational purposes and should not be treated as
            professional, legal, or financial advice specific to your situation.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
