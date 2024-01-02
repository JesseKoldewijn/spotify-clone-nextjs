import { ReactNode } from "react";

const Content = ({ children }: { children?: ReactNode }) => {
	return (
		<div className="[grid-area:content] bg-zinc-900 flex flex-col h-full rounded-lg overflow-y-scroll">
			{children}
		</div>
	);
};

export default Content;
