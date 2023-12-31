"use client";
import NotificationsIcon from "@/icons/notifications-icon";
import { useSession } from "next-auth/react";
import LoginLink from "./login-link";
import ProfilePhotoButton from "./profile-photo";
import SignUpLink from "./signup-link";

const ContentHeaderAuth = () => {
	const { data: session } = useSession();

	const UserImage = () => {
		return session?.user?.image ? (
			<>
				<ProfilePhotoButton src={session.user.image} alt={session.user.name} />
			</>
		) : null;
	};

	return (
		<>
			{session ? (
				<>
					<div className="flex items-center justify-center gap-3">
						<button className="bg-zinc-900 p-2 rounded-full transition-transform hover:scale-105">
							<NotificationsIcon />
						</button>
						<UserImage />
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
