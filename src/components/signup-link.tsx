import Link from "next/link";

const SignUpLink = () => {
	return (
		<Link href={"#"}>
			<button className="transition-transform hover:scale-105 font-bold">
				Sign up
			</button>
		</Link>
	);
};

export default SignUpLink;
