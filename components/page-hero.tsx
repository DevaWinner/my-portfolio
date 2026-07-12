import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PageHeroProps {
	title: ReactNode;
	description: string;
	label: string;
	actions?: ReactNode;
	aside?: ReactNode;
	tone?: "light" | "brand" | "inverse";
}

const toneStyles = {
	light: {
		section: "border-b border-border bg-background text-foreground",
		label: "text-primary",
		description: "text-muted",
		line: "border-border",
	},
	brand: {
		section: "bg-brand text-brand-foreground",
		label: "text-white/80",
		description: "text-white/80",
		line: "border-white/25",
	},
	inverse: {
		section: "bg-inverse text-inverse-foreground",
		label: "text-primary",
		description: "text-inverse-muted",
		line: "border-inverse-line",
	},
};

export function PageHero({ title, description, label, actions, aside, tone = "light" }: PageHeroProps) {
	const styles = toneStyles[tone];

	return (
		<section className={styles.section}>
			<div className="container pb-[4.5rem] pt-14 sm:pb-28 sm:pt-20">
				<div className={cn("grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-20", aside ? "" : "lg:grid-cols-1")}>
					<div className="hero-enter">
						<p className={cn("type-label", styles.label)}>{label}</p>
						<h1 className="type-display mt-4 max-w-[14ch] text-balance">{title}</h1>
						<p className={cn("type-body mt-8 max-w-[62ch]", styles.description)}>{description}</p>
						{actions ? <div className="mt-8 flex flex-wrap items-center gap-3">{actions}</div> : null}
					</div>
					{aside ? <aside className={cn("border-t pt-6", styles.line)}>{aside}</aside> : null}
				</div>
			</div>
		</section>
	);
}
