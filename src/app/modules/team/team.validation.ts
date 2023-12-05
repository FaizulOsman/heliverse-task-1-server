import { z } from 'zod';

const userSchema = z.object({
  id: z.string(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  email: z.string().optional(),
  gender: z.string().optional(),
  avatar: z.string().optional(),
  domain: z.string().optional(),
  available: z.boolean().optional(),
});

const createTeamZodValidation = z.object({
  body: z.object({
    team_name: z.string(),
    users: z.array(userSchema),
  }),
});

export const TeamValidation = {
  createTeamZodValidation,
};
