import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import OverviewCards from "@/modules/dashboard/components/overview-cards";
import { useTRPC } from "@/trpc/react";
import { getInitials } from "@/utils/get-initials";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, Link, useRouteContext } from "@tanstack/react-router";
import { ChevronDownIcon, ChevronRightIcon, ListFilterIcon } from "lucide-react";

export const Route = createFileRoute("/_authenticated/")({
  loader: async ({ context }) =>
    await context.queryClient.ensureQueryData(
      context.trpc.transaction.getAll.queryOptions(),
    ),
  component: RouteComponent,
});

function RouteComponent() {
  const trpc = useTRPC();

  const {
    session: { user },
  } = useRouteContext({
    from: "/_authenticated",
  });

  const { data: transactions } = useSuspenseQuery(
    trpc.transaction.getAll.queryOptions(),
  );

  return (
    <div className="py-8 px-4 md:p-8 space-y-8">
      <section className="space-y-4">
        <div className="flex items-center gap-1 max-md:hidden">
          <div className="flex items-center gap-1">
            <Avatar className="size-7 rounded-md">
              <AvatarImage src={user.image ?? undefined} alt={user.name} />
              <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
            </Avatar>
            <div className="py-1 px-2">
              <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                {user.name}
              </span>
            </div>
          </div>
          <ChevronRightIcon className="size-4" />
          <div>
            <Link
              to="/"
              className="py-1 px-2 rounded-md text-sm bg-gray-50 dark:bg-gray-800 font-semibold text-gray-700 dark:text-gray-300"
            >
              Dashboard
            </Link>
          </div>
        </div>
        <div className="space-y-0.5 md:space-y-1">
          <h1 className="font-semibold text-xl md:text-2xl text-gray-900 dark:text-gray-50">
            Welcome back, {user.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Here’s an overview of your shops and the stock you’re keeping track
            of.
          </p>
        </div>
      </section>
      <OverviewCards items={transactions} />
      <section className="flex flex-col">
        <div className="flex md:justify-between flex-col md:flex-row gap-4 md:items-center">
          <div className="space-y-2">
            {/* <p>net revenue</p> */}
            <Button variant="linkGray" size='sm' className="[&>svg]:size-4" iconTrailing={ChevronDownIcon}>Net revenue</Button>
            <p className="font-semibold text-gray-900 dark:text-gray-50 text-3xl">100 WLS</p>
          </div>
          <div className="flex gap-3">
            <div className="flex">
              <p>12 months</p>
              <p>30 days</p>
            </div>
            <Button variant="secondary" size="sm" iconLeading={ListFilterIcon}>Filters</Button>
          </div>
        </div>
        <div>graph</div>
      </section>
    </div>
  );
}
