import { notFound } from 'next/navigation';
import AdminShell from '@/components/AdminShell';
import PostForm from '../PostForm';
import { updatePost } from '@/lib/actions';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await prisma.post.findUnique({ where: { id } });
  if (!post) notFound();

  const boundUpdate = updatePost.bind(null, post.id);

  return (
    <AdminShell>
      <h1 style={{ fontFamily: 'var(--font-poppins)', fontSize: 26, marginBottom: 24 }}>Edit post</h1>
      <PostForm
        action={boundUpdate}
        submitLabel="Save changes"
        initialValues={{
          title: post.title,
          excerpt: post.excerpt ?? '',
          content: post.content,
          tag: post.tag ?? '',
          coverImage: post.coverImage ?? '',
          published: post.published,
        }}
      />
    </AdminShell>
  );
}
