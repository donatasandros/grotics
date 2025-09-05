import { createTRPCRouter } from "@/trpc/init";
import { transactionRouter } from "@/trpc/router/transaction";
import { userRouter } from "@/trpc/router/user";

export const appRouter = createTRPCRouter({
  user: userRouter,
  transaction: transactionRouter,
});

export type AppRouter = typeof appRouter;
