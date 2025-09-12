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
        userId: ctx.session.user.id,
      });
    }),
    status: protectedProcedure.input(z.object({name: z.string()})).query(async ({ctx, input}) => {
        const statuses = ["connecting", "scanning", "setting"]

        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)]

        return randomStatus



    })
};
