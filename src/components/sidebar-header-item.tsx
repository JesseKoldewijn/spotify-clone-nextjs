import Link from "next/link";
import { ReactNode } from "react";

const SidebarHeaderItem = ({
	children,
	name,
	href,
}: {
	children: ReactNode;
	name: string;
	href: string;
}) => {
	return (
		<li>
			<Link
				href={href}
				className="flex gap-5 items-center text-zinc-400 hover:text-zinc-100 transition-all"
			>
				{children}
				<p className="font-bold">{name}</p>
			</Link>
		</li>
	);
};

export default SidebarHeaderItem;
