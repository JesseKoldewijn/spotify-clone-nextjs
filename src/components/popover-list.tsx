import More from "@/icons/more";
import Link from "next/link";
import LogoutButton from "./logout-button";

const PopoverList = ({ showModal }: { showModal?: boolean }) => {
	return (
		<>
			<ul
				className={`absolute text-sm flex flex-col gap-1 bg-zinc-800 right-4 top-12 p-1 [&>li]:transition-all rounded-lg ${
					showModal ? "opacity-100 animate-fadeIn" : "opacity-0 animate-fadeOut"
				}`}
			>
				<li>
					<Link
						href={"#"}
						className="hover:bg-zinc-700 p-2 rounded flex justify-between items-center gap-24"
					>
						<p>Account</p>
						<More />
					</Link>
				</li>
				<li className="hover:bg-zinc-700 p-2 rounded">
					<Link href={"#"}>Profile</Link>
				</li>
				<li className="hover:bg-zinc-700 p-2 rounded">
					<Link href={"#"}>Settings</Link>
				</li>
				<hr />
				<li className="hover:bg-zinc-700 p-2 rounded">
					<LogoutButton />
				</li>
			</ul>
		</>
	);
};

export default PopoverList;
