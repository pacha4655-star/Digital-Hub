import Link from 'next/link';
import SignOutButton from '@/components/SignOutButton';

export default function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="brand">Digital Hub Admin</div>
        <Link href="/admin">Dashboard</Link>
        <Link href="/admin/submissions">Submissions</Link>
        <Link href="/admin/blog">Blog posts</Link>
        <Link href="/" target="_blank">
          View site ↗
        </Link>
        <SignOutButton />
      </aside>
      <main className="admin-main">{children}</main>
    </div>
  );
}
