"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ className, ...props }, ref) => (
    <motion.div
      ref={ref}
      whileHover={{ 
        y: -5,
        boxShadow: "0 0 20px rgba(0, 245, 255, 0.15)"
      }}
      className={cn(
        "rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

export { Card };
