import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/homePage";
import SignInPage from "./pages/signInPage";
// import Profile from "./pages/userPage";
// import ErrorPage from "./pages/errorPage";
import "./assets/css/style.css";

export default function AppRouter() {
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
				{/* <Route
					path="/Profile"
					lement={<Profile />}
				/>
				<Route
					path="*"
					element={<ErrorPage />}
				/> */}
			</Routes>
			<Footer />
		</Router>
	);
}
