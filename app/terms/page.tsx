import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'The terms that govern use of the Digital Hub website and services.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="wrap section" style={{ maxWidth: 760 }}>
        <h1 style={{ fontFamily: 'var(--font-poppins)', fontSize: 'clamp(28px,4vw,40px)', marginBottom: 8 }}>Terms &amp; Conditions</h1>
        <p style={{ color: 'var(--gray-500)', marginBottom: 32 }}>Last updated: July 2026</p>
        <div style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--gray-800)' }} className="post-content">
          <p>By using this website or engaging Digital Hub for services, you agree to the terms below.</p>
          <h2 style={{ fontFamily: 'var(--font-poppins)', fontSize: 20, margin: '28px 0 10px' }}>Services</h2>
          <p>
            Specific deliverables, timelines, and fees for any engagement are defined in a separate signed
            proposal or statement of work, which takes precedence over this general page.
          </p>
          <h2 style={{ fontFamily: 'var(--font-poppins)', fontSize: 20, margin: '28px 0 10px' }}>Website use</h2>
          <p>
            You agree not to misuse this site — including attempting to access non-public areas without
            authorization, submitting fraudulent form data, or interfering with normal operation.
          </p>
          <h2 style={{ fontFamily: 'var(--font-poppins)', fontSize: 20, margin: '28px 0 10px' }}>Intellectual property</h2>
          <p>
            All content on this site — copy, design, and code — belongs to Digital Hub unless otherwise noted,
            and may not be reproduced without permission.
          </p>
          <h2 style={{ fontFamily: 'var(--font-poppins)', fontSize: 20, margin: '28px 0 10px' }}>Contact</h2>
          <p>
            Questions about these terms can be sent to <a href="mailto:hello@digitalhub.agency">hello@digitalhub.agency</a>.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
