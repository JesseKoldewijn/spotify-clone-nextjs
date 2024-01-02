import pokeball from "@images/pokeball.webp";
import Image from "next/image";

const DailyMixCard = () => {
	return (
		<article className="p-3 flex flex-col bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-lg">
			<figure>
				<Image src={pokeball} alt="Placeholder image" className="rounded-lg" />
			</figure>
			<h3 className="font-bold mt-3">Daily Mix</h3>
			<p className="text-zinc-400 text-sm line-clamp-2">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam tempora ad
				fuga temporibus corporis excepturi nostrum suscipit officia expedita
				dicta, ipsam voluptates quo ipsum minus. Recusandae tempora voluptatem
				facilis corrupti!
			</p>
		</article>
	);
};

export default DailyMixCard;
