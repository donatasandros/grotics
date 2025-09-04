import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppHeader from "@/modules/dashboard/components/app-header";
import AppSidebar from "@/modules/dashboard/components/app-sidebar";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { getCookie } from "@tanstack/react-start/server";

const getSidebarState = createServerFn({ method: "GET" }).handler(async () => {
  const state = getCookie("sidebar_state");

  return state === "true";
});

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async ({ context: { session } }) => {
    if (!session?.user) {
      throw redirect({
        to: "/auth/sign-in",
      });
    }

    const sidebarState = await getSidebarState();

    return {
      session,
      sidebarState,
    };
  },
  component: LayoutComponent,
});

function LayoutComponent() {
  const { sidebarState } = Route.useRouteContext();

  return (
    <SidebarProvider defaultOpen={sidebarState}>
      <AppSidebar />
      <SidebarInset className="md:peer-data-[state=collapsed]:pl-[calc(72px)] max-w-[1216px] mx-auto">
        <AppHeader />
        <div className="flex flex-col text-black dark:text-white  min-h-screen">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
