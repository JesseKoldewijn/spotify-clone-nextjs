import { ReactNode } from "react";

const ContentMain = ({ children }: { children: ReactNode }) => {
	return (
		<main className="py-4 px-6 bg-gradient-to-b from-blue-950 via-zinc-900 to-zinc-950 flex-1">
			{children}
		</main>
	);
};

export default ContentMain;
