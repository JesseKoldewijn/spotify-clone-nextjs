import { ReactNode } from "react";

const ContentMain = ({ children }: { children: ReactNode }) => {
	return <div className="py-3 px-6">{children}</div>;
};

export default ContentMain;
