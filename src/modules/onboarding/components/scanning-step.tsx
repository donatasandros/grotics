import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LoaderIcon } from "lucide-react";
import { useEffect } from "react";

interface ScanningStepProps {
  next: () => void;
}

export default function ScanningStep({ next }: ScanningStepProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      next();
    }, 3000);

    return () => clearTimeout(timer);
  }, [next]);

  return (
    <>
      <DialogHeader className="mb-5">
        <div className="text-center space-y-0.5 ">
          <DialogTitle>Scanning your shop…</DialogTitle>
          <DialogDescription>
            We’re checking your vending machines. This usually takes less than a
            minute. Sit tight while we get everything ready.
          </DialogDescription>
        </div>
      </DialogHeader>
      <div className="mb-5">
        <LoaderIcon className="mx-auto size-8 animate-spin" />
      </div>
    </>
  );
}
