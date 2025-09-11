import { ConcentricCircles } from "@/components/decorations";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Schema1Values } from "@/modules/onboarding/components/onboarding-modal";
import { CircleCheckIcon, Loader2Icon, SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

interface ScanningStepProps {
  next: () => void;
}

const steps = [
  "Connecting to the world",
  "Scanning vending machines",
  "Setting up dashboard",
];

export default function ScanningStep({ next }: ScanningStepProps) {
  const { getValues } = useFormContext<Schema1Values>();

  const { worldName } = getValues();

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    for (let index = 0; index < steps.length; index++) {
      const timer = setTimeout(
        () => {
          setCurrentStep(index + 1);
          if (index === steps.length - 1) {
            // after last step → continue
            setTimeout(() => next(), 0);
          }
        },
        (index + 1) * 3000,
      );
      timers.push(timer);
    }
    return () => {
      // biome-ignore lint/suspicious/useIterableCallbackReturn: asdasd
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [next]);

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
          <div key={step} className="flex items-center  gap-2">
            {currentStep === index ? (
              <Loader2Icon className="size-5 text-gray-300 dark:text-gray-600 animate-spin" />
            ) : currentStep > index ? (
              <CircleCheckIcon className="size-5 text-brand-600 dark:text-brand-600" />
            ) : (
              <div className="size-5" />
            )}
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {step}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
