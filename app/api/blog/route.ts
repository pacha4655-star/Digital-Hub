import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Public read-only feed of published posts, e.g. for external consumption
// or a future headless frontend. Writes to blog content go through the
// authenticated server actions in lib/actions.ts (used by /admin/blog),
// not this route.
export async function GET() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { publishedAt: 'desc' },
    select: {
      slug: true,
      title: true,
      excerpt: true,
      tag: true,
      coverImage: true,
      authorName: true,
      publishedAt: true,
    },
  });

  return NextResponse.json({ posts });
}
