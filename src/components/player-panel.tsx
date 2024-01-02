import ConnectToDeviceIcon from "@/icons/connect-to-device-icon";
import FullScreenIcon from "@/icons/full-screen-icon";
import MicrophoneIcon from "@/icons/microphone-icon";
import MiniPlayerIcon from "@/icons/mini-player-icon";
import NowPlayingIcon from "@/icons/now-playing-icon";
import QueueIcon from "@/icons/queue-icon";
import VolumeLowIcon from "@/icons/volume-low-icon";
import PlayerButton from "./player-button";
import { Slider } from "./ui/slider";

const PlayerPanel = () => {
	return (
		<div className="flex gap-3 pl-20 text-zinc-400 items-center justify-end">
			<PlayerButton>
				<NowPlayingIcon />
			</PlayerButton>

			<PlayerButton>
				<MicrophoneIcon />
			</PlayerButton>

			<PlayerButton>
				<QueueIcon />
			</PlayerButton>

			<PlayerButton>
				<ConnectToDeviceIcon />
			</PlayerButton>

			<PlayerButton>
				<VolumeLowIcon />
			</PlayerButton>
			<Slider className="flex-1" />

			<PlayerButton>
				<MiniPlayerIcon />
			</PlayerButton>

			<PlayerButton>
				<FullScreenIcon />
			</PlayerButton>
		</div>
	);
};

export default PlayerPanel;
