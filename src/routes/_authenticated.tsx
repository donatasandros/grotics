import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/modules/dashboard/components/app-sidebar";
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
    <SidebarProvider>
      <div className="flex flex-col bg-white lg:flex-row dark:bg-gray-950 min-h-screen">
        {/* <div className="z-50 hidden lg:fixed lg:inset-y-0 lg:left-0 lg:flex">
          <aside>sidebar</aside>
        </div> */}
        <AppSidebar />
        <header className="flex h-16 items-center justify-between border-b border-red-500 bg-white dark:bg-gray-950 py-3 pr-2 pl-4 lg:hidden">
          header
        </header>
        <main className="flex flex-1 flex-col gap-8 pt-8 pb-12">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
