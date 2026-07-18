import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import AdminShell from '@/components/AdminShell';
import AdminPagination from '@/components/AdminPagination';
import DeletePostButton from './DeletePostButton';
import type { Post } from '@/types';

export const dynamic = 'force-dynamic';

const PAGE_SIZE = 20;

export default async function AdminBlogListPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const requestedPage = Number(pageParam);
  const page = Number.isFinite(requestedPage) && requestedPage > 0 ? Math.floor(requestedPage) : 1;

  const totalCount = await prisma.post.count();
  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);

  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
    skip: (currentPage - 1) * PAGE_SIZE,
    take: PAGE_SIZE,
  });

  return (
    <AdminShell>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h1 style={{ fontFamily: 'var(--font-poppins)', fontSize: 26, margin: 0 }}>Blog posts</h1>
        <Link href="/admin/blog/new" className="btn btn-primary">
          + New post
        </Link>
      </div>
      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Tag</th>
              <th>Status</th>
              <th>Updated</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post: Post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.tag ?? '—'}</td>
                <td>
                  <span className={`badge ${post.published ? 'badge-contacted' : 'badge-new'}`}>
                    {post.published ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td>{post.updatedAt.toLocaleDateString()}</td>
                <td style={{ display: 'flex', gap: 12 }}>
                  <Link href={`/admin/blog/${post.id}`} style={{ color: 'var(--blue-600)', fontWeight: 600 }}>
                    Edit
                  </Link>
                  <DeletePostButton id={post.id} />
                </td>
              </tr>
            ))}
            {posts.length === 0 && (
              <tr>
                <td colSpan={5} style={{ color: 'var(--gray-500)' }}>
                  No posts yet — create your first one.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <AdminPagination basePath="/admin/blog" page={currentPage} totalPages={totalPages} />
    </AdminShell>
  );
}
