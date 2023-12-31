import ContentHeader from "./content-header";
import GreetingTitle from "./greeting-title";

const Content = () => {
	return (
		<div className="[grid-area:content] h-full bg-neutral-900 overflow-hidden rounded-lg">
			<ContentHeader />
			<main className="p-4">
				<GreetingTitle />
			</main>
		</div>
	);
};

export default Content;
