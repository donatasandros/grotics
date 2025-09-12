import { createTRPCRouter } from "@/trpc/init";
import { transactionRouter } from "@/trpc/router/transaction";
import { userRouter } from "@/trpc/router/user";
import { worldRouter } from "@/trpc/router/world";

export const appRouter = createTRPCRouter({
  user: userRouter,
  transaction: transactionRouter,
  world: worldRouter,
});

export type AppRouter = typeof appRouter;
