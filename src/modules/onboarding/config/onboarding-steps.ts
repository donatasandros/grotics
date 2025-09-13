import { createWorldSchema } from "@/schemas/world";
import z from "zod";

export const onboardingSteps = [
  {
    id: "onboarding-welcome",
    schema: z.object({}),
  },
  {
    id: "onboarding-world",
    schema: createWorldSchema,
  },
  {
    id: "onboarding-scanning",
    schema: z.object({}),
  },
  {
    id: "onboarding-success",
    schema: z.object({}),
  },
] as const;
