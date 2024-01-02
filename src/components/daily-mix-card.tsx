"use client";
import PlayIcon from "@/icons/play-icon";
import pokeball from "@images/pokeball.webp";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const DailyMixCard = () => {
	const [isHovering, setIsHovering] = useState(false);

	return (
		<Link
			href={"#"}
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
		>
			<article className="p-3 relative flex flex-col bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-lg">
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
				{isHovering && (
					<button className="bg-green-500 transition-all hover:scale-105 p-3 rounded-full absolute bottom-24 right-5">
						<PlayIcon />
					</button>
				)}
			</article>
		</Link>
	);
};

export default DailyMixCard;
