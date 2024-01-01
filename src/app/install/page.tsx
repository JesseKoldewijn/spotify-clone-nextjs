import ContentMain from "@/components/content-main";
import Image from "next/image";
import Link from "next/link";

const InstallPage = () => {
	return (
		<ContentMain>
			<div className="h-full max-w-[640px] mx-auto flex flex-col justify-center items-center">
				<Image
					src={
						"https://open.spotifycdn.com/cdn/images/devices/mac.3fbeb8c6.png"
					}
					alt="Spotify Image"
					width={640}
					height={396}
				/>
				<p className="text-[2rem] leading-10 -tracking-wider font-bold text-center mb-6">
					Seamlessly listen to music you love. Download the Spotify app for your
					computer.
				</p>

				<Link href={"#"}>
					<button className="bg-green-500 py-3 px-6 rounded-full transition-all hover:scale-105">
						<h4 className="font-semibold text-black">Get our free app</h4>
					</button>
				</Link>
			</div>
		</ContentMain>
	);
};

export default InstallPage;
