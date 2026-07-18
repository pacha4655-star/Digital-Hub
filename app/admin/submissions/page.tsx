import { prisma } from '@/lib/prisma';
import AdminShell from '@/components/AdminShell';
import AdminPagination from '@/components/AdminPagination';
import StatusSelect from './StatusSelect';
import type { Submission } from '@/types';

export const dynamic = 'force-dynamic';

const PAGE_SIZE = 20;

export default async function SubmissionsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const requestedPage = Number(pageParam);
  const page = Number.isFinite(requestedPage) && requestedPage > 0 ? Math.floor(requestedPage) : 1;

  const totalCount = await prisma.submission.count();
  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);

  const submissions = await prisma.submission.findMany({
    orderBy: { createdAt: 'desc' },
    skip: (currentPage - 1) * PAGE_SIZE,
    take: PAGE_SIZE,
  });

  return (
    <AdminShell>
      <h1 style={{ fontFamily: 'var(--font-poppins)', fontSize: 26, marginBottom: 24 }}>Submissions</h1>
      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
              <th>Service</th>
              <th>Message</th>
              <th>Received</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((s: Submission) => (
              <tr key={s.id}>
                <td>
                  {s.firstName} {s.lastName ?? ''}
                </td>
                <td style={{ textTransform: 'capitalize' }}>{s.type}</td>
                <td>{s.email}</td>
                <td>{s.phone ?? '—'}</td>
                <td>{s.company ?? '—'}</td>
                <td>{s.service ?? '—'}</td>
                <td style={{ maxWidth: 220 }}>{s.message ?? '—'}</td>
                <td>{s.createdAt.toLocaleDateString()}</td>
                <td>
                  <StatusSelect id={s.id} initialStatus={s.status} />
                </td>
              </tr>
            ))}
            {submissions.length === 0 && (
              <tr>
                <td colSpan={9} style={{ color: 'var(--gray-500)' }}>
                  No submissions yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <AdminPagination basePath="/admin/submissions" page={currentPage} totalPages={totalPages} />
    </AdminShell>
  );
}
