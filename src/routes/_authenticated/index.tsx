import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTRPC } from "@/trpc/react";
import { getInitials } from "@/utils/get-initials";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, Link, useRouteContext } from "@tanstack/react-router";
import {
  AlertTriangleIcon,
  ChevronRightIcon,
  CircleDollarSignIcon,
  PackageCheckIcon,
} from "lucide-react";

export const Route = createFileRoute("/_authenticated/")({
  loader: async ({ context }) =>
    await context.queryClient.ensureQueryData(
      context.trpc.transaction.getAll.queryOptions(),
    ),
  component: RouteComponent,
});

function RouteComponent() {
  const trpc = useTRPC();
  const { data: transactions } = useSuspenseQuery(
    trpc.transaction.getAll.queryOptions(),
  );

  const {
    session: { user },
  } = useRouteContext({
    from: "/_authenticated",
  });

  const mockCards = [
    {
      title: "Total earnings",
      value: "2,430 WLS",
      icon: CircleDollarSignIcon,
    },
    {
      title: "Items sold",
      value: "157",
      icon: PackageCheckIcon,
    },
    {
      title: "Stock alerts",
      value: "3",
      icon: AlertTriangleIcon,
    },
  ];

  return (
    <div className="py-8 px-4 md:p-8 space-y-8">
      <pre>{JSON.stringify(transactions, null, 2)}</pre>
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
      <section className="flex items-center justify-between gap-5 flex-wrap">
        {mockCards.map((card) => (
          <div
            key={card.title}
            className="p-5 max-lg:px-4 min-w-80 flex-1 max-lg:flex-col flex gap-4 rounded-xl border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-xs border"
          >
            <div className="flex items-center justify-center size-10 bg-white shrink-0 rounded-lg ring-1 ring-inset ring-gray-300 dark:ring-gray-700 dark:bg-gray-950 shadow-xs-skeumorphic">
              <card.icon className="size-5 text-gray-700 dark:text-gray-300" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-sm whitespace-nowrap text-gray-600 dark:text-gray-400">
                {card.title}
              </span>
              <span className="text-gray-900 whitespace-nowrap font-semibold dark:text-gray-50 text-3xl">
                {card.value}
              </span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
