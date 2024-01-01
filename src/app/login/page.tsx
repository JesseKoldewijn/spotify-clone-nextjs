import LoginProviders from "@/components/login-providers";
import SpotifyIcon from "@/icons/spotify-icon";
import Link from "next/link";

const LoginPage = () => {
	return (
		<>
			<header className="bg-zinc-950 w-screen flex items-center py-6 px-12 h-fit rounded-none">
				<SpotifyIcon width={117} height={36} />
			</header>

			<main className="flex justify-center items-center flex-1 py-8">
				<div className="bg-zinc-950 py-24 px-52 rounded-xl">
					<section>
						<h1 className="text-5xl font-bold -tracking-wider mb-14">
							Log in to Spotify
						</h1>

						<LoginProviders />
					</section>
					<hr className="h-px my-8 bg-gray-200 border-0 rounded-full dark:bg-gray-700" />

					<form action="" className="flex flex-col gap-4">
						<div className="flex flex-col gap-2">
							<label htmlFor="username" className="text-sm font-bold">
								Email or username
							</label>
							<input
								type="text"
								placeholder="Email or username"
								className="p-2 rounded"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="username" className="text-sm font-bold">
								Password
							</label>
							<input
								type="password"
								placeholder="Password"
								className="p-2 rounded"
							/>
						</div>
						<button
							type="submit"
							className="bg-green-500 py-3 px-7 mt-3 transition-all hover:scale-105 rounded-full"
						>
							<span className="text-black font-bold">Log in</span>
						</button>
					</form>

					<Link href="/">
						<h3 className="my-6 hover:underline text-center hover:text-green-500">
							Forgot your password?
						</h3>
					</Link>

					<hr className="h-px my-8 bg-gray-200 border-0 rounded-full dark:bg-gray-700" />
				</div>
			</main>
		</>
	);
};

export default LoginPage;
