import { z } from 'zod';

export const submissionSchema = z
  .object({
    type: z.enum(['booking', 'newsletter']),
    firstName: z.string().trim().min(1, 'First name is required').max(100),
    lastName: z.string().trim().max(100).optional().or(z.literal('')),
    email: z.string().trim().email('Please enter a valid email address').max(200),
    phone: z
      .string()
      .trim()
      .max(20)
      .regex(/^[0-9+\-()\s]{0,20}$/, 'Please enter a valid phone number')
      .optional()
      .or(z.literal('')),
    company: z.string().trim().max(150).optional().or(z.literal('')),
    service: z.string().trim().max(100).optional().or(z.literal('')),
    message: z.string().trim().max(4000).optional().or(z.literal('')),
    source: z.string().trim().max(100).optional().or(z.literal('')),
    // Honeypot field — real users never fill this in; bots often do.
    website: z.string().max(200).optional().or(z.literal('')),
  })
  .refine((data) => data.type !== 'booking' || data.firstName.length > 0, {
    message: 'First name is required',
    path: ['firstName'],
  });

export type SubmissionInput = z.infer<typeof submissionSchema>;
