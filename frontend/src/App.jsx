import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";

import "./assets/style/App.css";

export default function AppRouter() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<homePage />}
				/>
				<Route
					path="/Login"
					element={<connexionPage />}
				/>
				<Route
					path="/User"
					element={<userPage />}
				/>
				<Route
					path="*"
					element={<errorPage />}
				/>
			</Routes>
			<Footer />
		</Router>
	);
}
