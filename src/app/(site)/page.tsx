import ContentMain from "@/components/content-main";
import DailyMix from "@/components/daily-mix";
import DailyMixContainer from "@/components/daily-mix-container";
import Footer from "@/components/footer";
import GreetingTitle from "@/components/greeting-title";
import PageSection from "@/components/page-section";
import TitleUser from "@/components/title-user";
import styles from "@styles/page.module.css";
import Link from "next/link";

export default function Home() {
	return (
		<ContentMain bgColor="bg-zinc-900">
			<main className="px-6 pt-3 pb-[5.5rem] flex flex-col gap-2">
				<GreetingTitle />
				<div className="sections flex flex-col gap-12">
					<section className={`${styles.cardContainerTwo} gap-3`}>
						<DailyMix />
						<DailyMix />
						<DailyMix />
						<DailyMix />
					</section>

					<section>
						<div className="flex justify-between">
							<Link href={"#"} className="hover:underline">
								<h2 className="-tracking-wider font-bold text-2xl mb-4">
									Made for <TitleUser />
								</h2>
							</Link>

							<Link
								href={"#"}
								className="hover:underline text-zinc-400 font-bold text-sm"
							>
								Show all
							</Link>
						</div>

						<DailyMixContainer />
					</section>

					<PageSection title="Your top mixes" />
					<PageSection title="Recently played" />
					<PageSection title="Episodes for you" />
					<PageSection title="Based on your recent listening" />
					<PageSection title="Popular albums" />
					<PageSection title="En tendencia" />
					<PageSection title="Today's biggest hit" />
					<PageSection title="Popular radio" />
					<PageSection title="Colombia's favourite artists" />
					<PageSection title="Salsa idols" />
					<PageSection title="Made in Medellin" />
					<PageSection title="Recommended radio" />
				</div>
			</main>
			<Footer />
		</ContentMain>
	);
}
