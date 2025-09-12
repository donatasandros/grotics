import { world } from "@/db/schema";
import { protectedProcedure } from "@/trpc/init";
import { z } from "zod";

export const worldRouter = {
  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(world).values({
        name: input.name,
        id: "loxas",
        userId: ctx.session.user.id,
        botMode: "full",
      });
    }),
};
