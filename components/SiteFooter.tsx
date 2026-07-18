import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer style={{ borderTop: '1px solid var(--gray-100)', padding: '32px 0', marginTop: 64 }}>
      <div
        className="wrap"
        style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, color: 'var(--gray-500)', fontSize: 14 }}
      >
        <span>&copy; {new Date().getFullYear()} Digital Hub. All rights reserved.</span>
        <div style={{ display: 'flex', gap: 16 }}>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
