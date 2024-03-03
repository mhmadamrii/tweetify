import * as z from 'zod';

export const tweetSchema = z.object({
  text: z.string().min(2).max(225),
  imageUrl: z.string().optional(),
  userId: z.string(),
});
