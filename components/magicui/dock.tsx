"use client";

import React, { PropsWithChildren, useRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

import { cn } from "@/lib/utils";

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  magnification?: number;
  distance?: number;
  direction?: "top" | "middle" | "bottom";
  children: React.ReactNode;
  orientation?: "horizontal" | "vertical";
}

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const dockVariants = cva(
  "mx-auto w-max mt-8 h-[58px] p-2 flex gap-2 rounded-2xl shadow-md border border-slate-200 supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md dark:border-slate-800 bg-white/10 dark:bg-black/10"
);


const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      magnification = DEFAULT_MAGNIFICATION,
      distance = DEFAULT_DISTANCE,
      direction = "bottom",
      orientation = "horizontal",
      ...props
    },
    ref
  ) => {
    const mousex = useMotionValue(Infinity);
    const mousey = useMotionValue(Infinity);

    const renderChildren = () => {
      return React.Children.map(children, (child) => {
        if (React.isValidElement<DockIconProps>(child)) {
          return React.cloneElement(child, {
            mousex,
            mousey,
            magnification,
            distance,
          });
        }
        return child;
      });
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => {
          if (orientation == "horizontal") {
            mousex.set(e.clientX);
          } else {
            mousey.set(e.clientY);
          }
        }}
        onMouseLeave={() => {
          if (orientation == "horizontal") {
            mousex.set(Infinity);
          } else {
            mousey.set(Infinity);
          }
        }}
        {...props}
        className={cn(dockVariants({ className }), {
          "items-start": direction === "top",
          "items-center": direction === "middle",
          "items-end": direction === "bottom",
          "flex-col h-max": orientation === "vertical",
          "flex-row": orientation === "horizontal",
        })}
      >
        {renderChildren()}
      </motion.div>
    );
  }
);

Dock.displayName = "Dock";

export interface DockIconProps {
  size?: number;
  magnification?: number;
  distance?: number;
  mousex?: MotionValue<number>;
  mousey?: MotionValue<number>;
  className?: string;
  children?: React.ReactNode;
  props?: PropsWithChildren;
  orientation?: "horizontal" | "vertical";
}

const DockIcon = ({
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mousex,
  mousey,
  className,
  children,
  ...props
}: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const distanceHeightCalc = useTransform(mousey ?? new MotionValue(), (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };

    return (mousey?.get() ?? val) - bounds.y - bounds.height / 2;
  });

  const distanceWidthCalc = useTransform(mousex ?? new MotionValue(), (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return (mousex?.get() ?? 0) - bounds.x - bounds.width / 2;
  });

  const heightSync = useTransform(
    distanceHeightCalc,
    [-distance, 0, distance],
    [40, magnification, 40]
  );
  const widthSync = useTransform(
    distanceWidthCalc as MotionValue<number>,
    [-distance, 0, distance],
    [40, magnification, 40]
  );

  const height = useSpring(heightSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ height, width }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants };
