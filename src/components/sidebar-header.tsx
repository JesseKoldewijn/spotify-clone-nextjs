import HomeIcon from "@/icons/home-icon";
import SearchIcon from "@/icons/search-icon";
import SpotifyIcon from "@/icons/spotify-icon";
import { useSession } from "next-auth/react";
import SidebarHeaderItem from "./sidebar-header-item";

const SidebarHeader = () => {
	const { data: session } = useSession();

	return (
		<header className="bg-neutral-900 py-4 px-6 flex flex-col gap-5 items-start">
			{!session && <SpotifyIcon />}

			<ul className="flex flex-col gap-5">
				<SidebarHeaderItem name="Home" href="/">
					<HomeIcon />
				</SidebarHeaderItem>
				<SidebarHeaderItem name="Search" href="/search">
					<SearchIcon />
				</SidebarHeaderItem>
			</ul>
		</header>
	);
};

export default SidebarHeader;
