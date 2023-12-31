import { signOut } from "next-auth/react";

const LogoutButton = () => {
	return (
		<button
			onClick={() =>
				signOut({
					callbackUrl: "/",
				})
			}
			className="bg-zinc-50 text-black py-1 px-4 rounded-full font-bold transition-transform hover:scale-105 hover:bg-zinc-100"
		>
			Log out
		</button>
	);
};

export default LogoutButton;
