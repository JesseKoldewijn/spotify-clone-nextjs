import AddIcon from "@/icons/add-icon";
import LibraryIcon from "@/icons/library-icon";
import MoreIcon from "@/icons/more-icon";
import styles from "@styles/home.module.css";
import SidebarHeader from "./sidebar-header";

// TODO: Change font size if it looks very big or small in the future

const Sidebar = () => {
	return (
		<aside
			className={`${styles.sidebar} [grid-area:sidebar] [&>*]:rounded-lg text-base`}
		>
			<SidebarHeader />
			<section className="bg-neutral-900 overflow-y-scroll">
				<section className="flex justify-between px-6 py-4">
					<button className="flex items-center gap-3 text-zinc-400 hover:text-zinc-100 transition-all">
						<LibraryIcon />
						<h2 className="font-bold">Your library</h2>
					</button>

					<div className="flex gap-2">
						<button className="text-zinc-400 hover:text-zinc-100 transition-all hover:bg-zinc-800 p-2 rounded-full">
							<AddIcon />
						</button>
						<button className="text-zinc-400 hover:text-zinc-100 transition-all hover:bg-zinc-800 p-2 rounded-full">
							<MoreIcon />
						</button>
					</div>
				</section>
			</section>
		</aside>
	);
};

export default Sidebar;
