import AppleIcon from "@/icons/apple-icon";
import FacebookIcon from "@/icons/facebook-icon";
import GoogleIcon from "@/icons/google-icon";
import LoginButton from "./login-button";

const LoginProviders = () => {
	return (
		<div className="flex flex-col gap-3 items-stretch content-baseline">
			<LoginButton name="Google" provider="google">
				<GoogleIcon />
			</LoginButton>
			<LoginButton name="Facebook">
				<FacebookIcon />
			</LoginButton>
			<LoginButton name="Apple">
				<AppleIcon />
			</LoginButton>
			<LoginButton name="phone number" />
		</div>
	);
};

export default LoginProviders;
