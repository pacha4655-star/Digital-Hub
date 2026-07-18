import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main
        className="wrap section"
        style={{ textAlign: 'center', minHeight: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
      >
        <h1 style={{ fontFamily: 'var(--font-poppins)', fontSize: 48, marginBottom: 12 }}>404</h1>
        <p className="section-sub" style={{ margin: '0 auto 24px' }}>
          We couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Link href="/" className="btn btn-primary" style={{ margin: '0 auto' }}>
          Back to home
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
