import ContentMain from "@/components/content-main";
import Image from "next/image";
import Link from "next/link";

const InstallPage = () => {
	return (
		<ContentMain>
			<div className="flex flex-col gap-32 bg-gradient-to-b from-blue-950 via-neutral-900 to-neutral-900 px-8 pb-20">
				<main className="max-w-[640px] mx-auto flex flex-col justify-center items-center">
					<Image
						src={
							"https://open.spotifycdn.com/cdn/images/devices/mac.3fbeb8c6.png"
						}
						alt="Spotify Image"
						width={640}
						height={396}
						className="pt-10"
					/>
					<p className="text-[2rem] leading-10 -tracking-wider font-bold text-center mb-6">
						Seamlessly listen to music you love. Download the Spotify app for
						your computer.
					</p>

					<Link
						href={"https://www.spotify.com/co-en/download/windows/"}
						target="_blank"
						rel="noopener norreferer"
					>
						<button className="bg-green-500 py-3 px-8 rounded-full transition-all hover:scale-105">
							<h4 className="font-bold text-black">Get our free app</h4>
						</button>
					</Link>
				</main>
			</div>
		</ContentMain>
	);
};

export default InstallPage;
