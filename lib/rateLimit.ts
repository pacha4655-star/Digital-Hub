// Simple in-memory rate limiter. Good enough to stop basic form-spam
// bursts on a single serverless instance. For strict multi-instance
// rate limiting, swap this for an Upstash Redis / Vercel KV backed
// limiter — the call site (app/api/submissions/route.ts) only needs
// `checkRateLimit(key)` to keep returning { allowed, remaining }.

const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

export function checkRateLimit(key: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS) {
    hits.set(key, timestamps);
    return { allowed: false, remaining: 0 };
  }

  timestamps.push(now);
  hits.set(key, timestamps);

  // Prevent unbounded growth of the map in long-lived instances.
  if (hits.size > 5000) {
    const oldestKey = hits.keys().next().value;
    if (oldestKey) hits.delete(oldestKey);
  }

  return { allowed: true, remaining: MAX_REQUESTS - timestamps.length };
}
