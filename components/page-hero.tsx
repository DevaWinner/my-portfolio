import type { ReactNode } from "react";

interface PageHeroProps {
	title: ReactNode;
	description: string;
	kicker?: string;
	actions?: ReactNode;
}

export function PageHero({
	title,
	description,
	kicker,
	actions,
}: PageHeroProps) {
	return (
		<section className="container pb-6 pt-10 sm:py-14">
			{kicker ? (
				<p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
					{kicker}
				</p>
			) : null}
			<h1 className="mt-3 max-w-4xl font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
				{title}
			</h1>
			<p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
				{description}
			</p>
			{actions ? (
				<div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7">
					{actions}
				</div>
			) : null}
		</section>
	);
}
