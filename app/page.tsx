import Script from 'next/script';
import { homeMarkup } from '@/components/homeMarkup';

export default function HomePage() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: homeMarkup }} />
      {/* Shared client-side validation helpers used by both scripts below */}
      <Script src="/scripts/validators.js" strategy="afterInteractive" />
      {/* Nav, hero, chat widget, and section animations */}
      <Script src="/scripts/home-widgets.js" strategy="afterInteractive" />
      {/* Wires the contact/booking form and newsletter signup to /api/submissions */}
      <Script src="/scripts/home-forms.js" strategy="afterInteractive" />
    </>
  );
}
