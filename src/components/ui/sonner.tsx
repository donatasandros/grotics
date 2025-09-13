import { cn } from "@/lib/utils";
import {
  CircleAlertIcon,
  CircleCheckIcon,
  InfoIcon,
  XIcon,
} from "lucide-react";
import { Toaster as Sonner, ToasterProps, toast as sonnerToast } from "sonner";
import { Button } from "./button";

interface ToastProps {
  id: string | number;
  type: "primary" | "success" | "warning" | "error";
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  showDismiss?: boolean;
}

const toastIcons = {
  primary: <InfoIcon />,
  success: <CircleCheckIcon />,
  warning: <CircleAlertIcon />,
  error: <CircleAlertIcon />,
} as const;

function Toast(props: ToastProps) {
  const { type, title, description, action, id, showDismiss = false } = props;

  const Icon = toastIcons[type];

  return (
    <div className="group relative pointer-events-auto flex flex-col gap-4 md:flex-row rounded-xl bg-white dark:bg-gray-900 border border-black/[0.08] dark:border-gray-800 shadow-lg min-w-full md:w-[400px] items-start p-4 pr-10">
      <div
        className={cn(
          "relative flex shrink-0 items-center justify-center before:absolute before:rounded-full before:border-2 after:absolute after:rounded-full after:border-2 before:size-7 after:size-9.5 [&>svg]:size-5",
          {
            "text-brand-600 dark:text-brand-500 before:border-brand-600/30 dark:before:border-brand-500/30 after:border-brand-600/10 dark:after:border-brand-500/10":
              type === "primary",
            "text-success-600 dark:text-success-500 before:border-success-600/30 dark:before:border-success-500/30 after:border-success-600/10 dark:after:border-success-500/10":
              type === "success",
            "text-warning-600 dark:text-warning-500 before:border-warning-600/30 dark:before:border-warning-500/30 after:border-warning-600/10 dark:after:border-warning-500/10":
              type === "warning",
            "text-error-600 dark:text-error-500 before:border-error-600/30 dark:before:border-error-500/30 after:border-error-600/10 dark:after:border-error-500/10":
              type === "error",
          },
        )}
      >
        {Icon}
      </div>
      <div className="flex flex-1 flex-col gap-3 md:pr-8 md:pt-0.5">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold text-gray-900 dark:text-white">
            {title}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {description}
          </p>
        </div>
        {(action?.label || showDismiss) && (
          <div className="flex gap-3">
            {showDismiss && (
              <Button
                variant="linkGray"
                size="sm"
                onClick={() => sonnerToast.dismiss(id)}
              >
                Dismiss
              </Button>
            )}
            {action?.label && (
              <Button variant="linkColor" size="sm" onClick={action.onClick}>
                {action.label}
              </Button>
            )}
          </div>
        )}
      </div>
      <Button
        variant="tertiary"
        size="sm"
        data-icon-only
        className="absolute right-2 top-2"
        onClick={() => sonnerToast.dismiss(id)}
      >
        <XIcon />
      </Button>
    </div>
  );
}

function toast(toast: Omit<ToastProps, "id">) {
  return sonnerToast.custom((id) => (
    <Toast
      id={id}
      type={toast.type}
      title={toast.title}
      description={toast.description}
      action={toast.action}
      showDismiss={toast.showDismiss}
    />
  ));
}

const Toaster = ({ ...props }: ToasterProps) => {
  return <Sonner className="max-md:*:w-full" gap={14} {...props} />;
};

export { Toaster, toast };
