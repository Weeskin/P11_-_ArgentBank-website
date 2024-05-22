export default function ConnexionPage() {
	return (
		<main className="main bg-dark">
			<section className="sign-in-content">
				<i className="fa-solid fa-circle-user sign-in-icon"></i>
				<h1>Sign In</h1>
				<form>
					<div className="imput-wrapper">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
							name="username"
							required
						/>
					</div>
					<div className="imput-wrapper">
						<label htmlFor="password">Password</label>
						<input
							type="text"
							id="password"
							name="password"
							required
						/>
					</div>
					<div className="input-remember">
						<input
							type="checkbox"
							id="remember-me"
						/>
						<label htmlFor="remember-me">Remember me</label>
					</div>
					<button
						className="sign-in-button"
						type="submit"
					>
						Sign In
					</button>
				</form>
			</section>
		</main>
	);
}
