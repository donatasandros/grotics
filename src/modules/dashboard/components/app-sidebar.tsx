import Logo from "@/components/logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import NavMain from "@/modules/dashboard/components/nav-main";
import NavSecondary from "@/modules/dashboard/components/nav-secondary";
import NavUser from "@/modules/dashboard/components/nav-user";
import {
  NAV_MAIN,
  NAV_SECONDARY,
} from "@/modules/dashboard/constants/navigation";
import { Link, useRouteContext } from "@tanstack/react-router";

export default function AppSidebar() {
  const { state, isMobile } = useSidebar();

  const { session } = useRouteContext({
    from: "/_authenticated",
  });

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className=" flex-row flex items-center justify-between border-b bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800">
        <Link to="/">
          <Logo className="size-8 group-data-[state=expanded]:hidden max-md:hidden" />
          <Logo
            type="combination"
            className="h-8 w-fit group-data-[state=collapsed]:hidden"
          />
        </Link>
        {state === "expanded" && <SidebarTrigger />}
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={NAV_MAIN} />
        <NavSecondary items={NAV_SECONDARY} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={session.user} />
      </SidebarFooter>
      {state === "collapsed" && !isMobile && (
        <SidebarTrigger className="absolute -right-3.5 top-4.5 z-10 " />
      )}
    </Sidebar>
  );
}
