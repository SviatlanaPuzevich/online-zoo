import { z } from 'zod';

export const contactSchema = z.object({
  userName: z
    .string()
    .min(1,'Name is required')
    .min(3, 'At least 3 characters are required')
    .max(30, 'Too long!'),

  email: z
    .string()
    .min(1,'Email is required')
    .email('Invalid email address'),
  subject: z
    .string()
    .nonempty('Subject is required')
    .min(3, 'At least 3 characters are required')
    .max(30, 'Too long!'),
  message: z
    .string()
    .min(1,'Message is required')
    .min(6, 'At least 6 characters are required'),
});

export type ContactFormData = z.infer<typeof contactSchema>;