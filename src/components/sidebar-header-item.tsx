import { ReactNode } from "react";

const SidebarHeaderItem = ({
	children,
	name,
}: {
	children: ReactNode;
	name: string;
}) => {
	return (
		<li>
			<a
				href="/"
				className="flex gap-5 items-center text-zinc-400 hover:text-zinc-100 transition-all"
			>
				{children}
				<p className="font-bold">{name}</p>
			</a>
		</li>
	);
};

export default SidebarHeaderItem;
