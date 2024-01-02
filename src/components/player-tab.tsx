import Player from "./player";
import PlayerCurrentSong from "./player-current-song";
import PlayerPanel from "./player-panel";

const PlayerTab = () => {
	return (
		<section className="[grid-area:player] p-3 flex justify-between">
			<PlayerCurrentSong />
			<Player />
			<PlayerPanel />
		</section>
	);
};

export default PlayerTab;
