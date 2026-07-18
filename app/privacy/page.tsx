import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Digital Hub collects, uses, and protects your information.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="wrap section" style={{ maxWidth: 760 }}>
        <h1 style={{ fontFamily: 'var(--font-poppins)', fontSize: 'clamp(28px,4vw,40px)', marginBottom: 8 }}>Privacy Policy</h1>
        <p style={{ color: 'var(--gray-500)', marginBottom: 32 }}>Last updated: July 2026</p>
        <div style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--gray-800)' }} className="post-content">
          <p>
            This policy explains what information Digital Hub collects through this website, why we collect it,
            and how you can control it.
          </p>
          <h2 style={{ fontFamily: 'var(--font-poppins)', fontSize: 20, margin: '28px 0 10px' }}>Information we collect</h2>
          <p>
            When you submit our contact or booking form, we collect the details you provide — name, email, phone
            number, company, and message. When you subscribe to our newsletter, we collect your email address.
            We do not collect payment information through this site.
          </p>
          <h2 style={{ fontFamily: 'var(--font-poppins)', fontSize: 20, margin: '28px 0 10px' }}>How we use it</h2>
          <p>
            We use submitted information to respond to inquiries, deliver services you&apos;ve requested, and — for
            newsletter subscribers — to send occasional updates you can unsubscribe from at any time.
          </p>
          <h2 style={{ fontFamily: 'var(--font-poppins)', fontSize: 20, margin: '28px 0 10px' }}>Data retention &amp; security</h2>
          <p>
            Submissions are stored in an access-controlled database and retained only as long as needed to serve
            their purpose. Admin access requires authentication, and passwords are stored using salted hashing.
          </p>
          <h2 style={{ fontFamily: 'var(--font-poppins)', fontSize: 20, margin: '28px 0 10px' }}>Your choices</h2>
          <p>
            You can request access to, correction of, or deletion of your data at any time by emailing{' '}
            <a href="mailto:hello@digitalhub.agency">hello@digitalhub.agency</a>.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
