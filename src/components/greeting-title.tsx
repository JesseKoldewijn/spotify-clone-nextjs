"use client";

import { useSession } from "next-auth/react";

const GreetingTitle = () => {
	const date = new Date();
	const hours = date.getHours();

	const { data: session } = useSession();

	const RenderTitle = ({ time }: { time: string }) => {
		return (
			<h2 className="text-3xl font-bold">
				Good {time}, {session?.user?.name}!
			</h2>
		);
	};

	return (
		<>
			{hours < 12 && session && <RenderTitle time="morning" />}

			{hours >= 12 && hours < 18 && session && <RenderTitle time="afternoon" />}

			{hours > 18 && session && <RenderTitle time="evening" />}

			{!session && (
				<h2 className="text-2xl font-bold">
					Please log in to use our services
				</h2>
			)}
		</>
	);
};

export default GreetingTitle;
