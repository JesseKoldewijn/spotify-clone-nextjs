import { ReactNode } from "react";

const Content = ({ children }: { children?: ReactNode }) => {
	return (
		<div className="[grid-area:content] bg-gradient-to-b from-blue-950 via-neutral-900 to-neutral-900 flex flex-col h-full rounded-lg overflow-hidden">
			{children}
		</div>
	);
};

export default Content;
