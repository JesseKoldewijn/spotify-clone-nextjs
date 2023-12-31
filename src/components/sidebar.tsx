import styles from "@styles/home.module.css";
import SidebarHeader from "./sidebar-header";

const Sidebar = () => {
	return (
		<aside
			className={`${styles.sidebar} [grid-area:sidebar] grid gap-2 [&>*]:rounded-lg`}
		>
			<SidebarHeader />
			<section className="bg-zinc-900 p-4">sidebar section</section>
		</aside>
	);
};

export default Sidebar;
