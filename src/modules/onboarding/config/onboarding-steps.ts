import { createWorldSchema } from "@/schemas/world";
import z from "zod";

export const onboardingSteps = [
  {
    id: "welcome",
    schema: z.object({}),
  },
  {
    id: "add-world",
    schema: createWorldSchema,
  },
  {
    id: "scanning-world",
    schema: z.object({}),
  },
  {
    id: "complete",
    schema: z.object({}),
  },
] as const;
