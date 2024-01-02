import Link from "next/link";
import { ReactNode } from "react";
import DailyMixContainer from "./daily-mix-container";

const PageSection = ({
	title,
	children,
}: {
	title: string;
	children?: ReactNode;
}) => {
	return (
		<section>
			<div className="flex justify-between">
				<Link href={"#"} className="hover:underline">
					<h2 className="-tracking-wider font-bold text-2xl mb-4">{title}</h2>
				</Link>
				<Link
					href={"#"}
					className="hover:underline text-zinc-400 font-bold text-sm"
				>
					Show all
				</Link>
			</div>

			<DailyMixContainer />
		</section>
	);
};

export default PageSection;
