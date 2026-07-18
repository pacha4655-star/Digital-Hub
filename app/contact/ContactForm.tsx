'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const body = await res.json();
      if (!res.ok) {
        setStatus('error');
        setMessage(body.error ?? 'Something went wrong. Please try again.');
        return;
      }
      setStatus('success');
      setMessage(body.message ?? "Thanks — we'll be in touch soon!");
      form.reset();
    } catch {
      setStatus('error');
      setMessage('Network error — please try again.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="admin-form rounded border border-ink-100 bg-white p-8 shadow-soft">
      {/* Honeypot field — hidden from real users via CSS, bots often fill it in. */}
      <div style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName">First name</label>
          <input id="firstName" name="firstName" type="text" required autoComplete="given-name" />
        </div>
        <div>
          <label htmlFor="lastName">Last name</label>
          <input id="lastName" name="lastName" type="text" autoComplete="family-name" />
        </div>
      </div>

      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required autoComplete="email" />

      <label htmlFor="phone">Phone (optional)</label>
      <input id="phone" name="phone" type="tel" autoComplete="tel" />

      <label htmlFor="company">Company (optional)</label>
      <input id="company" name="company" type="text" autoComplete="organization" />

      <label htmlFor="service">What are you interested in?</label>
      <select id="service" name="service" defaultValue="">
        <option value="" disabled>Select a service</option>
        <option value="Web development">Web development</option>
        <option value="SEO">SEO</option>
        <option value="Paid media">Paid media</option>
        <option value="Brand strategy">Brand strategy</option>
        <option value="Not sure yet">Not sure yet</option>
      </select>

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows={4} />

      {message && (
        <p role="status" style={{ color: status === 'error' ? '#B91C1C' : '#047857', fontSize: 13.5, marginTop: 12 }}>
          {message}
        </p>
      )}

      <button type="submit" disabled={status === 'loading'} className="btn btn-primary" style={{ width: '100%', marginTop: 20 }}>
        {status === 'loading' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
