const LoginForm = () => {
	return (
		<form action="" className="flex flex-col gap-4">
			<div className="flex flex-col gap-2">
				<label htmlFor="username" className="text-sm font-bold">
					Email or username
				</label>
				<input
					type="text"
					placeholder="Email or username"
					className="p-2 rounded focus:bg-transparent focus:outline-white focus:border-white focus:ring-white"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="username" className="text-sm font-bold">
					Password
				</label>
				<input type="password" placeholder="Password" className="p-2 rounded" />
			</div>
			<button
				type="submit"
				className="bg-green-500 py-3 px-7 mt-3 transition-all hover:scale-105 rounded-full"
			>
				<span className="text-black font-bold">Log in</span>
			</button>
		</form>
	);
};

export default LoginForm;
