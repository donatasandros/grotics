import { user } from "@/db/schema";
import { protectedProcedure } from "@/trpc/init";
import type { TRPCRouterRecord } from "@trpc/server";
import { eq } from "drizzle-orm";

export const userRouter = {
  completeOnboarding: protectedProcedure.mutation(async ({ ctx }) => {
    const [row] = await ctx.db
      .update(user)
      .set({ hasOnboarded: true })
      .where(eq(user.id, ctx.session.user.id))
      .returning({ id: user.id, hasOnboarded: user.hasOnboarded });

    return { user: row };
  }),
} satisfies TRPCRouterRecord;
