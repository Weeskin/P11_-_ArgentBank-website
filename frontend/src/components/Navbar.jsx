import { NavLink } from "react-router-dom";

import Logo from "../assets/img/argentBankLogo.webp";

export default function Navbar() {
	return (
		<header>
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
				<div className="not-connected">
					<NavLink
						className="main-nav-item"
						to="/login"
					>
						<i
							className="fa fa-user-circle"
							aria-hidden="true"
						></i>
						<p>Sign In</p>
					</NavLink>
				</div>
			</nav>
		</header>
	);
}
