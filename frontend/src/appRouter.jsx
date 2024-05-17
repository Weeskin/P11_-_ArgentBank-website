import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/homePage";
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
			</Routes>
			<Footer />
		</Router>
	);
}
