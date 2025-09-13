import type * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "placeholder:text-gray-500 text-gray-900 dark:text-gray-50 dark:placeholder:text-gray-400 ring-gray-300 dark:ring-gray-700 flex h-10 w-full min-w-0 rounded-lg ring-1 bg-white dark:bg-gray-950 px-3 py-2 outline-none shadow-xs disabled:pointer-events-none disabled:cursor-not-allowed",
        "focus-visible:ring-2 focus-visible:ring-brand-500 dark:focus-visible:ring-brand-400",
        "aria-invalid:ring-error-300 dark:aria-invalid:ring-error-500 aria-invalid:focus-visible:ring-error-500 dark:aria-invalid:focus-visible:ring-error-400",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
