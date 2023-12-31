import ChevronLeft from "@/icons/chevron-left";
import ChevronRight from "@/icons/chevron-right";
import ContentHeaderAuth from "./content-header-auth";

const ContentHeader = () => {
	return (
		<header className="bg-zinc-950 flex items-center justify-between py-2 px-6">
			<div className="flex gap-2">
				<button className="grid place-items-center text-zinc-100 bg-black p-2 aspect-square rounded-full">
					<ChevronLeft />
				</button>
				<button className="grid place-items-center text-zinc-100 bg-black p-2 aspect-square rounded-full">
					<ChevronRight />
				</button>
			</div>

			<ContentHeaderAuth />
		</header>
	);
};

export default ContentHeader;
