import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import AdminShell from '@/components/AdminShell';
import type { Submission } from '@/types';

export const dynamic = 'force-dynamic';

export default async function AdminDashboardPage() {
  const [bookingCount, newCount, subscriberCount, postCount, recent] = await Promise.all([
    prisma.submission.count({ where: { type: 'booking' } }),
    prisma.submission.count({ where: { status: 'new' } }),
    prisma.submission.count({ where: { type: 'newsletter' } }),
    prisma.post.count(),
    prisma.submission.findMany({ orderBy: { createdAt: 'desc' }, take: 8 }),
  ]);

  return (
    <AdminShell>
      <h1 style={{ fontFamily: 'var(--font-poppins)', fontSize: 26, marginBottom: 24 }}>Dashboard</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16, marginBottom: 24 }}>
        <div className="admin-card" style={{ marginBottom: 0 }}>
          <div style={{ fontSize: 13, color: 'var(--gray-500)' }}>New leads</div>
          <div style={{ fontSize: 28, fontWeight: 700 }}>{newCount}</div>
        </div>
        <div className="admin-card" style={{ marginBottom: 0 }}>
          <div style={{ fontSize: 13, color: 'var(--gray-500)' }}>Total bookings</div>
          <div style={{ fontSize: 28, fontWeight: 700 }}>{bookingCount}</div>
        </div>
        <div className="admin-card" style={{ marginBottom: 0 }}>
          <div style={{ fontSize: 13, color: 'var(--gray-500)' }}>Newsletter subscribers</div>
          <div style={{ fontSize: 28, fontWeight: 700 }}>{subscriberCount}</div>
        </div>
        <div className="admin-card" style={{ marginBottom: 0 }}>
          <div style={{ fontSize: 13, color: 'var(--gray-500)' }}>Blog posts</div>
          <div style={{ fontSize: 28, fontWeight: 700 }}>{postCount}</div>
        </div>
      </div>

      <div className="admin-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <h2 style={{ fontFamily: 'var(--font-poppins)', fontSize: 18, margin: 0 }}>Recent activity</h2>
          <Link href="/admin/submissions" style={{ fontSize: 14, color: 'var(--blue-600)', fontWeight: 600 }}>
            View all →
          </Link>
        </div>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Email</th>
              <th>Received</th>
            </tr>
          </thead>
          <tbody>
            {recent.map((s: Submission) => (
              <tr key={s.id}>
                <td>
                  {s.firstName} {s.lastName ?? ''}
                </td>
                <td style={{ textTransform: 'capitalize' }}>{s.type}</td>
                <td>{s.email}</td>
                <td>{s.createdAt.toLocaleDateString()}</td>
              </tr>
            ))}
            {recent.length === 0 && (
              <tr>
                <td colSpan={4} style={{ color: 'var(--gray-500)' }}>
                  No submissions yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
