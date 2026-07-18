'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function RouteError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Route error boundary:', error);
  }, [error]);

  return (
    <main
      className="wrap section"
      style={{ textAlign: 'center', minHeight: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
    >
      <h1 style={{ fontFamily: 'var(--font-poppins)', fontSize: 32, marginBottom: 12 }}>Something went wrong</h1>
      <p className="section-sub" style={{ margin: '0 auto 24px' }}>
        An unexpected error occurred while loading this page. You can try again, or head back home.
      </p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
        <button onClick={() => reset()} className="btn btn-primary">
          Try again
        </button>
        <Link href="/" className="btn btn-outline">
          Back to home
        </Link>
      </div>
    </main>
  );
}
