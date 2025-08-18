"use client";

import { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NeonGradientCardProps {
  /**
   * @default ""
   * @type string
   * @description
   * The className of the card
   */
  className?: string;

  /**
   * @default ""
   * @type ReactNode
   * @description
   * The children of the card
   */
  children?: ReactNode;

  /**
   * @default 20
   * @type number
   * @description
   * The size of the radius in pixels
   */
  borderRadius?: number;

  [key: string]: any;
}

const NeonGradientCard: React.FC<NeonGradientCardProps> = ({
  className,
  children,
  borderRadius = 20,
  ...props
}) => {
  return (
    <div
      style={
        {
          "--border-radius": `${borderRadius}px`,
        } as CSSProperties
      }
      className={cn(
        "relative z-10 w-full h-full rounded-[var(--border-radius)] bg-white p-6 shadow-[0_0_20px_5px_rgba(255,255,255,0.8)]",
        "dark:bg-neutral-900", // kalau dark mode
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { NeonGradientCard };
