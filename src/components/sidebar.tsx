import styles from "@styles/home.module.css";
import SidebarHeader from "./sidebar-header";

const Sidebar = () => {
	return (
		<aside className={`${styles.sidebar} [grid-area:sidebar] [&>*]:rounded-lg`}>
			<SidebarHeader />
			<section className="bg-neutral-900 p-4 h-full">sidebar section</section>
		</aside>
	);
};

export default Sidebar;
