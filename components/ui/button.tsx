import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "cta";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonVariantInput {
	variant?: ButtonVariant;
	size?: ButtonSize;
	className?: string;
}

export function buttonVariants({
	variant = "primary",
	size = "md",
	className,
}: ButtonVariantInput) {
	const base =
		"inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition duration-150 ease-out-expo hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:translate-y-0 disabled:pointer-events-none disabled:opacity-60 motion-reduce:transform-none";
	const byVariant = {
		primary: "bg-brand text-brand-foreground hover:bg-brand/90",
		secondary:
			"bg-card text-foreground ring-1 ring-border hover:bg-background",
		outline:
			"bg-transparent text-foreground ring-1 ring-border hover:bg-card",
		ghost: "bg-transparent text-foreground hover:bg-card",
		cta: "bg-inverse text-inverse-foreground hover:bg-inverse/90",
	};
	const bySize = {
		sm: "h-11 px-4 text-sm",
		md: "h-12 px-5 text-sm",
		lg: "h-12 px-6 text-base",
	};

	return cn(base, byVariant[variant], bySize[size], className);
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	size?: ButtonSize;
}

export function Button({
	variant = "primary",
	size = "md",
	className,
	...props
}: ButtonProps) {
	return (
		<button
			className={buttonVariants({ variant, size, className })}
			{...props}
		/>
	);
}
