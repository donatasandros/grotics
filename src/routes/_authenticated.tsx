import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: ({ context: { session } }) => {
    if (!session?.user) {
      throw redirect({
        to: "/auth/sign-in",
      });
    }
  },
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div className="flex flex-col h-screen">
      <main className="gap-2 p-4 flex-1">
        <Outlet />
      </main>
    </div>
  );
}
