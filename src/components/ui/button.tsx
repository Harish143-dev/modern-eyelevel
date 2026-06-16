import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-brand-yellow font-bricolage text-primary-foreground border-2 border-primary-foreground shadow-neo-sm hover:translate-y-1 hover:shadow-none transition-all duration-150 rounded-full",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-full",
        outline: "border-2 border-foreground/80 bg-transparent text-foreground hover:bg-foreground/10 rounded-full",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-full",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-card text-forest hover:bg-card/90 rounded-full shadow-lg hover:shadow-xl hover:scale-105",
        heroOutline: "border-2 border-brand-light/50 bg-transparent text-foreground hover:bg-card/10 rounded-full",
        neo: "bg-primary text-primary-foreground border-2 border-foreground shadow-neo-sm hover:translate-y-1 hover:shadow-none transition-all duration-150 rounded-full font-bold",
        lime: "bg-primary text-forest hover:bg-primary/90 rounded-full font-bold tracking-wide",
        dark: "bg-forest text-foreground hover:bg-forest-light rounded-full font-bold",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };


