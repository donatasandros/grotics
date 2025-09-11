import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function SuccessStep() {
  return (
    <DialogHeader className="mb-5">
      <div className="text-center space-y-0.5 ">
        <DialogTitle>Shop connected 🎉</DialogTitle>
        <DialogDescription>
          Your shop is now linked! From now on, we’ll keep track of your
          earnings, and send you alerts when items run out.
        </DialogDescription>
      </div>
    </DialogHeader>
  );
}
