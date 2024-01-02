import LoopIcon from "@/icons/loop-icon";
import NextSong from "@/icons/next-song";
import PreviousSong from "@/icons/previous-song";
import ShuffleIcon from "@/icons/shuffle-icon";
import PlayButton from "./play-button";
import PlayerButton from "./player-button";
import { Slider } from "./ui/slider";

const Player = () => {
	return (
		<div className="flex flex-col items-center gap-2 px-28">
			<div className="pt-1 flex gap-6 items-center ">
				<PlayerButton>
					<ShuffleIcon />
				</PlayerButton>

				<PlayerButton>
					<PreviousSong />
				</PlayerButton>

				<PlayButton
					styles="bg-white rounded-full p-2 transition-all hover:scale-105"
					width={16}
					height={16}
				/>

				<PlayerButton>
					<NextSong />
				</PlayerButton>

				<PlayerButton>
					<LoopIcon />
				</PlayerButton>
			</div>
			<div className="flex gap-2 w-full items-center">
				<p className="text-xs text-zinc-400">0:20</p>
				<Slider className="flex-1" />
				<p className="text-xs text-zinc-400">3:43</p>
			</div>
		</div>
	);
};

export default Player;
