import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import ScanningStep from "@/modules/onboarding/components/scanning-step";
import SuccessStep from "@/modules/onboarding/components/success-step";
import WelcomeStep from "@/modules/onboarding/components/welcome-step";
import WorldStep from "@/modules/onboarding/components/world-step";
import { createWorldSchema } from "@/schemas/world";
import { useTRPC } from "@/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { defineStepper } from "@stepperize/react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

export default function OnboardingModal() {
  const [open, setOpen] = useState(true);
  const trpc = useTRPC();

  const { useStepper } = defineStepper(
    {
      id: "onboarding-welcome",
      schema: z.object({}),
    },
    {
      id: "onboarding-world",
      schema: createWorldSchema,
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

  const createWorldMutation = useMutation(trpc.world.create.mutationOptions());
  const myMutation2 = useMutation(trpc.user.finishOnboarding.mutationOptions());

  const form = useForm({
    mode: "onTouched",

    resolver: zodResolver(stepper.current.schema),
  });

  const onSubmit = async (values: z.infer<typeof stepper.current.schema>) => {
    switch (stepper.current.id) {
      case "onboarding-welcome":
      case "onboarding-scanning":
        stepper.next();
        break;

      case "onboarding-world":
        try {
          await createWorldMutation.mutateAsync({ name: values.name });

          stepper.next();
        } catch (err) {
          console.log("failed to crteate world", err);
        }
        break;

      case "onboarding-success":
        try {
          myMutation2.mutate();
          setOpen(false);
        } catch (err) {
          console.log("failed to complete onboarding", err);
        }
        break;
    }
  };

  return (
    <Dialog open={open}>
      <DialogContent
        showCloseButton={false}
        className="md:max-w-[400px] overflow-hidden"
      >
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
            <div className="flex items-center gap-4 justify-center relative z-10">
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
                isLoading={createWorldMutation.isPending}
                disabled={
                  stepper.current.id === "onboarding-scanning" ||
                  createWorldMutation.isPending
                }
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
