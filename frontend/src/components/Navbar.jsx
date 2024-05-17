import { NavLink } from "react-router-dom";

import Logo from "../assets/img/argentBankLogo.webp";

export default function Navbar() {
	return (
		<header>
			<h1 className="sr-only">Argent Bank</h1>
			<nav className="main-nav">
				<NavLink
					to="/"
					className="main-nav-logo"
				>
					<img
						className="main-nav-logo-image"
						src={Logo}
						alt="Argent Bank Logo"
					/>
				</NavLink>
			</nav>
		</header>
	);
}
