import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  variant?: "default" | "gradient" | "success";
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, variant = "default", ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-secondary/50",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(
        "h-full w-full flex-1 transition-all duration-500 ease-out relative overflow-hidden",
        {
          "bg-primary": variant === "default",
          "bg-gradient-to-r from-primary to-accent": variant === "gradient",
          "bg-success": variant === "success",
        }
      )}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
    </ProgressPrimitive.Indicator>
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
