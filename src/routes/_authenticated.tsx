import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
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
      <SidebarInset className="p-8 peer-data-[state=collapsed]:pl-[calc(72px+2rem)]">
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-red-500 bg-white dark:bg-gray-950 py-3 pr-2 pl-4 md:hidden">
          {/* <SidebarTrigger /> */}
          header
        </header>
        <div className="flex flex-col text-black dark:text-white  min-h-screen">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
