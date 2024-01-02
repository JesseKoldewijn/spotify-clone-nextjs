import Link from "next/link";

const InstallFooterItem = ({ href, name }: { href: string; name: string }) => {
	return (
		<li>
			<Link
				href={href}
				className="text-zinc-400 hover:underline hover:text-zinc-100"
			>
				{name}
			</Link>
		</li>
	);
};

export default InstallFooterItem;
