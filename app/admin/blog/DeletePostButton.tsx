'use client';

import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { deletePost } from '@/lib/actions';

export default function DeletePostButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function handleDelete() {
    if (!confirm('Delete this post? This cannot be undone.')) return;
    startTransition(async () => {
      await deletePost(id);
      router.refresh();
    });
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={isPending}
      style={{ background: 'none', border: 'none', color: '#B91C1C', cursor: 'pointer', fontWeight: 600, padding: 0 }}
    >
      {isPending ? 'Deleting…' : 'Delete'}
    </button>
  );
}
