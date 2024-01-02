import { ReactNode } from "react";

const ContentMain = ({ children }: { children: ReactNode }) => {
	return <div className="h-full flex-1">{children}</div>;
};

export default ContentMain;
