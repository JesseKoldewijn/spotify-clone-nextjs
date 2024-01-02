import styles from "@styles/page.module.css";
import { ReactNode } from "react";

const DailyMixContainer = ({ children }: { children: ReactNode }) => {
	return <div className={`gap-x-4 ${styles.cardContainer}`}>{children}</div>;
};

export default DailyMixContainer;
