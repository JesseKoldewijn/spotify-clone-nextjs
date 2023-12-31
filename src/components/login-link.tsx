import Link from "next/link";

const LoginLink = () => {
	return (
		<Link href={"/login"}>
			<button className="bg-zinc-50 text-black py-3 px-8 rounded-full font-bold transition-transform hover:scale-105 hover:bg-zinc-100">
				Log in
			</button>
		</Link>
	);
};

export default LoginLink;
