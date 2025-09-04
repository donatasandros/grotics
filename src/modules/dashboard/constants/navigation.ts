import {
  BanknoteArrowUpIcon,
  BellIcon,
  ChartColumnIncreasingIcon,
  LifeBuoyIcon,
  type LucideIcon,
  PanelsLeftBottomIcon,
  PlugIcon,
  SettingsIcon,
  StoreIcon,
} from "lucide-react";

export type NavItem = {
  title: string;
  url: string;
  external?: boolean;
  icon: LucideIcon;
};

export const NAV_MAIN: NavItem[] = [
  {
    title: "Dashboard",
    url: "/",
    icon: PanelsLeftBottomIcon,
  },
  {
    title: "Transactions",
    url: "/transactions",
    icon: BanknoteArrowUpIcon,
  },
  {
    title: "Shops",
    url: "/shops",
    icon: StoreIcon,
  },
  {
    title: "Alerts",
    url: "/alerts",
    icon: BellIcon,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: ChartColumnIncreasingIcon,
  },
  {
    title: "Integrations",
    url: "/integrations",
    icon: PlugIcon,
  },
];

export const NAV_SECONDARY: NavItem[] = [
  {
    title: "Support",
    url: "https://discord.gg",
    external: true,
    icon: LifeBuoyIcon,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: SettingsIcon,
  },
];
