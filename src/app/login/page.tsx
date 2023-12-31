import LoginProviders from "@/components/login-providers";
import SpotifyIcon from "@/icons/spotify-icon";

const LoginPage = () => {
	return (
		<>
			<header className="bg-zinc-950 w-screen flex items-center py-6 px-12 h-fit rounded-none">
				<SpotifyIcon width={117} height={36} />
			</header>

			<main className="flex justify-center items-center flex-1">
				<section className="bg-zinc-950 py-24 px-52 rounded-xl">
					<h1 className="text-5xl font-bold -tracking-wider mb-14">
						Log in to Spotify
					</h1>

					<LoginProviders />
				</section>
			</main>
		</>
	);
};

export default LoginPage;
