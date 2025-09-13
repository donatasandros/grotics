import { world } from "@/db/schema";
import { createWorldSchema } from "@/schemas/world";
import { protectedProcedure } from "@/trpc/init";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

export const worldRouter = {
  create: protectedProcedure
    .input(createWorldSchema)
    .mutation(async ({ ctx, input }) => {
      const existingWorld = await ctx.db.query.world.findFirst({
        where: (w, { eq }) => eq(w.name, input.name),
      });

      if (existingWorld) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message:
            "A world with this name already exists. Please choose a different name.",
        });
      }

      const [created] = await ctx.db
        .insert(world)
        .values({
          name: input.name,
          userId: ctx.session.user.id,
        })
        .returning({ id: world.id, name: world.name });

      return created;
    }),
  status: protectedProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ ctx, input }) => {
      const statuses = ["connecting", "scanning", "setting"];

      const randomStatus =
        statuses[Math.floor(Math.random() * statuses.length)];

      return randomStatus;
    }),
};
