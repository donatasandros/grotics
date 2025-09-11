import * as LabelPrimitive from "@radix-ui/react-label";
import type * as React from "react";

import { cn } from "@/lib/utils";

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "text-gray-700 flex dark:text-gray-300 text-sm font-medium select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed",
        className,
      )}
      {...props}
    />
  );
}

export { Label };
