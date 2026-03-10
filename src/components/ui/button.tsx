"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const variants = {
      primary:
        "bg-primary/10 border border-primary text-primary shadow-[0_0_10px_rgba(0,245,255,0.3)] hover:shadow-[0_0_20px_rgba(0,245,255,0.6)] hover:bg-primary/20",
      secondary:
        "bg-secondary/10 border border-secondary text-secondary shadow-[0_0_10px_rgba(123,47,255,0.3)] hover:shadow-[0_0_20px_rgba(123,47,255,0.6)] hover:bg-secondary/20",
      outline:
        "border border-primary/50 text-primary hover:border-primary hover:bg-primary/10",
      ghost: "text-primary/80 hover:text-primary hover:bg-primary/5",
    };

    const sizes = {
      sm: "h-8 px-4 text-xs",
      md: "h-10 px-6 text-sm",
      lg: "h-12 px-8 text-base",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "relative inline-flex items-center justify-center rounded-md font-orbitron font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button };
