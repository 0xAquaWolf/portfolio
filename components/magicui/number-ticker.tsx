"use client";

import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";

import { cn } from "../../lib/utils";

export default function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
}: {
  value: number;
  direction?: "up" | "down";
  className?: string;
  delay?: number; // delay in s
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay * 1000);
    }
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US").format(
            Number(latest.toFixed(0))
          );
        }
      }),
    [springValue]
  );

  return (
    <motion.span
      className={cn(
        "inline-block tabular-nums text-black dark:text-white tracking-wider",
        className
      )}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    />
  );
}
