import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonVariantInput {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

export function buttonVariants({ variant = "primary", size = "md", className }: ButtonVariantInput) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60";
  const byVariant = {
    primary: "bg-primary text-primary-foreground shadow-soft hover:opacity-95",
    secondary: "bg-card text-foreground ring-1 ring-border hover:bg-background/70",
    outline: "bg-transparent text-foreground ring-1 ring-border hover:bg-card/70",
    ghost: "bg-transparent text-foreground hover:bg-card/70"
  };
  const bySize = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5 text-sm",
    lg: "h-12 px-6 text-base"
  };

  return cn(base, byVariant[variant], bySize[size], className);
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({ variant = "primary", size = "md", className, ...props }: ButtonProps) {
  return <button className={buttonVariants({ variant, size, className })} {...props} />;
}
