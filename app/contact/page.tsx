import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ContactForm from './ContactForm';
import GoogleMap from '@/components/GoogleMap';
export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Digital Hub about a web development, SEO, paid media, or brand strategy project.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="wrap section" style={{ paddingBottom: 24 }}>
          <div className="eyebrow">
            <span className="dot" />
            Get in touch
          </div>
          <h1 className="section-title" style={{ maxWidth: 640 }}>
            Tell us about your project.
          </h1>
          <p className="section-sub" style={{ maxWidth: 560 }}>
            Fill out the form and we&apos;ll reply within one business day. Prefer email or phone?
            Reach us directly below.
          </p>
        </section>

        <section className="wrap" style={{ paddingBottom: 96 }}>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <h2 className="font-display text-lg font-semibold text-ink-800">Direct contact</h2>
              <ul className="mt-4 space-y-3 text-sm text-ink-500">
                <li>
                  Email:{' '}
                  <a href="mailto:hello@digitalhub.agency" className="font-medium text-blue-600">
                    hello@digitalhub.agency
                  </a>
                </li>
                <li>
                  Phone:{' '}
                  <a href="tel:+919629632897" className="font-medium text-blue-600">
                    +91 96296 32897
                  </a>
                </li>
              </ul>
            </div>
                      <ContactForm />

            <div 
              className="lg:col-span-2" 
              style={{ marginTop: "40px" }}
            >
              <GoogleMap />
            </div>

          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
