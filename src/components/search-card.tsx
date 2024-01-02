import pokeball from "@images/pokeball.webp";
import Image from "next/image";
import Link from "next/link";

const SearchCard = ({ title, href }: { title: string; href?: string }) => {
	return (
		<Link href={"#"}>
			<article className="bg-green-500 rounded-md relative overflow-hidden p-3 aspect-square">
				<h3 className="-tracking-wider text-2xl font-bold">{title}</h3>
				<Image
					src={pokeball}
					alt="Placeholder image"
					width={100}
					height={100}
					className="absolute rotate-[30deg] bottom-[-10px] right-[-20px]"
				/>
			</article>
		</Link>
	);
};

export default SearchCard;
