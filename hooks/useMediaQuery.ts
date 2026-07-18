'use client';

import { useEffect, useState } from 'react';

/**
 * Tracks whether a CSS media query currently matches. SSR-safe: returns
 * `false` on the server and during the first client render, then syncs
 * once mounted.
 *
 * const isDesktop = useMediaQuery('(min-width: 1024px)');
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    setMatches(mql.matches);

    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [query]);

  return matches;
}
