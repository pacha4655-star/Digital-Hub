import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(31,36,48,0.06)',
      }}
    >
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', height: 72, gap: 24 }}>
        <Link
          href="/"
          className="logo"
          style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-poppins)', fontWeight: 700, fontSize: 19 }}
        >
          <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
            <circle cx="9" cy="9" r="6" fill="#6D28D9" />
            <path d="M4 22c0-6 4-9 9-9 6 0 12 3 13-4-1 9-7 15-13 15-5 0-9-1-9-2z" fill="#2563EB" />
          </svg>
          Digital Hub
        </Link>
        <nav style={{ display: 'flex', gap: 20, marginLeft: 'auto', fontSize: 14.5, fontWeight: 500 }}>
          <Link href="/about">About</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#portfolio">Portfolio</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact" className="btn btn-primary btn-pill" style={{ padding: '10px 20px' }}>
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
