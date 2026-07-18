import AdminShell from '@/components/AdminShell';
import PostForm from '../PostForm';
import { createPost } from '@/lib/actions';

export default function NewPostPage() {
  return (
    <AdminShell>
      <h1 style={{ fontFamily: 'var(--font-poppins)', fontSize: 26, marginBottom: 24 }}>New post</h1>
      <PostForm action={createPost} submitLabel="Publish / Save" />
    </AdminShell>
  );
}
