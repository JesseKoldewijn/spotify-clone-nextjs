import { ReactNode } from "react";

const ContentMain = ({ children }: { children: ReactNode }) => {
	return (
		<main className="py-4 px-6 bg-gradient-to-b from-blue-950 via-neutral-900 to-neutral-900 flex-1">
			{children}
		</main>
	);
};

export default ContentMain;
