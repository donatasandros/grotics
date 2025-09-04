import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/utils/get-initials";
import { createFileRoute, Link, useRouteContext } from "@tanstack/react-router";
import { ChevronRightIcon } from "lucide-react";

export const Route = createFileRoute("/_authenticated/")({
  component: RouteComponent,
});

function RouteComponent() {
  const {
    session: { user },
  } = useRouteContext({
    from: "/_authenticated",
  });

  return (
    <div className="py-8 px-4 md:p-8">
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
              className="py-1 px-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
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
    </div>
  );
}
