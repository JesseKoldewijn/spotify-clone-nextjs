import ContentHeader from "./content-header";
import GreetingTitle from "./greeting-title";

const Content = () => {
	return (
		<div className="[grid-area:content] bg-zinc-900 overflow-hidden">
			<ContentHeader />
			<main className="p-4">
				<GreetingTitle />
			</main>
		</div>
	);
};

export default Content;
