import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import {
    Children,
    cloneElement,
    createContext,
    type ReactElement,
    useContext,
    useState,
} from "react";

const buttonGroupVariants = cva(
  "group flex data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:items-center data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start",
  {
    variants: {
      variant: {
        minimal:
          "gap-0.5 rounded-lg border border-gray-200 bg-gray-50 data-[orientation=horizontal]:h-9 dark:border-gray-800 dark:bg-gray-950",
        underline:
          "relative data-[orientation=vertical]:before:hidden data-[orientation=horizontal]:h-8 data-[orientation=horizontal]:gap-3 data-[orientation=vertical]:gap-2 before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-gray-200 dark:before:bg-gray-800",
      },
    },
    defaultVariants: {
      variant: "minimal",
    },
  },
);

const buttonGroupItemVariants = cva(
  "text-sm font-semibold group-data-[orientation=vertical]:w-full group-data-[orientation=vertical]:text-left",
  {
    variants: {
      variant: {
        minimal: [
          "h-full rounded-lg px-3 py-2 text-gray-500",
          "hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300",
          "focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-brand-400 not-[aria-checked=true]:focus-visible:outline-0",
          "aria-checked:bg-white aria-checked:text-gray-700 aria-checked:shadow-xs aria-checked:outline aria-checked:outline-gray-300",
          "dark:aria-checked:bg-gray-900 dark:aria-checked:text-gray-300 dark:aria-checked:outline-gray-700",
        ].join(" "),
        underline: [
          "z-10 h-max rounded-none border-transparent text-gray-500",
          "hover:border-brand-600 hover:text-brand-700 dark:text-gray-400 dark:hover:border-gray-300 dark:hover:text-gray-300",
          "focus-visible:-outline-offset-2 focus-visible:outline-2 focus-visible:outline-brand-500 dark:focus-visible:outline-brand-400",
          "group-data-[orientation=horizontal]:border-b-2 group-data-[orientation=horizontal]:px-1 group-data-[orientation=horizontal]:pb-2.5",
          "group-data-[orientation=vertical]:border-l-2 group-data-[orientation=vertical]:py-0.5 group-data-[orientation=vertical]:pl-2.5 group-data-[orientation=vertical]:pr-3",
          "aria-checked:border-brand-600 aria-checked:text-brand-700 dark:aria-checked:border-gray-300 dark:aria-checked:text-gray-300",
        ].join(" "),
      },
    },
    defaultVariants: {
      variant: "minimal",
    },
  },
);

type ButtonGroupContextType = {
  selectedValue?: string;
  onSelect: (value: string) => void;
};

const ButtonGroupContext = createContext<ButtonGroupContextType | null>(null);

type ButtonGroupProps = React.ComponentProps<"div"> &
  VariantProps<typeof buttonGroupVariants> & {
    children: ReactElement<ButtonGroupItemProps>[];
    onSelect?: (value: string) => void;
    value: string;
    orientation?: "horizontal" | "vertical";
  };

export const ButtonGroup = ({
  className,
  orientation = "horizontal",
  children,
  variant,
  onSelect,
  value,
}: ButtonGroupProps) => {
  const [selectedValue, setSelectedValue] = useState(value);

  const handleSelect = (val: string) => {
    setSelectedValue(val);
    onSelect?.(val);
  };

  const childrenWithProps = Children.map(children, (child) => {
    if (
      child &&
      typeof child === "object" &&
      "type" in child &&
      child.type === ButtonGroupItem
    ) {
      const childProps = child.props as ButtonGroupItemProps;
      return cloneElement(child, {
        ...childProps,
        variant: childProps.variant || variant,
      } as ButtonGroupItemProps);
    }
    return child;
  });

  return (
    <ButtonGroupContext.Provider
      value={{ selectedValue, onSelect: handleSelect }}
    >
      <div
        data-orientation={orientation}
        className={cn(buttonGroupVariants({ variant }), className)}
      >
        {childrenWithProps}
      </div>
    </ButtonGroupContext.Provider>
  );
};

export type ButtonGroupItemProps = Omit<
  React.ComponentProps<"button">,
  "onClick"
> &
  VariantProps<typeof buttonGroupItemVariants> & {
    value: string;
  };

export const ButtonGroupItem = ({
  children,
  variant,
  className,
  value,
  ...props
}: ButtonGroupItemProps) => {
  const context = useContext(ButtonGroupContext);

  if (!context) {
    throw new Error("ButtonGroupItem must be used within a ButtonGroup");
  }

  const { selectedValue, onSelect } = context;

  return (
    <button
      type="button"
      aria-checked={selectedValue === value}
      className={cn(buttonGroupItemVariants({ variant }), className)}
      onClick={() => onSelect(value)}
      {...props}
    >
      {children}
    </button>
  );
};
