import { cn } from "@/lib/utils";
import { isReactComponent } from "@/utils/is-react-component";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2Icon } from "lucide-react";
import * as React from "react";

const buttonVariants = cva(
  "group relative inline-flex h-max items-center justify-center whitespace-nowrap before:absolute outline-brand-500 dark:outline-brand-400 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:text-gray-400 dark:disabled:text-gray-500 [&>svg]:pointer-events-none *:[&>svg]:size-5 [&>svg]:shrink-0",
  {
    variants: {
      size: {
        sm: "gap-1 rounded-lg px-3 py-2 text-sm font-semibold before:rounded-[7px] data-icon-only:p-2",
        md: "gap-1 rounded-lg px-3.5 py-2.5 text-sm font-semibold before:rounded-[7px] data-icon-only:p-2.5",
        lg: "gap-1.5 rounded-lg px-4 py-2.5 text-base font-semibold before:rounded-[7px] data-icon-only:p-3",
        xl: "gap-1.5 rounded-lg px-4.5 py-3 text-base font-semibold before:rounded-[7px] data-icon-only:p-3.5",
      },
      variant: {
        primary:
          "bg-brand-600 dark:bg-brand-600 text-white shadow-xs-skeumorphic ring-1 ring-transparent ring-inset hover:bg-brand-700 dark:hover:bg-brand-500 before:absolute before:inset-px before:border before:border-white/12 before:mask-b-from-0% disabled:bg-gray-100 dark:disabled:bg-gray-800 disabled:shadow-xs disabled:ring-gray-200 dark:disabled:ring-gray-800",
        secondary:
          "bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-300 shadow-xs-skeumorphic ring-1 ring-gray-300 dark:ring-gray-700 ring-inset hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-800 dark:hover:text-gray-200 disabled:shadow-xs disabled:ring-gray-200 dark:disabled:ring-gray-800",
        tertiary:
          "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800",
        linkGray:
          "text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:underline hover:underline-offset-2 p-0! rounded",
        linkColor:
          "text-brand-700 dark:text-gray-300 hover:text-brand-800 dark:hover:text-gray-300 hover:underline hover:underline-offset-2 p-0! rounded",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  isLoading,
  iconLeading: IconLeading,
  iconTrailing: IconTrailing,
  children,
  disabled,
  ...otherProps
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    isLoading?: boolean;
    iconLeading?: React.FC<{ className?: string }> | React.ReactNode;
    iconTrailing?: React.FC<{ className?: string }> | React.ReactNode;
  }) {
  const href = "href" in otherProps ? otherProps.href : undefined;
  const Comp = href ? "a" : asChild ? Slot : "button";

  const isIcon = (IconLeading || IconTrailing) && !children;

  let props = {};

  if (href) {
    props = {
      ...otherProps,
      href: disabled ? undefined : href,
      ...(disabled ? { "data-rac": true, "data-disabled": true } : {}),
    };
  } else {
    props = {
      ...otherProps,
      type: otherProps.type || "button",
      disabled: isLoading || disabled,
    };
  }

  return (
    <Comp
      data-icon-only={isIcon ? true : undefined}
      data-slot="button"
      className={cn(buttonVariants({ size, variant, className }))}
      {...props}
    >
      {React.isValidElement(IconLeading) && IconLeading}
      {isReactComponent(IconLeading) && <IconLeading />}
      {isLoading ? (
        <Loader2Icon className={cn("animate-spin")} />
      ) : (
        children && <span>{children}</span>
      )}
      {React.isValidElement(IconTrailing) && IconTrailing}
      {isReactComponent(IconTrailing) && <IconTrailing />}
    </Comp>
  );
}

export { Button, buttonVariants };
