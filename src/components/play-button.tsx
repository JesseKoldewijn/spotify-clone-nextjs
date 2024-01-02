import PlayIcon from "@/icons/play-icon";

const PlayButton = () => {
	return (
		<button className="bg-green-500 z-10 transition-all hover:scale-105 p-3 rounded-full absolute bottom-24 right-5">
			<PlayIcon />
		</button>
	);
};

export default PlayButton;
