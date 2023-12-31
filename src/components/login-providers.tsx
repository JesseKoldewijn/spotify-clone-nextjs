import HomeIcon from "@/icons/home-icon";
import LoginButton from "./login-button";

const LoginProviders = () => {
	return (
		<div className="flex flex-col gap-3 justify-center items-stretch">
			<LoginButton name="Google" provider="google">
				<HomeIcon />
			</LoginButton>
			<LoginButton name="Facebook">
				<HomeIcon />
			</LoginButton>
			<LoginButton name="Apple">
				<HomeIcon />
			</LoginButton>
			<LoginButton name="phone number" />
		</div>
	);
};

export default LoginProviders;
