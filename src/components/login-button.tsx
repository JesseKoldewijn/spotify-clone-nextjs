"use client";
import { signIn } from "next-auth/react";
import { ReactNode } from "react";

const LoginButton = ({
	name,
	children,
	provider,
}: {
	name: string;
	children?: ReactNode;
	provider?: string;
}) => {
	return (
		<button
			onClick={() =>
				signIn(provider, {
					callbackUrl: "/",
				})
			}
			className="flex items-center justify-center gap-8 border py-3 px-5 rounded-full"
		>
			{children}
			<p className="text-zinc-200 font-bold">Continue with {name}</p>
		</button>
	);
};

export default LoginButton;
