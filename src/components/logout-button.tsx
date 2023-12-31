import { signOut } from "next-auth/react";

const LogoutButton = () => {
	return (
		<button
			onClick={() =>
				signOut({
					callbackUrl: "/",
				})
			}
		>
			Log out
		</button>
	);
};

export default LogoutButton;
