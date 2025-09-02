import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/auth")({
  beforeLoad: ({ context: { session } }) => {
    if (session?.user) {
      throw redirect({
        to: "/",
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="relative px-4 py-12 md:px-8 md:pt-24">
      <Outlet />
    </section>
  );
}
