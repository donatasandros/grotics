import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import ScanningStep from "@/modules/onboarding/components/scanning-step";
import SuccessStep from "@/modules/onboarding/components/success-step";
import WelcomeStep from "@/modules/onboarding/components/welcome-step";
import WorldStep from "@/modules/onboarding/components/world-step";
import { zodResolver } from "@hookform/resolvers/zod";
import { defineStepper } from "@stepperize/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const schema1 = z.object({
  worldName: z.string().min(1),
});

export type Schema1Values = z.infer<typeof schema1>;

export default function OnboardingModal() {
  const [open, setOpen] = useState(true);

  const { useStepper } = defineStepper(
    {
      id: "onboarding-welcome",
      schema: z.object({}),
    },
    {
      id: "onboarding-world",
      schema: schema1,
    },
    {
      id: "onboarding-scanning",
      schema: z.object({}),
    },
    {
      id: "onboarding-success",
      schema: z.object({}),
    },
  );

  const stepper = useStepper();

  const form = useForm({
    mode: "onTouched",

    resolver: zodResolver(stepper.current.schema),
  });

  const onSubmit = (values: z.infer<typeof stepper.current.schema>) => {
    console.log(`Form values for step ${stepper.current.id}:`, values);
    if (stepper.isLast) {
      setOpen(false);
    } else {
      stepper.next();
    }
  };

  return (
    <Dialog open={open}>
      <DialogContent showCloseButton={false} className="md:max-w-[400px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div>
              {stepper.switch({
                "onboarding-welcome": () => <WelcomeStep />,
                "onboarding-world": () => <WorldStep />,
                "onboarding-scanning": () => (
                  <ScanningStep next={stepper.next} />
                ),
                "onboarding-success": () => <SuccessStep />,
              })}
            </div>
            <div className="flex items-center gap-4 justify-center">
              {stepper.all.map((step) => (
                <div
                  key={step.id}
                  aria-current={
                    stepper.current.id === step.id ? "step" : undefined
                  }
                  className={cn(
                    "size-2.5 rounded-full",
                    stepper.current.id === step.id
                      ? "bg-brand-600 dark:bg-gray-300"
                      : "bg-gray-200 dark:bg-gray-700",
                  )}
                />
              ))}
            </div>

            <DialogFooter className="mt-6 md:mt-8">
              <Button
                type="submit"
                className="w-full"
                disabled={stepper.current.id === "onboarding-scanning"}
              >
                {stepper.isLast ? "Finish" : "Continue"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
