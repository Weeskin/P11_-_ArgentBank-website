import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/homePage";
import SignInPage from "./pages/signInPage";
import Profile from "./pages/userPage";
import ErrorPage from "./pages/errorPage";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./redux/Actions/authActions";
import "./assets/css/style.css";

export default function AppRouter() {
	const dispatch = useDispatch();
	const token = localStorage.getItem("token");

	if (token) {
		dispatch(loginSuccess(token));
	}

	return (
		<Router>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<HomePage />}
				/>
				<Route
					path="/Login"
					element={<SignInPage />}
				/>
				<Route
					path="/Profile"
					element={<Profile />}
				/>
				<Route
					path="*"
					element={<ErrorPage />}
				/>
			</Routes>
			<Footer />
		</Router>
	);
}
