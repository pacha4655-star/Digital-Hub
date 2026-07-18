'use client';

import { useState } from 'react';
import { updateSubmissionStatus } from '@/lib/actions';

type Status = 'new' | 'contacted' | 'archived';

export default function StatusSelect({ id, initialStatus }: { id: string; initialStatus: Status }) {
  const [status, setStatus] = useState<Status>(initialStatus);
  const [saving, setSaving] = useState(false);

  async function handleChange(next: Status) {
    setStatus(next);
    setSaving(true);
    try {
      await updateSubmissionStatus(id, next);
    } finally {
      setSaving(false);
    }
  }

  return (
    <select
      value={status}
      disabled={saving}
      onChange={(e) => handleChange(e.target.value as Status)}
      className={`badge badge-${status}`}
      style={{ border: 'none', cursor: 'pointer' }}
    >
      <option value="new">New</option>
      <option value="contacted">Contacted</option>
      <option value="archived">Archived</option>
    </select>
  );
}
