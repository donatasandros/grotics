import { ConcentricCircles } from "@/components/decorations";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import type { CreateWorldSchema } from "@/schemas/world";

import { useTRPC } from "@/trpc/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

import { CircleCheckIcon, Loader2Icon, SearchIcon } from "lucide-react";

type ScanningStep = {
  label: string;
  key: "connecting" | "scanning" | "setting";
};

const STEPS: ScanningStep[] = [
  { label: "Connecting to the world", key: "connecting" },
  { label: "Scanning vending machines", key: "scanning" },
  { label: "Setting up dashboard", key: "setting" },
];

interface ScanningWorldProps {
  next: () => void;
}

export function ScanningWorld({ next }: ScanningWorldProps) {
  const { getValues } = useFormContext<CreateWorldSchema>();
  const trpc = useTRPC();

  const { name } = getValues();

  const { data: status } = useQuery(
    trpc.world.status.queryOptions({ name }, { refetchInterval: 3000 }),
  );

  const currentStepIndex = STEPS.findIndex((step) => step.key === status);

  useEffect(() => {
    if (status === "setting") {
      next();
    }
  }, [status, next]);

  return (
    <>
      <DialogHeader className="mb-5">
        <div className="relative mb-4">
          <div className="size-12 mx-auto bg-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 dark:bg-gray-950 shadow-xs-skeumorphic rounded-[10px] flex items-center justify-center">
            <SearchIcon className="size-6 text-gray-700 dark:text-gray-300" />
          </div>
          <ConcentricCircles
            aria-hidden
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        <div className="text-center space-y-0.5 z-10">
          <DialogTitle>Scanning your shop</DialogTitle>
          <DialogDescription>
            We're checking your vending machines in{" "}
            <span className="font-semibold uppercase">{name}</span>. This
            usually takes less than a minute.
          </DialogDescription>
        </div>
      </DialogHeader>
      <div className="mb-5 flex flex-col gap-3 z-10">
        {STEPS.map((step, index) => {
          const isCurrent = index === currentStepIndex;
          const isCompleted =
            index < (currentStepIndex !== -1 ? currentStepIndex : 0);

          return (
            <div key={step.key} className="flex items-center gap-2">
              {isCurrent ? (
                <Loader2Icon className="size-5 text-gray-300 dark:text-gray-600 animate-spin" />
              ) : isCompleted ? (
                <CircleCheckIcon className="size-5 text-brand-600" />
              ) : (
                <div className="size-5" />
              )}
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}
