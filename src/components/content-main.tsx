import { ReactNode } from "react";

const ContentMain = ({ children }: { children: ReactNode }) => {
	return (
		<div className="py-4 px-6 h-full flex-1 overflow-scroll">{children}</div>
	);
};

export default ContentMain;
