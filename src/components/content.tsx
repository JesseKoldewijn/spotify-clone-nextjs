import { ReactNode } from "react";

const Content = ({ children }: { children?: ReactNode }) => {
	return (
		<div className="[grid-area:content] h-full bg-neutral-900 overflow-hidden rounded-lg">
			<main>{children}</main>
		</div>
	);
};

export default Content;
