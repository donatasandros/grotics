import Logo from "@/components/logo";
import { useSidebar } from "@/components/ui/sidebar";
import { Link } from "@tanstack/react-router";
import { MenuIcon } from "lucide-react";

export default function AppHeader() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 py-3 pr-2 pl-4 md:hidden">
      <Link to="/">
        <Logo type="combination" className="w-auto" />
      </Link>
      <button
        type="button"
        onClick={toggleSidebar}
        className="p-2 rounded-lg outline-brand-500 dark:outline-brand-400 focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200"
      >
        <MenuIcon className="size-6" />
      </button>
    </header>
  );
}
