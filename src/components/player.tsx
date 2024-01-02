import LoopIcon from "@/icons/loop-icon";
import NextSong from "@/icons/next-song";
import PlayIcon from "@/icons/play-icon";
import PreviousSong from "@/icons/previous-song";
import ShuffleIcon from "@/icons/shuffle-icon";

const Player = () => {
	return (
		<div>
			<div className="flex gap-4 items-center text-zinc-400">
				<ShuffleIcon />
				<PreviousSong />
				<button className="bg-white p-2 rounded-full">
					<PlayIcon />
				</button>
				<NextSong />
				<LoopIcon />
			</div>
			<div></div>
		</div>
	);
};

export default Player;
