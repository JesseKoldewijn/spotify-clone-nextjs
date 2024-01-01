import { ReactNode } from "react";

const Content = ({ children }: { children?: ReactNode }) => {
	return (
		<div className="[grid-area:content] flex flex-col h-full bg-neutral-900 overflow-hidden rounded-lg">
			{children}
		</div>
	);
};

export default Content;
