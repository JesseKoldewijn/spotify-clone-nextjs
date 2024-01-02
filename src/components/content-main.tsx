import { ReactNode } from "react";

const ContentMain = ({ children }: { children: ReactNode }) => {
	return <div className="flex-1">{children}</div>;
};

export default ContentMain;
