import { user } from "@/db/schema";
import { protectedProcedure } from "@/trpc/init";
import type { TRPCRouterRecord } from "@trpc/server";
import { eq } from "drizzle-orm";

export const userRouter = {
  finishOnboarding: protectedProcedure.mutation(
    async ({ ctx }) =>
      await ctx.db
        .update(user)
        .set({ hasOnboarded: true })
        .where(eq(user.id, ctx.session.user.id)),
  ),
} satisfies TRPCRouterRecord;
