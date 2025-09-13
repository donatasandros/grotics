import { ConcentricCircles } from "@/components/decorations";
import Logo from "@/components/logo";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function Welcome() {
  return (
    <DialogHeader className="mb-5">
      <div className="relative mb-4">
        <Logo className="size-12 mx-auto " />
        <ConcentricCircles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />
      </div>
      <div className="text-center space-y-0.5 z-10 ">
        <DialogTitle>Welcome to Grotics</DialogTitle>
        <DialogDescription>
          Thanks for signing up! Before we can show you analytics, let’s connect
          your first shop.
        </DialogDescription>
      </div>
    </DialogHeader>
  );
}
