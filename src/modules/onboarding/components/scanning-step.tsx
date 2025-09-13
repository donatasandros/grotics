import { ConcentricCircles } from "@/components/decorations";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Schema1Values } from "@/modules/onboarding/components/onboarding-modal";
import { useTRPC } from "@/trpc/react";
import { useQuery } from "@tanstack/react-query";
import { CircleCheckIcon, Loader2Icon, SearchIcon } from "lucide-react";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

interface ScanningStepProps {
  next: () => void;
}

const steps = [
  { label: "Connecting to the world", key: "connecting" },
  { label: "Scanning vending machines", key: "scanning" },
  { label: "Setting up dashboard", key: "setting" },
];

export default function ScanningStep({ next }: ScanningStepProps) {
  const { getValues } = useFormContext<Schema1Values>();
  const trpc = useTRPC();

  const { worldName } = getValues();

  const { data, isRefetching } = useQuery(
    trpc.world.status.queryOptions(
      {
        name: worldName,
      },
      {
        refetchInterval: 3000,
      },
    ),
  );

  const currentStepIndex = steps.findIndex((s) => s.key === data);

  useEffect(() => {
    if (data === "finished") {
      next();
    }
  }, [data, next]);

  return (
    <>
      <DialogHeader className="mb-5">
        <div className="relative mb-4">
          <div className="size-12 mx-auto bg-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 dark:bg-gray-950 shadow-xs-skeumorphic rounded-[10px] flex items-center justify-center">
            <SearchIcon className="size-6  text-gray-700 dark:text-gray-300" />
          </div>
          <ConcentricCircles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />
        </div>
        <div className="text-center space-y-0.5 z-10">
          <DialogTitle>Scanning your shop</DialogTitle>
          <DialogDescription>
            We’re checking your vending machines in{" "}
            <span className="font-semibold">{worldName}</span>. This usually
            takes less than a minute.
          </DialogDescription>
        </div>
      </DialogHeader>
      <div className="mb-5 flex flex-col gap-3 z-10">
        {steps.map((step, index) => (
          <div key={step.key} className="flex items-center gap-2">
            {index === currentStepIndex ? (
              <Loader2Icon className="size-5 text-gray-300 dark:text-gray-600 animate-spin" />
            ) : index < currentStepIndex ? (
              <CircleCheckIcon className="size-5 text-brand-600 dark:text-brand-600" />
            ) : (
              <div className="size-5" />
            )}
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
