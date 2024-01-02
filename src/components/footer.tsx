import FacebookIcon from "@/icons/facebook-icon";
import InstagramIcon from "@/icons/instagram-icon";
import TwitterIcon from "@/icons/twitter-icon";
import Link from "next/link";
import FooterItem from "./footer-item";
import FooterList from "./footer-list";

const Footer = () => {
	return (
		<footer className="flex flex-col bg-inherit px-6 pb-20">
			<div className="flex justify-between items-start">
				<div className="flex gap-32">
					<FooterList title="Company">
						<FooterItem href="#" name="About" />
						<FooterItem href="#" name="Jobs" />
						<FooterItem href="#" name="For the Record" />
					</FooterList>

					<FooterList title="Communities">
						<FooterItem href="#" name="For Artists" />
						<FooterItem href="#" name="Developers" />
						<FooterItem href="#" name="Advertising" />
						<FooterItem href="#" name="Investors" />
						<FooterItem href="#" name="Vendors" />
					</FooterList>

					<FooterList title="Useful links">
						<FooterItem href="#" name="Support" />
						<FooterItem href="#" name="Free Mobile App" />
					</FooterList>
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

export default Footer;
