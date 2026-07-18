'use server';

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

async function requireAdmin() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/admin/login');
  return session;
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 100);
}

export async function createPost(formData: FormData) {
  await requireAdmin();

  const title = String(formData.get('title') ?? '').trim();
  const excerpt = String(formData.get('excerpt') ?? '').trim();
  const content = String(formData.get('content') ?? '').trim();
  const tag = String(formData.get('tag') ?? '').trim();
  const coverImage = String(formData.get('coverImage') ?? '').trim();
  const published = formData.get('published') === 'on';

  if (!title || !content) {
    throw new Error('Title and content are required.');
  }

  let slug = slugify(title);
  const existing = await prisma.post.findUnique({ where: { slug } });
  if (existing) slug = `${slug}-${Date.now().toString(36)}`;

  await prisma.post.create({
    data: {
      slug,
      title,
      excerpt: excerpt || null,
      content,
      tag: tag || null,
      coverImage: coverImage || null,
      published,
      publishedAt: published ? new Date() : null,
    },
  });

  revalidatePath('/blog');
  revalidatePath('/admin/blog');
  redirect('/admin/blog');
}

export async function updatePost(id: string, formData: FormData) {
  await requireAdmin();

  const title = String(formData.get('title') ?? '').trim();
  const excerpt = String(formData.get('excerpt') ?? '').trim();
  const content = String(formData.get('content') ?? '').trim();
  const tag = String(formData.get('tag') ?? '').trim();
  const coverImage = String(formData.get('coverImage') ?? '').trim();
  const published = formData.get('published') === 'on';

  if (!title || !content) {
    throw new Error('Title and content are required.');
  }

  const existingPost = await prisma.post.findUnique({ where: { id } });
  if (!existingPost) throw new Error('Post not found.');

  await prisma.post.update({
    where: { id },
    data: {
      title,
      excerpt: excerpt || null,
      content,
      tag: tag || null,
      coverImage: coverImage || null,
      published,
      publishedAt: published && !existingPost.publishedAt ? new Date() : existingPost.publishedAt,
    },
  });

  revalidatePath('/blog');
  revalidatePath(`/blog/${existingPost.slug}`);
  revalidatePath('/admin/blog');
  redirect('/admin/blog');
}

export async function deletePost(id: string) {
  await requireAdmin();
  const post = await prisma.post.findUnique({ where: { id } });
  await prisma.post.delete({ where: { id } });
  revalidatePath('/blog');
  if (post) revalidatePath(`/blog/${post.slug}`);
  revalidatePath('/admin/blog');
}

export async function updateSubmissionStatus(id: string, status: 'new' | 'contacted' | 'archived') {
  await requireAdmin();
  await prisma.submission.update({ where: { id }, data: { status } });
  revalidatePath('/admin');
  revalidatePath('/admin/submissions');
}
