import Image from "next/image";

import LikeIcon from "@/icons/like-icon";
import pokeball from "@images/pokeball.webp";
import Link from "next/link";

const PlayerCurrentSong = () => {
	return (
		<section className="flex gap-4 items-center">
			<figure>
				<Image
					src={pokeball}
					alt="Placeholder image"
					width={56}
					height={56}
					className="rounded-md"
				/>
			</figure>

			<div className="flex flex-col mt-1">
				<Link href={"#"} className="hover:underline">
					<h3 className="text-sm">Song name</h3>
				</Link>
				<Link href={"#"} className="hover:underline">
					<h4 className="text-xs text-zinc-400 pr-4">Song artist</h4>
				</Link>
			</div>
			<button>
				<LikeIcon />
			</button>
		</section>
	);
};

export default PlayerCurrentSong;
