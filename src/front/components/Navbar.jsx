import { Link } from "react-router-dom";

export const Navbar = () => {
	const getMyTasks = async () => {
	const token = localStorage.getItem('jwt-token');
	console.log(token)

	const resp = await fetch(`https://shiny-trout-g46vq9jvg9j5c9w9-3001.app.github.dev/api/protected`, {
		method: 'GET',
		headers: { 
			"Content-Type": "application/json",
			'Authorization': 'Bearer ' + token
		}
	});

	if (resp.status === 403) {
		throw new Error("Missing or invalid token");
	} else if (!resp.ok) {
		throw new Error("There was a problem in the login request");
	}

	const data = await resp.json();
	console.log("This is the data you requested", data);
	return data;
}


	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/" className="text-decoration-none">
					<span className="navbar-brand mb-0 h1">Fullstack Demo</span>
				</Link>
				<div className="ml-auto">
					<button onClick={getMyTasks}>
						Test
					</button>
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