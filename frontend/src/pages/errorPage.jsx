import { Link } from "react-router-dom";

export default function errorPage() {
	return (
		<div className="error-page">
			<h2>404 - Page not found</h2>
			<p>We are sorry but the page you are looking for does not exist.</p>
			<Link
				className="error-back_home"
				to={"/"}
			>
				Back to home
			</Link>
		</div>
	);
}
