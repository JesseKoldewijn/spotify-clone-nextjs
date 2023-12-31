import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";
import PopoverList from "./popover-list";

const ProfilePhotoButton = ({ src, alt }: { src: string; alt: string }) => {
	const [showModal, setShowModal] = useState(false);

	const location = document.getElementById("content-header");

	const handleClick = () => {
		if (showModal) {
			setTimeout(() => setShowModal(false), 0);
		} else {
			setShowModal(true);
		}
	};

	return (
		<button onClick={handleClick}>
			<figure className="bg-zinc-900 transition-all duration-300 hover:scale-105 hover:bg-black p-1 rounded-full">
				<Image
					src={src}
					alt={`Profile picture of ${alt}`}
					width={28}
					height={28}
					className="rounded-full"
				/>
				{location &&
					createPortal(<PopoverList showModal={showModal} />, location)}
			</figure>
		</button>
	);
};

export default ProfilePhotoButton;
