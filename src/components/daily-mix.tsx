"use client";
import PlayIcon from "@/icons/play-icon";
import pokeball from "@images/pokeball.webp";
import Image from "next/image";
import { useState } from "react";

// TODO: Change placeholder image when the project completes

const DailyMix = () => {
	const [isHovering, setIsHovering] = useState(false);

	return (
		<article
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
			className="flex h-[60px] rounded items-center overflow-hidden transition-all"
		>
			<figure className="h-full aspect-square">
				<Image
					src={pokeball}
					alt="Placeholder image"
					loading="lazy"
					decoding="async"
					className="h-full aspect-square w-auto"
				/>
			</figure>

			<div className="px-3 py-5 w-full relative flex justify-between items-center">
				<div className="absolute inset-0 blur-3xl hover:blur-xl transition-all bg-zinc-700"></div>
				<h2 className="relative z-10 font-bold w-fit">Laulud</h2>
				{isHovering && (
					<button className="bg-green-500 p-3 rounded-full z-10 transition-transform hover:scale-110">
						<PlayIcon />
					</button>
				)}
			</div>
		</article>
	);
};

export default DailyMix;
