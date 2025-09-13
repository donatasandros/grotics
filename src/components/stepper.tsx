import * as Stepperize from "@stepperize/react";

const defineStepper = <const Steps extends Stepperize.Step[]>(
  ...steps: Steps
): Stepper.DefineProps<Steps> => {
  const { Scoped, useStepper, ...rest } = Stepperize.defineStepper(...steps);

  return {
    ...rest,
    useStepper,
  };
};

namespace Stepper {
  export type StepperVariant = "horizontal" | "vertical" | "circle";
  export type StepperLabelOrientation = "horizontal" | "vertical";

  export type ConfigProps = {
    variant?: StepperVariant;
    labelOrientation?: StepperLabelOrientation;
    tracking?: boolean;
  };

  export type DefineProps<Steps extends Stepperize.Step[]> = Omit<
    Stepperize.StepperReturn<Steps>,
    "Scoped"
  >;

  export type CircleStepIndicatorProps = {
    currentStep: number;
    totalSteps: number;
    size?: number;
    strokeWidth?: number;
  };
}

export { defineStepper };
