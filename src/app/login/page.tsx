import LoginForm from "@/components/login-form";
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

					<LoginForm />

					<Link href="/">
						<h3 className="my-6 hover:underline text-center hover:text-green-500">
							Forgot your password?
						</h3>
					</Link>

					<hr className="h-px my-8 bg-gray-200 border-0 rounded-full dark:bg-gray-700" />

					<p className="text-center pt-2 text-zinc-300">
						Don&apos;t have an account?{" "}
						<Link href={"/"} className="hover:underline">
							Sign up for spotify
						</Link>
					</p>
				</div>
			</main>
		</>
	);
};

export default LoginPage;
