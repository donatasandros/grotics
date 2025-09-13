import { ConcentricCircles } from "@/components/decorations";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { CreateWorldSchema } from "@/schemas/world";
import { StoreIcon } from "lucide-react";
import { useFormContext } from "react-hook-form";

export function AddWorld() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CreateWorldSchema>();

  return (
    <>
      <DialogHeader className="mb-5">
        <div className="relative mb-4">
          <div className="size-12 mx-auto bg-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 dark:bg-gray-950 shadow-xs-skeumorphic rounded-[10px] flex items-center justify-center">
            <StoreIcon className="size-6 text-gray-700 dark:text-gray-300" />
          </div>
          <ConcentricCircles
            aria-hidden
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
          />
        </div>
        <div className="text-center space-y-0.5 z-10">
          <DialogTitle>Add your shop</DialogTitle>
          <DialogDescription>
            Enter the name of your world. We’ll scan your vending machines to
            track sales, and alerts.
          </DialogDescription>
        </div>
      </DialogHeader>
      <div className="mb-5 z-10">
        <div className="space-y-1">
          <Label htmlFor={register("name").name}>World name</Label>
          <Input
            type="text"
            id={register("name").name}
            {...register("name")}
            placeholder="SHOPWORLD123"
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <span className="text-sm text-error-600 dark:text-error-400">
              {errors.name.message}
            </span>
          )}
        </div>
      </div>
    </>
  );
}
