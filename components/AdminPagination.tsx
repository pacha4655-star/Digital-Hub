import Link from 'next/link';

export default function AdminPagination({
  basePath,
  page,
  totalPages,
}: {
  basePath: string;
  page: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;

  const prevPage = Math.max(1, page - 1);
  const nextPage = Math.min(totalPages, page + 1);

  return (
    <nav
      aria-label="Pagination"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}
    >
      <span style={{ color: 'var(--gray-500)', fontSize: 14 }}>
        Page {page} of {totalPages}
      </span>
      <div style={{ display: 'flex', gap: 8 }}>
        {page > 1 ? (
          <Link href={`${basePath}?page=${prevPage}`} className="btn btn-secondary" aria-label="Previous page">
            Previous
          </Link>
        ) : (
          <span className="btn btn-secondary" aria-disabled="true" style={{ opacity: 0.5, pointerEvents: 'none' }}>
            Previous
          </span>
        )}
        {page < totalPages ? (
          <Link href={`${basePath}?page=${nextPage}`} className="btn btn-secondary" aria-label="Next page">
            Next
          </Link>
        ) : (
          <span className="btn btn-secondary" aria-disabled="true" style={{ opacity: 0.5, pointerEvents: 'none' }}>
            Next
          </span>
        )}
      </div>
    </nav>
  );
}
