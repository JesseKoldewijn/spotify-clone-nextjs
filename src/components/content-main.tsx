import { ReactNode } from "react";

const ContentMain = ({
	children,
	bgColor,
}: {
	children: ReactNode;
	bgColor?: string;
}) => {
	return <div className={`flex-1 ${bgColor}`}>{children}</div>;
};

export default ContentMain;
