import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/" className="text-decoration-none">
					<span className="navbar-brand mb-0 h1">Fullstack Demo</span>
				</Link>
				<div className="ml-auto">
					<Link to="/signup">
						<button className="btn btn-secondary">Sign Up</button>
					</Link>
					<Link to="/login">
						<button className="btn btn-primary ms-2">Log In</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};