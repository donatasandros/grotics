import { cn } from "@/lib/utils";
import type React from "react";
import { useId } from "react";

export function ConcentricCircles({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  const maskId = useId();
  const gradientId = useId();

  return (
    <svg
      viewBox="0 0 336 336"
      fill="none"
      className={cn(
        "text-gray-200 size-84 dark:text-gray-800 pointer-events-none",
        className,
      )}
      {...props}
    >
      <title>Decorative concentric circles background</title>
      <mask
        id={maskId}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="336"
        height="336"
        className="mask-type-alpha"
      >
        <rect width="336" height="336" fill={`url(#${gradientId})`}></rect>
      </mask>
      <g mask={`url(#${maskId})`}>
        <circle cx="168" cy="168" r="47.5" stroke="currentColor"></circle>
        <circle cx="168" cy="168" r="71.5" stroke="currentColor"></circle>
        <circle cx="168" cy="168" r="95.5" stroke="currentColor"></circle>
        <circle cx="168" cy="168" r="119.5" stroke="currentColor"></circle>
        <circle cx="168" cy="168" r="143.5" stroke="currentColor"></circle>
        <circle cx="168" cy="168" r="167.5" stroke="currentColor"></circle>
      </g>
      <defs>
        <radialGradient
          id={gradientId}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(168 168) rotate(90) scale(168 168)"
        >
          <stop></stop>
          <stop offset="1" stopOpacity="0"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
}
