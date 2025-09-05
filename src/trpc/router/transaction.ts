import { transaction, world } from "@/db/schema";
import { protectedProcedure } from "@/trpc/init";
import type { TRPCRouterRecord } from "@trpc/server";
import { eq } from "drizzle-orm";

export const transactionRouter = {
  getAll: protectedProcedure.query(async ({ ctx }) =>
    (
      await ctx.db
        .select({ transaction })
        .from(transaction)
        .innerJoin(world, eq(transaction.worldId, world.id))
        .where(eq(world.userId, ctx.session.user.id))
    ).map((row) => row.transaction),
  ),
} satisfies TRPCRouterRecord;
