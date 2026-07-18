import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'How Digital Hub uses cookies and similar technologies on this website.',
  alternates: { canonical: '/cookies' },
};

export default function CookiePolicyPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="wrap section" style={{ maxWidth: 760 }}>
        <h1 style={{ fontFamily: 'var(--font-poppins)', fontSize: 'clamp(28px,4vw,40px)', marginBottom: 8 }}>Cookie Policy</h1>
        <p style={{ color: 'var(--gray-500)', marginBottom: 32 }}>Last updated: July 2026</p>
        <div style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--gray-800)' }} className="post-content">
          <p>
            This site uses a minimal set of cookies: a session cookie for the admin panel (required for signed-in
            team members to stay logged in) and, if enabled, analytics cookies to understand aggregate site
            traffic. We do not use cookies for third-party ad targeting.
          </p>
          <h2 style={{ fontFamily: 'var(--font-poppins)', fontSize: 20, margin: '28px 0 10px' }}>Managing cookies</h2>
          <p>
            Most browsers let you block or delete cookies in their settings. Blocking the admin session cookie
            will prevent signing in to <code>/admin</code>; it has no effect on browsing the public site.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
