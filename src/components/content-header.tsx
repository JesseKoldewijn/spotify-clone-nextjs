"use client";
import ChevronLeft from "@/icons/chevron-left";
import ChevronRight from "@/icons/chevron-right";
import { useSession } from "next-auth/react";
import ContentHeaderAuth from "./content-header-auth";

const ContentHeader = () => {
	const { data: session } = useSession();
	return (
		<header
			id="content-header"
			className={`${
				session ? "py-3" : "py-2 bg-zinc-950"
			} relative  flex items-center justify-between px-6`}
		>
			<div className="flex gap-2">
				<button className="grid place-items-center text-zinc-100 bg-black p-2 aspect-square rounded-full">
					<ChevronLeft />
				</button>
				<button className="grid place-items-center text-zinc-100 bg-black p-2 aspect-square rounded-full">
					<ChevronRight />
				</button>
			</div>

			<ContentHeaderAuth />
		</header>
	);
};

export default ContentHeader;
