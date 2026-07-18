import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { prisma } from '@/lib/prisma';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const dynamic = 'force-dynamic';

async function getPost(slug: string) {
  return prisma.post.findUnique({ where: { slug } });
}

type BlogPostParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: BlogPostParams }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post || !post.published) return { title: 'Post not found' };
  return {
    title: post.title,
    description: post.excerpt ?? undefined,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt ?? undefined,
      type: 'article',
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: { params: BlogPostParams }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post || !post.published) notFound();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://digitalhub.agency';
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt ?? undefined,
    image: post.coverImage ?? undefined,
    author: { '@type': 'Person', name: post.authorName },
    datePublished: post.publishedAt?.toISOString(),
    dateModified: post.updatedAt.toISOString(),
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <SiteHeader />
      <main id="main" className="wrap section" style={{ maxWidth: 760 }}>
        {post.tag && (
          <div className="eyebrow">
            <span className="dot" />
            {post.tag}
          </div>
        )}
        <h1 style={{ fontFamily: 'var(--font-poppins)', fontSize: 'clamp(28px,4vw,40px)', lineHeight: 1.15, marginBottom: 8 }}>
          {post.title}
        </h1>
        <p style={{ color: 'var(--gray-500)', marginBottom: 32 }}>
          {post.authorName} &middot;{' '}
          {post.publishedAt?.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        {post.coverImage && (
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16 / 9',
              borderRadius: 'var(--radius)',
              overflow: 'hidden',
              marginBottom: 32,
            }}
          >
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 760px) 100vw, 760px"
              style={{ objectFit: 'cover' }}
              priority={false}
            />
          </div>
        )}
        <div style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--gray-800)' }} className="post-content">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
