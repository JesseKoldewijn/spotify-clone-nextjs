import styles from "@styles/page.module.css";
import { ReactNode } from "react";
import DailyMixCard from "./daily-mix-card";

const DailyMixContainer = ({ children }: { children?: ReactNode }) => {
	return (
		<div className={`gap-4 ${styles.cardContainer}`}>
			<DailyMixCard />
			<DailyMixCard />
			<DailyMixCard />
			<DailyMixCard />
			<DailyMixCard />
			<DailyMixCard />
			<DailyMixCard />
		</div>
	);
};

export default DailyMixContainer;
