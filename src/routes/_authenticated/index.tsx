import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="px-4 lg:px-8">section 1</div>
    </>
  );
}

// dashboard, transactions, shops, alerts, settings
// modules/dashboard
// components/sidebar
