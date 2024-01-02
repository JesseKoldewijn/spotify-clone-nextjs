import pokeball from "@images/pokeball.webp";
import Image from "next/image";
import Link from "next/link";
import PlayButton from "./play-button";

const DailyMixCard = () => {
	return (
		<Link href={"#"}>
			<article className="group p-3 relative flex flex-col bg-zinc-800 hover:bg-zinc-700 hover:shadow-xl transition-all rounded-lg">
				<figure>
					<Image
						src={pokeball}
						alt="Placeholder image"
						className="rounded-lg"
					/>
				</figure>
				<h3 className="font-bold mt-3">Daily Mix</h3>
				<p className="text-zinc-400 text-sm line-clamp-2">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam tempora
					ad fuga temporibus corporis excepturi nostrum suscipit officia
					expedita dicta, ipsam voluptates quo ipsum minus. Recusandae tempora
					voluptatem facilis corrupti!
				</p>
				<button
					className={`absolute right-[-2px] bottom-0 translate-y-4 transition-all duration-500 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 z-10`}
				>
					<PlayButton />
				</button>
			</article>
		</Link>
	);
};

export default DailyMixCard;
