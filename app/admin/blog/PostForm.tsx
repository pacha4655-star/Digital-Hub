'use client';

type PostFormValues = {
  title: string;
  excerpt: string;
  content: string;
  tag: string;
  coverImage: string;
  published: boolean;
};

export default function PostForm({
  action,
  initialValues,
  submitLabel,
}: {
  action: (formData: FormData) => void;
  initialValues?: Partial<PostFormValues>;
  submitLabel: string;
}) {
  return (
    <form action={action} className="admin-form admin-card">
      <label htmlFor="title">Title</label>
      <input id="title" name="title" type="text" required defaultValue={initialValues?.title} />

      <label htmlFor="excerpt">Excerpt (shown on the blog list)</label>
      <input id="excerpt" name="excerpt" type="text" defaultValue={initialValues?.excerpt} />

      <label htmlFor="tag">Tag / category</label>
      <input id="tag" name="tag" type="text" placeholder="e.g. SEO" defaultValue={initialValues?.tag} />

      <label htmlFor="coverImage">Cover image URL (optional)</label>
      <input id="coverImage" name="coverImage" type="url" placeholder="https://…" defaultValue={initialValues?.coverImage} />

      <label htmlFor="content">Content (Markdown supported)</label>
      <textarea id="content" name="content" required defaultValue={initialValues?.content} />

      <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 20 }}>
        <input
          type="checkbox"
          name="published"
          defaultChecked={initialValues?.published ?? false}
          style={{ width: 'auto' }}
        />
        Published (visible on the public blog)
      </label>

      <button type="submit" className="btn btn-primary" style={{ marginTop: 24 }}>
        {submitLabel}
      </button>
    </form>
  );
}
