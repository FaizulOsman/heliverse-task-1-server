import { z } from 'zod';

const createUserZodValidation = z.object({
  body: z.object({
    first_name: z.string(),
    last_name: z.string(),
    email: z.string(),
    gender: z.string(),
    avatar: z.string(),
    domain: z.string(),
    available: z.boolean(),
  }),
});

const updateUserZodValidation = z.object({
  body: z.object({
    first_name: z.string().optional(),
    last_name: z.string().optional(),
    email: z.string().optional(),
    gender: z.string().optional(),
    avatar: z.string().optional(),
    domain: z.string().optional(),
    available: z.boolean().optional(),
  }),
});

export const UserValidation = {
  createUserZodValidation,
  updateUserZodValidation,
};
