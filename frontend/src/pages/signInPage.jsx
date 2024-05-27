import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess, loginError } from "../redux/Actions/authActions";

export default function ConnexionPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [signInClicked, setSignInClicked] = useState(false);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubmit = async (event) => {
		event.preventDefault();
		setSignInClicked(true);

		try {
			const response = await fetch("http://localhost:3001/api/v1/user/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({ email, password })
			});
			if (response.ok) {
				const data = await response.json();

				const token = data.body.token;
				dispatch(loginSuccess(token));
				localStorage.setItem("token", token);
				console.log("Connexion réussie");
				navigate("/Profile");
			} else {
				const error = await response.json();
				dispatch(loginError(error.message));
				setErrorMessage("E-mail/Mot de passe incorrect");
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<main className="main bg-dark">
			<section className="sign-in-content">
				<i className="fa-solid fa-circle-user sign-in-icon"></i>
				<h1>Sign In</h1>
				<form onSubmit={handleSubmit}>
					<div className="imput-wrapper">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="imput-wrapper">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
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
					{errorMessage && signInClicked && (
						<div className="error-message">{errorMessage}</div>
					)}
				</form>
			</section>
		</main>
	);
}
