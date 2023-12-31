"use client";
import NotificationsIcon from "@/icons/notifications-icon";
import { useSession } from "next-auth/react";
import Image from "next/image";
import LoginLink from "./login-link";
import LogoutButton from "./logout-button";
import SignUpLink from "./signup-link";

const ContentHeaderAuth = () => {
	const { data: session } = useSession();

	const UserImage = () => {
		return session?.user?.image ? (
			<Image
				src={session.user?.image}
				alt={`Profile picture of ${session.user?.name}`}
				width={28}
				height={28}
				className="rounded-full"
			/>
		) : null;
	};

	return (
		<>
			{session ? (
				<>
					<div className="flex items-center gap-3">
						<div className="bg-zinc-900 p-2 rounded-full transition-transform hover:scale-105">
							<NotificationsIcon />
						</div>
						<UserImage />
						<LogoutButton />
					</div>
				</>
			) : (
				<div className="flex items-center gap-8">
					<SignUpLink />
					<LoginLink />
				</div>
			)}
		</>
	);
};

export default ContentHeaderAuth;
