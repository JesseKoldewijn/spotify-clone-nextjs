import ContentMain from "@/components/content-main";
import Footer from "@/components/footer";

const Notifications = () => {
	return (
		<ContentMain bgColor="bg-zinc-900">
			<main className="px-6 py-9">
				<h1 className="text-4xl font-bold -tracking-wider pb-1">
					What&apos;s new
				</h1>

				<p className="text-neutral-400 text-sm">
					The latest releases from artists, podcasts, and shows you follow.
				</p>
			</main>
			<Footer />
		</ContentMain>
	);
};

export default Notifications;
