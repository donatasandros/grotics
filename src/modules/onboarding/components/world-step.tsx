import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { Schema1Values } from "@/modules/onboarding/components/onboarding-modal";
import { useFormContext } from "react-hook-form";

export default function WorldStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext<Schema1Values>();

  return (
    <>
      <DialogHeader className="mb-5">
        <div className="text-center space-y-0.5 ">
          <DialogTitle>Add your shop</DialogTitle>
          <DialogDescription>
            Enter the name of your world. We’ll scan your vending machines to
            track sales, and alerts.
          </DialogDescription>
        </div>
      </DialogHeader>
      <div className="mb-5">
        <div>
          <Label htmlFor={register("worldName").name}>label</Label>
          <Input
            type="text"
            id={register("worldName").name}
            {...register("worldName")}
          />
          {errors.worldName && (
            <span className="text-sm text-red-500">
              {errors.worldName.message}
            </span>
          )}
        </div>
      </div>
    </>
  );
}
