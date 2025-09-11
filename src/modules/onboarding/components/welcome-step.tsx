import Logo from "@/components/logo";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function WelcomeStep() {
  return (
    <DialogHeader className="mb-5">
      <Logo className="size-12 mx-auto mb-5 md:mb-6" />
      <div className="text-center space-y-0.5 ">
        <DialogTitle>Welcome to Grotics</DialogTitle>
        <DialogDescription>
          Thanks for signing up! Before we can show you analytics, let’s connect
          your first shop.
        </DialogDescription>
      </div>
    </DialogHeader>
  );
}
