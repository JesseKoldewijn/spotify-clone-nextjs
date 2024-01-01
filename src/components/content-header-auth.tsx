"use client";
import InstallIcon from "@/icons/install-icon";
import NotificationsIcon from "@/icons/notifications-icon";
import { useSession } from "next-auth/react";
import Link from "next/link";
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
					<div className="flex items-center justify-center gap-2">
						<Link href={"/install"}>
							<button className="px-3 py-[0.3125rem] rounded-full flex gap-1 items-center bg-zinc-950 justify-center transition-all hover:scale-[1.03]">
								<InstallIcon />
								<h6 className="text-sm font-bold">Install app</h6>
							</button>
						</Link>
						<Link href={"/notifications"}>
							<button className="bg-zinc-950 p-2 rounded-full transition-transform hover:scale-105 text-zinc-400 hover:text-zinc-100">
								<NotificationsIcon />
							</button>
						</Link>
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
