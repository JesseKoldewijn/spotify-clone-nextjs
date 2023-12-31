import Player from "@/components/player";
import SliderProvider from "@/providers/slider-provider";

export default function Home() {
	return (
		<>
			<SliderProvider />
			<Player />
		</>
	);
}
