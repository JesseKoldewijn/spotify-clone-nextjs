import ContentHeader from "./content-header";
import GreetingTitle from "./greeting-title";

const Content = () => {
	return (
		<div className="[grid-area:content] h-full bg-neutral-900 overflow-hidden rounded-lg">
			<ContentHeader />
			<main className="px-6 py-2">
				<GreetingTitle />
			</main>
		</div>
	);
};

export default Content;
