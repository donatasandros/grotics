import { z } from "zod";

export const createWorldSchema = z.object({
  name: z.string().min(1),
});

export type CreateWorldSchema = z.infer<typeof createWorldSchema>;
