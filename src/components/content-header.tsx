"use client";
import ChevronLeft from "@/icons/chevron-left";
import ChevronRight from "@/icons/chevron-right";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import ContentHeaderAuth from "./content-header-auth";

const ContentHeader = () => {
	const { data: session } = useSession();
	const router = useRouter();

	return (
		<header
			id="content-header"
			className={`${
				session ? "py-3 bg-zinc-900" : "py-2 bg-zinc-950"
			} sticky top-0 z-50`}
		>
			<div className=" flex items-center justify-between px-6">
				<div className="flex gap-2">
					<button
						onClick={() => router.back()}
						className="grid place-items-center text-zinc-100 bg-black p-2 aspect-square rounded-full"
					>
						<ChevronLeft />
					</button>
					<button
						onClick={() => router.forward()}
						className="grid place-items-center text-zinc-100 bg-black p-2 aspect-square rounded-full"
					>
						<ChevronRight />
					</button>
				</div>

				<ContentHeaderAuth />
			</div>
		</header>
	);
};

export default ContentHeader;
