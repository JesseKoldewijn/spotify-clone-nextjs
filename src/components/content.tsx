import { ReactNode } from "react";

const Content = ({ children }: { children?: ReactNode }) => {
	return (
		<div className="[grid-area:content] flex flex-col h-full rounded-lg overflow-hidden">
			{children}
		</div>
	);
};

export default Content;
