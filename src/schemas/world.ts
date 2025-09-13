import { z } from "zod";

export const createWorldSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "World name is required")
    .max(24, "World name must be at most 24 characters")
    .regex(/^[a-zA-Z0-9]+$/, "World name can only contain letters and numbers"),
});

export type CreateWorldSchema = z.infer<typeof createWorldSchema>;
