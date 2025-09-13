import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { toast } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { AddWorld } from "@/modules/onboarding/components/onboarding-modal/add-world";
import { Complete } from "@/modules/onboarding/components/onboarding-modal/complete";
import { ScanningWorld } from "@/modules/onboarding/components/onboarding-modal/scanning-world";
import { Welcome } from "@/modules/onboarding/components/onboarding-modal/welcome";
import { onboardingSteps } from "@/modules/onboarding/config/onboarding-steps";
import { useTRPC } from "@/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { defineStepper } from "@stepperize/react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function OnboardingModal() {
  const [open, setOpen] = useState(true);

  const trpc = useTRPC();
  const { useStepper } = defineStepper(...onboardingSteps);
  const stepper = useStepper();

  const form = useForm({
    mode: "onTouched",
    resolver: zodResolver(stepper.current.schema),
  });

  const createWorldMutation = useMutation(trpc.world.create.mutationOptions());
  const completeOnboardingMutation = useMutation(
    trpc.user.completeOnboarding.mutationOptions(),
  );

  const isSubmitting =
    createWorldMutation.isPending || completeOnboardingMutation.isPending;

  const onSubmit = async (values: z.infer<typeof stepper.current.schema>) => {
    switch (stepper.current.id) {
      case "welcome":
      case "scanning-world":
        stepper.next();
        break;

      case "add-world":
        await createWorldMutation.mutateAsync(
          { name: values.name },
          {
            onError: (err) => {
              toast({
                type: "error",
                title: "World creation failed",
                description: err.message,
              });
            },
            onSuccess: () => {
              stepper.next();
            },
          },
        );
        break;

      case "complete":
        await completeOnboardingMutation.mutateAsync(undefined, {
          onError: (err) => {
            toast({
              type: "error",
              title: "Onboarding completion failed",
              description: err.message,
            });
          },
          onSuccess: () => {
            setOpen(false);
          },
        });
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
                welcome: () => <Welcome />,
                "add-world": () => <AddWorld />,
                "scanning-world": () => <ScanningWorld next={stepper.next} />,
                complete: () => <Complete />,
              })}
            </div>
            <ul className="flex items-center gap-4 justify-center relative z-10">
              {stepper.all.map((step) => (
                <li
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
            </ul>

            <DialogFooter className="mt-6 md:mt-8">
              <Button
                type="submit"
                className="w-full"
                isLoading={isSubmitting}
                disabled={
                  stepper.current.id === "scanning-world" || isSubmitting
                }
              >
                {stepper.isLast ? "Complete" : "Continue"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
