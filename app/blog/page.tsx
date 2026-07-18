import type { Metadata } from 'next';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import type { Post } from '@/types';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on web development, SEO, paid growth, and brand strategy from the Digital Hub team.',
  alternates: { canonical: '/blog' },
};

export default async function BlogIndexPage() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { publishedAt: 'desc' },
  });

  return (
    <>
      <SiteHeader />
      <main id="main" className="wrap section">
        <div className="eyebrow">
          <span className="dot" />
          Insights
        </div>
        <h2 className="section-title">From the Digital Hub blog</h2>
        <p className="section-sub" style={{ marginBottom: 40 }}>
          Strategy notes, case studies, and practical advice on growing your business online.
        </p>

        {posts.length === 0 ? (
          <p style={{ color: 'var(--gray-500)' }}>No posts published yet — check back soon.</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
            {posts.map((post: Post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                style={{
                  display: 'block',
                  border: '1px solid var(--gray-100)',
                  borderRadius: 'var(--radius)',
                  padding: 24,
                  background: '#fff',
                  boxShadow: 'var(--shadow-soft)',
                  transition: 'transform .3s ease',
                }}
              >
                {post.tag && (
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: 'var(--blue-600)',
                      textTransform: 'uppercase',
                      letterSpacing: '.05em',
                    }}
                  >
                    {post.tag}
                  </span>
                )}
                <h3 style={{ fontFamily: 'var(--font-poppins)', fontSize: 20, margin: '10px 0 8px' }}>{post.title}</h3>
                {post.excerpt && (
                  <p style={{ color: 'var(--gray-500)', fontSize: 15, lineHeight: 1.6, margin: 0 }}>{post.excerpt}</p>
                )}
                <span style={{ fontSize: 13, color: 'var(--gray-500)', display: 'block', marginTop: 14 }}>
                  {post.publishedAt?.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </Link>
            ))}
          </div>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
