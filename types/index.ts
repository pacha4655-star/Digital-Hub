import type { Post, Submission, SubmissionStatus, SubmissionType, AdminUser } from '@prisma/client';

// Re-exported Prisma model types, kept in one place so components and
// route handlers import domain types from `@/types` rather than reaching
// into `@prisma/client` directly.
export type { Post, Submission, SubmissionStatus, SubmissionType, AdminUser };

/** Shape returned by GET /api/blog. */
export type PublicBlogPost = Pick<
  Post,
  'slug' | 'title' | 'excerpt' | 'tag' | 'coverImage' | 'authorName' | 'publishedAt'
>;

/** Shared shape for the contact/booking and newsletter forms. */
export interface ContactFormValues {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
  source?: string;
}

export interface ApiSuccess {
  message: string;
}

export interface ApiError {
  error: string;
}
