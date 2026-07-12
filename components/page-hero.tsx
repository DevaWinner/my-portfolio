import type { ReactNode } from "react";

interface PageHeroProps {
	title: ReactNode;
	description: string;
	kicker?: string;
	actions?: ReactNode;
}

export function PageHero({ title, description, kicker, actions }: PageHeroProps) {
	return (
		<section className="relative overflow-hidden border-b border-border/70 py-14 sm:py-20">
			<div className="page-grid pointer-events-none absolute inset-0" />
			<div className="container relative">
				{kicker ? <p className="eyebrow">{kicker}</p> : null}
				<h1 className="mt-5 max-w-4xl text-balance font-heading text-4xl font-bold leading-[1.03] sm:text-5xl lg:text-6xl">{title}</h1>
				<p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">{description}</p>
				{actions ? <div className="mt-8 flex flex-wrap items-center gap-3">{actions}</div> : null}
			</div>
		</section>
	);
}
