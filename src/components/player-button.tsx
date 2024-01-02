import { ReactNode } from "react";

const PlayerButton = ({ children }: { children?: ReactNode }) => {
	return (
		<button className="text-zinc-400 transition-all hover:text-zinc-100">
			{children}
		</button>
	);
};

export default PlayerButton;
