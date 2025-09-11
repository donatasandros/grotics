import {
  DialogStack,
  DialogStackBody,
  DialogStackContent,
  DialogStackFooter,
  DialogStackHeader,
  DialogStackOverlay,
  DialogStackTitle,
} from "@/components/ui/shadcn-io/dialog-stack";
import { useState } from "react";

export default function OnboardingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);

  return (
    // <Dialog open>
    //   <DialogContent showCloseButton={false} className="md:max-w-[400px]">
    //     <DialogHeader className="">
    //       <Logo className="size-12 mx-auto mb-5 md:mb-6" />
    //       <div className="text-center space-y-0.5 mb-5">
    //         <DialogTitle>Welcome to Grotics</DialogTitle>
    //         <DialogDescription>
    //           Thanks for signing up! Before we can show you analytics, let’s
    //           connect your first shop.
    //         </DialogDescription>
    //       </div>
    //       <div className="flex items-center gap-4 justify-center">
    //         {Array.from({ length: 4 }).map((_, i) => (
    //           <div
    //             key={i}
    //             className="size-2.5 first:bg-brand-600 dark:first:bg-gray-300 rounded-full bg-gray-200 dark:bg-gray-700"
    //           />
    //         ))}
    //       </div>
    //     </DialogHeader>
    //     <DialogFooter>
    //       <Button className="w-full">Continue</Button>
    //     </DialogFooter>
    //   </DialogContent>
    // </Dialog>
    // <Dialog open>
    //   <DialogContent showCloseButton={false} className="md:max-w-[480px]">
    //     <DialogHeader className="">
    //       <Logo className="size-12 mx-auto mb-5 md:mb-6" />
    //       <div className="text-center space-y-0.5 mb-5">
    //         <DialogTitle>Connect your shop</DialogTitle>
    //         <DialogDescription>
    //           Enter your world name below. We'll automatically scan your vending
    //           machines and start tracking everything in real-time.
    //         </DialogDescription>
    //       </div>
    //       <div className="flex items-center gap-4 justify-center">
    //         {Array.from({ length: 4 }).map((_, i) => (
    //           <div
    //             key={i}
    //             className="size-2.5 first:bg-brand-600 dark:first:bg-gray-300 rounded-full bg-gray-200 dark:bg-gray-700"
    //           />
    //         ))}
    //       </div>
    //     </DialogHeader>
    //     <DialogFooter>
    //       <Button className="w-full">Continue</Button>
    //     </DialogFooter>
    //   </DialogContent>
    // </Dialog>
    <>
      <button onClick={() => setIsOpen(true)}>Start Dialog Flow</button>

      <DialogStack open={isOpen} value onOpenChange={setIsOpen}>
        <DialogStackOverlay />

        <DialogStackBody>
          <DialogStackContent index={0}>
            <DialogStackHeader>
              <DialogStackTitle>Step 1</DialogStackTitle>
            </DialogStackHeader>
            <DialogStackFooter>
              <button onClick={() => setStep(1)}>Go to Step 2</button>
            </DialogStackFooter>
          </DialogStackContent>

          <DialogStackContent index={1}>
            <DialogStackHeader>
              <DialogStackTitle>Step 2</DialogStackTitle>
            </DialogStackHeader>
            <DialogStackFooter>
              <button onClick={() => setStep(0)}>Back</button>
              <button onClick={() => setStep(2)}>Next</button>
            </DialogStackFooter>
          </DialogStackContent>

          <DialogStackContent index={2}>
            <DialogStackHeader>
              <DialogStackTitle>Final Step</DialogStackTitle>
            </DialogStackHeader>
            <DialogStackFooter>
              <button onClick={() => setIsOpen(false)}>Close</button>
            </DialogStackFooter>
          </DialogStackContent>
        </DialogStackBody>
      </DialogStack>
    </>
  );
}
