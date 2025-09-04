import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { getInitials } from "@/utils/get-initials";
import {
  DropdownMenuItemIndicator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@radix-ui/react-dropdown-menu";
import { useRouter } from "@tanstack/react-router";
import type { User } from "better-auth";
import {
  CircleIcon,
  EllipsisVerticalIcon,
  LogOutIcon,
  SettingsIcon,
} from "lucide-react";

interface NavUserProps {
  user: User;
}

export default function NavUser({ user }: NavUserProps) {
  const { isMobile, state } = useSidebar();
  const router = useRouter();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            className={cn(
              "flex relative w-full gap-2 items-center transition-[width,height,padding]",
              (state !== "collapsed" || isMobile) &&
                "p-3 border border-gray-200 h-16 dark:border-gray-800  bg-white dark:bg-gray-900 rounded-xl",
            )}
          >
            <Avatar className="size-10">
              <AvatarImage src={user.image ?? undefined} alt={user.name} />
              <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
            </Avatar>
            <div
              className={cn(
                "grid text-left flex-1 text-sm leading-tight",
                state === "collapsed" && !isMobile && "hidden",
              )}
            >
              <span className="truncate font-semibold text-gray-900 dark:text-gray-50">
                {user.name}
              </span>
              <span className="truncate text-gray-600 dark:text-gray-400">
                {user.email}
              </span>
            </div>
            <button
              type="button"
              className={cn(
                "p-1.5 absolute right-2 top-2 text-gray-400 dark:text-gray-600",
                state === "collapsed" && !isMobile && "hidden",
              )}
            >
              <EllipsisVerticalIcon className="size-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side={isMobile ? "top" : "right"}
            sideOffset={8}
            align="end"
            className="pb-1.5  w-[16.5rem] "
          >
            <DropdownMenuGroup>
              <DropdownMenuRadioGroup
                value={user.email}
                className="pt-1.5 space-y-0.5"
              >
                <DropdownMenuRadioItem
                  value={user.email}
                  className="flex justify-between px-2 group gap-2 py-1.5 rounded-md focus:bg-gray-50 dark:focus:bg-gray-800 outline-0"
                >
                  <div className="flex items-center gap-2">
                    <Avatar className="size-10">
                      <AvatarImage
                        src={user.image ?? undefined}
                        alt={user.name}
                      />
                      <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                    </Avatar>
                    <div className="grid text-left flex-1 text-sm leading-tight">
                      <span className="truncate font-semibold text-gray-900 dark:text-gray-50">
                        {user.name}
                      </span>
                      <span className="truncate text-gray-600 dark:text-gray-400">
                        {user.email}
                      </span>
                    </div>
                  </div>
                  <div className="bg-white group-data-[state=checked]:border-brand-600 dark:group-data-[state=checked]:border-brand-600 group-data-[state=checked]:bg-brand-600 dark:group-data-[state=checked]:bg-brand-600 dark:bg-gray-950 border border-gray-300 dark:border-gray-700 flex items-center justify-center  size-4 shrink-0 rounded-full">
                    <DropdownMenuItemIndicator>
                      <CircleIcon className="size-1.5 fill-white stroke-0" />
                    </DropdownMenuItemIndicator>
                  </div>
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <SettingsIcon />
                Account settings
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={async () => {
                  await authClient.signOut({
                    fetchOptions: {
                      onSuccess: () => {
                        router.invalidate();
                      },
                    },
                  });
                }}
              >
                <LogOutIcon />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
