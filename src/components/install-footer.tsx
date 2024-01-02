import FacebookIcon from "@/icons/facebook-icon";
import InstagramIcon from "@/icons/instagram-icon";
import TwitterIcon from "@/icons/twitter-icon";
import Link from "next/link";
import InstallFooterItem from "./install-footer-item";
import InstallFooterList from "./install-footer-list";

const InstallFooter = () => {
	return (
		<footer className="flex flex-col">
			<div className="flex justify-between items-start">
				<div className="flex gap-32">
					<InstallFooterList title="Company">
						<InstallFooterItem href="#" name="About" />
						<InstallFooterItem href="#" name="Jobs" />
						<InstallFooterItem href="#" name="For the Record" />
					</InstallFooterList>

					<InstallFooterList title="Communities">
						<InstallFooterItem href="#" name="For Artists" />
						<InstallFooterItem href="#" name="Developers" />
						<InstallFooterItem href="#" name="Advertising" />
						<InstallFooterItem href="#" name="Investors" />
						<InstallFooterItem href="#" name="Vendors" />
					</InstallFooterList>

					<InstallFooterList title="Useful links">
						<InstallFooterItem href="#" name="Support" />
						<InstallFooterItem href="#" name="Free Mobile App" />
					</InstallFooterList>
				</div>
				<ul className="flex gap-3">
					<li>
						<Link href={"#"}>
							<button className="bg-zinc-800 hover:bg-zinc-600 transition-all p-3 rounded-full">
								<InstagramIcon />
							</button>
						</Link>
					</li>
					<li>
						<Link href={"#"}>
							<button className="bg-zinc-800 hover:bg-zinc-600 transition-all p-3 rounded-full">
								<TwitterIcon />
							</button>
						</Link>
					</li>
					<li>
						<Link href={"#"}>
							<button className="bg-zinc-800 hover:bg-zinc-600 transition-all p-3 rounded-full">
								<FacebookIcon />
							</button>
						</Link>
					</li>
				</ul>
			</div>

			<hr className="h-px my-10 bg-gray-200 border-0 dark:bg-gray-700" />

			<div className="flex justify-between text-zinc-400 text-sm ">
				<ul className="flex gap-4">
					<li className="hover:text-zinc-100 transition-all">
						<Link href={"#"}>Legal</Link>
					</li>
					<li className="hover:text-zinc-100 transition-all">
						<Link href={"#"}>Privacy Center</Link>
					</li>
					<li className="hover:text-zinc-100 transition-all">
						<Link href={"#"}>Privacy Policy</Link>
					</li>
					<li className="hover:text-zinc-100 transition-all">
						<Link href={"#"}>Cookies</Link>
					</li>
					<li className="hover:text-zinc-100 transition-all">
						<Link href={"#"}>About Ads</Link>
					</li>
					<li className="hover:text-zinc-100 transition-all">
						<Link href={"#"}>Accesibility</Link>
					</li>
				</ul>

				<p className="pr-2">© 2024 Spotify AB</p>
			</div>
		</footer>
	);
};

export default InstallFooter;
