import { ConcentricCircles } from "@/components/decorations";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Schema1Values } from "@/modules/onboarding/components/onboarding-modal";
import { CircleCheckIcon } from "lucide-react";
import { useFormContext } from "react-hook-form";

export default function SuccessStep() {
  const { getValues } = useFormContext<Schema1Values>();

  const { worldName } = getValues();
  return (
    <DialogHeader className="mb-5">
      <div className="relative mb-4">
        <div className="size-12 mx-auto bg-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 dark:bg-gray-950 shadow-xs-skeumorphic rounded-[10px] flex items-center justify-center">
          <CircleCheckIcon className="size-6  text-gray-700 dark:text-gray-300" />
        </div>
        <ConcentricCircles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />
      </div>
      <div className="text-center space-y-0.5  z-10">
        <DialogTitle>Shop connected</DialogTitle>
        <DialogDescription>
          <span className="font-semibold">{worldName}</span> is now linked to
          Grotics. We’ll track your earnings and alert you when stock runs out.
        </DialogDescription>
      </div>
    </DialogHeader>
  );
}
