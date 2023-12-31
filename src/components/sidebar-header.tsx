import HomeIcon from "@/icons/home-icon";
import SearchIcon from "@/icons/search-icon";
import SpotifyIcon from "@/icons/spotify-icon";
import SidebarHeaderItem from "./sidebar-header-item";

const SidebarHeader = () => {
	return (
		<header className="bg-neutral-900 py-4 px-6 flex flex-col gap-5 items-start">
			<SpotifyIcon />

			<ul className="flex flex-col gap-5">
				<SidebarHeaderItem name="Home">
					<HomeIcon />
				</SidebarHeaderItem>
				<SidebarHeaderItem name="Search">
					<SearchIcon />
				</SidebarHeaderItem>
			</ul>
		</header>
	);
};

export default SidebarHeader;
