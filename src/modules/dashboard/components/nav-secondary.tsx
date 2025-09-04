import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import type { NavItem } from "@/modules/dashboard/constants/navigation";
import { Link, useLocation } from "@tanstack/react-router";
import type React from "react";

type NavMainProps = {
  items: NavItem[];
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>;

export default function NavSecondary({ items, ...props }: NavMainProps) {
  const pathname = useLocation({
    select: (location) => location.pathname,
  });

  return (
    <SidebarGroup {...props}>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              asChild
              tooltip={item.title}
              isActive={pathname === item.url}
            >
              {item.external ? (
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              ) : (
                <Link to={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              )}
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
