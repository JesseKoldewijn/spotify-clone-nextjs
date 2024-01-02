import ContentMain from "@/components/content-main";
import GreetingTitle from "@/components/greeting-title";

export default function Home() {
	return (
		<ContentMain>
			<div className="px-6 py-3">
				<GreetingTitle />
			</div>
		</ContentMain>
	);
}
